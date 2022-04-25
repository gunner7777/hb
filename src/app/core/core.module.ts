import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ContentComponent} from "./content/content.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    NotFoundComponent
  ]
})
export class CoreModule { }
