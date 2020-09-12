import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, ObservableInput, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _homeArticle: Array<any>;
  private _allArticle: Array<any>;
  private _community: any;
  private _activatedCommunityId: string;
  private _activatedCommunity: any;
  private _viewArticle: any;

  constructor(
    private http: HttpClient
  ) { }

  private handleError(error) {
    alert(`[${error.status}] ${error.statusText}`);
  }

  public getHomeArticle() {
    this.http.get('https://catchk.net/api/cover/en/home')
      .subscribe(
        (success: Array<any>) => this._homeArticle = success,
        error => this.handleError(error)
      );
  }

  public getAllArticle() {
    this.http.get('https://catchk.net/api/article/en/list?article_statuses=A&is_all=false&page=1&size=32&sort_type=R&tag_id=')
      .subscribe(
        (success: Array<any>) => this._allArticle = success,
        error => this.handleError(error)
      );
  }

  get homeArticle(): Array<any> {
    return this._homeArticle;
  }

  get allArticle(): Array<any> {
    return this._allArticle;
  }

  async getCommunity() {
    this._community = await this.http.get('http://127.0.0.1:3000/api/community').toPromise();
  }

  async getCommunityById(id) {
    this._activatedCommunityId = id;
    this._activatedCommunity = await this.http.get(`http://127.0.0.1:3000/api/community/${id}`).toPromise();
  }

  get community(): Map<any, Array<any>> {
    return this._community;
  }

  get activatedCommunityName(): string {
    for (let key of this._community.keys()) {
      if (key.id === this._activatedCommunityId) {
        return key.title;
      }
    }
    return '';
  }

  get activatedCommunityId(): string {
    return this._activatedCommunityId;
  }

  get activatedCommunity(): any {
    return this._activatedCommunity;
  }

  public getCommunityArticle(idx) {
    const filtered = this._activatedCommunity.list.filter(article => ''+article.idx === idx);
    return filtered[0];
  }

  async addReply(id, reply: string) {
    return await this.http.post(`http://127.0.0.1:3000/api/community/${this._activatedCommunityId}/view/${id}/reply`, {add:reply}).toPromise();
  }

  get viewArticle(): any {
    return this._viewArticle;
  }

  async uploadArticle(title: string, username: string, content: string) {
    const payload = {
      title: title,
      author: username,
      text: content
    }
    return await this.http.post(`http://127.0.0.1:3000/api/community/${this._activatedCommunityId}`, payload).toPromise();
  }
}
