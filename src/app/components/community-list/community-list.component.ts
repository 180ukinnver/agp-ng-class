import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-community-list',
  templateUrl: './community-list.component.html',
  styleUrls: ['./community-list.component.css']
})
export class CommunityListComponent implements OnInit {

  communityTitle: string;
  articles: Array<any>;

  constructor(
    private route: ActivatedRoute,
    public apis: ApiService
  ) { }

  async ngOnInit() {
    const _id = this.route.snapshot.params.id;
    await this.apis.getCommunityById(_id);
    this.communityTitle = this.apis.activatedCommunity.title;
    this.articles = this.apis.activatedCommunity.list;
  }
}
