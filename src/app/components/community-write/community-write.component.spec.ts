import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityWriteComponent } from './community-write.component';

describe('CommunityWriteComponent', () => {
  let component: CommunityWriteComponent;
  let fixture: ComponentFixture<CommunityWriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityWriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityWriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
