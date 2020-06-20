import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { };

  footerEnabled(showFooter: boolean): boolean {
    return true;
  }
}
