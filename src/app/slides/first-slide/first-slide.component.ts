import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {GratsService} from "../../grats.service";
import {fromEvent, Subscription} from "rxjs";
import {debounce, debounceTime, delay, distinctUntilChanged, first, map, take, tap} from "rxjs/operators";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-first-slide',
  templateUrl: './first-slide.component.html',
  styleUrls: ['./first-slide.component.scss'],
})
export class FirstSlideComponent implements OnInit, AfterViewInit, OnDestroy {
  buttonClickSub: Subscription | undefined;
  @ViewChild('bluewhale') bluewhaleImg: ElementRef | undefined;
  @ViewChild('firstslide') firstSlide: ElementRef | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private gratsService: GratsService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gratsService.gratsStart();
  }

  ngAfterViewInit() {
    //this.gratsService.gratsCompleted$ = this.route.data.pipe(map(item => item.gratsCompleted));
    this.route.data
      .pipe(
        take(1)
      )
      .subscribe(
      (data) => {
        //console.log('data', data.gratsCompleted);
        //this.gratsService.gratsComplete = data.gratsCompleted;
        this.gratsService.gratsInit(data.gratsCompleted);
      }
    )

    this.buttonClickSub = fromEvent<MouseEvent>(this.firstSlide?.nativeElement, 'click')
      .pipe(
        take(1),
        tap(() => this.renderer.addClass(this.bluewhaleImg?.nativeElement, 'first-slide__img_bounce')),
        delay(1700)
      )
      .subscribe(
        (e) => {
          //this.gratsService.gratsStart();
          this.gratsService.nextSlide();
          this.router.navigate(['hb/1'], { relativeTo: this.route });
        }
      );
  }

  ngOnDestroy() {
    this.buttonClickSub?.unsubscribe();
  }
}
