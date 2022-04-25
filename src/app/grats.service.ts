import {Injectable, OnInit} from '@angular/core';
import {ReplaySubject, Subject} from "rxjs";
import {LocalstorageService} from "./localstorage.service";

export interface GratsState {
  slideNumber: number;
  isCompleted: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class GratsService implements OnInit {
  private slideChanged = new Subject<GratsState>();
  private gratsCompleted = new ReplaySubject<boolean>();
  slideChanged$ = this.slideChanged.asObservable();
  gratsCompleted$ = this.gratsCompleted.asObservable();
  slideNumber: number = 0;
  finalNumber = 12;
  gratsComplete = false;
  gratsBegin = false;

  constructor(private localStorageService: LocalstorageService) { }

  ngOnInit() {
    //console.log('ffffff', this.gratsComplete);
  }

  gratsInit(isCompleted: boolean) {
    this.gratsComplete = isCompleted;
    this.slideChanged.next({slideNumber: this.slideNumber, isCompleted: this.gratsComplete})
  }

  gratsStart() {
    this.gratsBegin = true;
    //console.log('gs',this.gratsComplete)
  }

  nextSlide() {
    this.slideNumber++;
    /*if (!this.gratsComplete) {
      this.gratsComplete = this.slideNumber === this.finalNumber;
    } else {
      this.localStorageService.setCompleteStatus();
    }*/
    if ((this.gratsComplete) || (this.slideNumber === this.finalNumber)) {
      this.gratsComplete = true;
      this.localStorageService.setCompleteStatus();
    }
    //console.log({slideNumber: this.slideNumber, isCompleted: this.gratsComplete});
    this.slideChanged.next({slideNumber: this.slideNumber, isCompleted: this.gratsComplete});
  }

  prevSlide() {
    this.slideNumber--;
    //this.gratsComplete = false;
    this.slideChanged.next({slideNumber: this.slideNumber, isCompleted: this.gratsComplete});
  }

  restartGrats() {
    this.slideNumber = 0;
    this.slideChanged.next({slideNumber: this.slideNumber, isCompleted: this.gratsComplete});
  }

}
