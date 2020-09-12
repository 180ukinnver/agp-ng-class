import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { SigninService } from 'src/app/services/signin.service';
import { Router } from '@angular/router';
declare var $: any;

@Component({
  selector: 'app-community-write',
  templateUrl: './community-write.component.html',
  styleUrls: ['./community-write.component.css']
})
export class CommunityWriteComponent implements OnInit {

  communityTitle: string;
  title: string;
  contents: string;

  constructor(
    private router: Router,
    private signinSvc: SigninService,
    public apis: ApiService
  ) { }

  ngOnInit(): void {
    if (!this.apis.activatedCommunity) {
      // await this.apis.getCommunityById(_id);
    }

    this.communityTitle = this.apis.activatedCommunity.title;
    $('#summernote').summernote({
      height: 230,
      dialogsInBody: true,
      callbacks: {
          onChange: (contents, $editable) => {
              this.contents = contents;
          }
        }
    });
    $('.note-popover').css({'display': 'none'});
  }

  async uploadArticle() {
    const result = await this.apis.uploadArticle(this.title, this.signinSvc.myInfo.username, encodeURI(this.contents));
    if (result) {
      this.router.navigate([`/community/list/${this.apis.activatedCommunityId}`]);
    } else {
      // failed
    }
  }
}
