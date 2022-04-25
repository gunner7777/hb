import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-bfa-action-title',
  templateUrl: './bfa-action-title.component.html',
  styleUrls: ['./bfa-action-title.component.scss'],
  host: {
    'class': 'action-title'
  },
  encapsulation: ViewEncapsulation.None,
})
export class BfaActionTitleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
