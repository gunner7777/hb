import {ChangeDetectionStrategy, Component, ElementRef, OnInit, ViewEncapsulation} from '@angular/core';

const BUTTON_HOST_ATTRIBUTES = [
  'bfa-button',
  'bfa-flat-button',
  'bfa-icon-button',
];

@Component({
  selector: 'button[bfa-button], button[bfa-flat-button], button[bfa-icon-button]',
  templateUrl: './bfa-button.component.html',
  styleUrls: ['./bfa-button.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BfaButtonComponent implements OnInit {
  constructor(private _elementRef: ElementRef<HTMLButtonElement>) {
    for (const attr of BUTTON_HOST_ATTRIBUTES) {
      if (this._hasHostAttributes(attr)) {
        (<HTMLElement>this._getHostElement()).classList.add(attr);
      }
    }
  }

  ngOnInit() {
  }

  _getHostElement() {
    return this._elementRef.nativeElement;
  }

  _hasHostAttributes(...attributes: string[]) {
    return attributes.some(attribute => this._getHostElement().hasAttribute(attribute));
  }

}
