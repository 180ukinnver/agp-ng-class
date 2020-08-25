import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private _modalType: string;

  constructor() { 
    this._modalType = 'none';
  }

  get modalType() {
    return this._modalType;
  }
  
  set modalType(modalType: string) {
    this._modalType = modalType;
  }

}
