import {Component, OnDestroy, OnInit} from '@angular/core';
import {GratsService} from "../../grats.service";
import {Subject, Subscription} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit, OnDestroy {
  currentSlideNumber: number = 0
  gratsStatus: boolean = false;
  finalSlideNumber!: number;
  slideNumberSub: Subscription | undefined;
  destroyGetTodo = new Subject<boolean>();

  constructor(
    private gratsService: GratsService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.finalSlideNumber = this.gratsService.finalNumber;
    this.slideNumberSub = this.gratsService.slideChanged$
      .pipe(
        takeUntil(this.destroyGetTodo),
      )
      .subscribe(
        gratsState => {
          this.currentSlideNumber = gratsState.slideNumber;
          this.gratsStatus = gratsState.isCompleted;
          //console.log('current', this.currentSlideNumber);
        }
      );
  }

  goToBack() {
    this.gratsService.prevSlide();
    //console.log('fgg', this.currentSlideNumber);
    this.router.navigate([`hb/${this.currentSlideNumber}`]);
  }

  goToForward() {
    this.gratsService.nextSlide();
    this.router.navigate([`hb/${this.currentSlideNumber}`]);
  }

  restartGrats() {
    this.gratsService.restartGrats();
    this.router.navigate(['']);
  }

  showBookGuide() {
    this.gratsService.restartGrats();
    this.router.navigate(['hb/11']);
  }

  ngOnDestroy() {
    this.destroyGetTodo.next(true);
    this.destroyGetTodo.complete();
  }
}
