import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BfaButtonComponent} from "./bfa-button/bfa-button.component";
import {BfaPanelComponent} from "./bfa-panel/bfa-panel.component";
import { BfaActionTitleComponent } from './bfa-action-title/bfa-action-title.component';
import { BfaHbTextComponent } from './bfa-hb-text/bfa-hb-text.component';

@NgModule({
  declarations: [
    BfaButtonComponent,
    BfaPanelComponent,
    BfaActionTitleComponent,
    BfaHbTextComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BfaButtonComponent,
    BfaPanelComponent,
    BfaActionTitleComponent,
    BfaHbTextComponent,
  ]
})
export class SharedModule { }
