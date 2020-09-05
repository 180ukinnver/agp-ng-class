import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    public apis: ApiService
  ) { }

  ngOnInit(): void {
    this.apis.getCommunity();
  }

  get isList(): boolean {
    const path = document.location.href.split("/")
    if (path[path.length-2] === 'list' || path[path.length-2] === 'view') return true;
    else return false;
  }
}
