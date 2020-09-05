import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(
    public apis: ApiService
  ) { }

  ngOnInit(): void {
    this.apis.getHomeArticle();
    this.apis.getAllArticle();
  }

  // getImageSourceByCoverId(id: number): any {
  //   let url: string = 'http://d1y91tvk7due2q.cloudfront.net/';
  //   if (this.homeArticleList) {
  //     const filtered = this.homeArticleList.filter(element => element.setCoverId === id);
  //     url += filtered[0].content.thumbnail;
  //   }
  //   if (url.includes(".jpg") || url.includes(".png"))
  //     return url;
  //   else 
  //     return '';
  // }
}
