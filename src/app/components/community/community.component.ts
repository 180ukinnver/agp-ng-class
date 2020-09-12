import { Component, OnInit } from '@angular/core';
// import { AuthService } from 'src/app/services/auth.service';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { SigninService } from 'src/app/services/signin.service';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {

  community: any;
  newBoardName: string;

  constructor(
    private router: Router,
    public signinSvc: SigninService,
    public apis: ApiService
  ) { }

  async ngOnInit() {
    await this.apis.getCommunity();
    this.community = this.apis.community;
  }

  get isList(): boolean {
    const path = document.location.href.split("/")
    if (path[path.length-2] === 'list' || path[path.length-2] === 'view' || path[path.length-1] === 'write') return true;
    else return false;
  }

  async getCommunityById(id, idx) {
    await this.apis.getCommunityById(id);
    this.router.navigate([`/community/view/${idx}`]);
  }
}
