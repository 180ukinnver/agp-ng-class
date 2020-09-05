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
  private _community: Map<any, Array<any>>;
  private _activatedCommunityId: string;
  private _activatedCommunity: Array<any>;
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

  public getCommunity() {
    this.http.get('http://172.30.1.6:3000/api/community')
      .subscribe(
        (success: Map<any, Array<any>>) => this._community = new Map(success),
        error => this.handleError(error)
      );
  }

  public getCommunityById(id) {
    this._activatedCommunityId = id;
    this.http.get(`http://172.30.1.6:3000/api/community/${id}`)
      .subscribe(
        (success: Array<any>) => this._activatedCommunity = success,
        error => this.handleError(error)
      );
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

  get activatedCommunity(): Array<any> {
    return this._activatedCommunity;
  }

  public getCommunityArticle(idx) {
    const filtered = this._activatedCommunity.filter(article => article.idx === idx);
    this._viewArticle = filtered[0];
  }

  get viewArticle(): any {
    return this._viewArticle;
  }
}
