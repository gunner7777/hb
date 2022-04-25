import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';

@Component({
  selector: 'app-grats-ten',
  templateUrl: './grats-pug.component.html',
  styleUrls: ['./grats-pug.component.scss']
})
export class GratsPugComponent implements OnInit {
  @ViewChild('pug') pugImg: ElementRef | undefined;
  textShow = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  showText() {
    if(!this.textShow) {
      this.renderer.addClass(this.pugImg?.nativeElement, 'grats-pug__img_grats');
      this.textShow=true;
    }
  }

}
