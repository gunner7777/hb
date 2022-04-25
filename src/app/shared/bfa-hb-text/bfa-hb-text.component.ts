import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'p[app-bfa-hb-text]',
  templateUrl: './bfa-hb-text.component.html',
  styleUrls: ['./bfa-hb-text.component.scss'],
  host: {
    'class': 'bfa-hb-text'
  },
  encapsulation: ViewEncapsulation.None
})
export class BfaHbTextComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
