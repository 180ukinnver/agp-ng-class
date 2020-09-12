import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-community-view',
  templateUrl: './community-view.component.html',
  styleUrls: ['./community-view.component.css']
})
export class CommunityViewComponent implements OnInit {

  communityTitle: string;
  article: any;
  newReply: string;

  constructor(
    private route: ActivatedRoute,
    public apis: ApiService
  ) { }

  async ngOnInit() {
    this.communityTitle = this.apis.activatedCommunity.title;
    const id = this.route.snapshot.params.id;
    this.article = this.apis.getCommunityArticle(id);
    this.article.date = moment(this.article.date).format("YYYY.MM.DD");
    this.article.text = [decodeURI(this.article.text[0])];
  }

  getImageSrc(line) {
    return line.replace('img:', '');
  }

  async addReply() {
    this.article = await this.apis.addReply(this.article.idx, this.newReply);
    this.article.text = [decodeURI(this.article.text[0])];
    this.newReply = '';
  }
}
