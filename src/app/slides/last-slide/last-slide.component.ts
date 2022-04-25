import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GratsService} from "../../grats.service";

@Component({
  selector: 'app-last-slide',
  templateUrl: './last-slide.component.html',
  styleUrls: ['./last-slide.component.scss']
})
export class LastSlideComponent implements OnInit {
  @ViewChild('bluewhale') blueWhaleImg: ElementRef | undefined;

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private gratsService: GratsService) { }

  ngOnInit(): void {
  }

  animateImg() {
    this.renderer.addClass(this.blueWhaleImg?.nativeElement, 'last-slide__img_tada-animation');
  }

  restartGrats() {
    this.gratsService.restartGrats();
    this.router.navigate(['']);
  }

}
