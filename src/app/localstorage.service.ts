import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {

  constructor() { }

  getCompleteStatus(): boolean {
    return !!localStorage.getItem('gratsCompleted');
  }
  setCompleteStatus() {
    localStorage.setItem('gratsCompleted', 'true');
  }
}
