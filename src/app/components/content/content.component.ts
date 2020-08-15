import { Component, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  title: string;
  today: Date = new Date();

  constructor() { 
    this.title = 'agp-ng-class';
  }

  ngOnChanges(changes): void {
    console.log('ngOnChanges', changes);
  } 

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
