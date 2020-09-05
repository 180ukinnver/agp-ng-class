import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-community-view',
  templateUrl: './community-view.component.html',
  styleUrls: ['./community-view.component.css']
})
export class CommunityViewComponent implements OnInit {

  constructor(
    public apis: ApiService
  ) { }

  ngOnInit(): void {
    
  }

}
