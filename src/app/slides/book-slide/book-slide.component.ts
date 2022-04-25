import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-book-slide',
  templateUrl: './book-slide.component.html',
  styleUrls: ['./book-slide.component.scss']
})
export class BookSlideComponent implements OnInit {
  //@ViewChild('exampleButton') exampleButton: ElementRef | undefined;
  imgShow = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  showImg() {
    if (!this.imgShow) {
     // this.renderer.addClass(this.)
      this.imgShow = true;
    }
  }

}
