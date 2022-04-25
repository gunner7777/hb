import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-bfa-panel',
  templateUrl: './bfa-panel.component.html',
  styleUrls: ['./bfa-panel.component.scss'],
  host: {
    class: 'bfa-panel',
    '[class.bfa-panel_not-fixed-height]': 'nfheight || null'
  },
  encapsulation: ViewEncapsulation.None,
})
export class BfaPanelComponent implements OnInit {
  @Input() nfheight: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
