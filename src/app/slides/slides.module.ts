import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";

import {SharedModule} from "../shared/shared.module";
import {GratsOneComponent} from "./grats-one/grats-one.component";
import {GratsTwoComponent} from "./grats-two/grats-two.component";
import {GratsThreeComponent} from "./grats-three/grats-three.component";
import {GratsFourComponent} from "./grats-four/grats-four.component";
import {GratsFiveComponent} from "./grats-five/grats-five.component";
import {FirstSlideComponent} from "./first-slide/first-slide.component";
import {GratsSixComponent} from "./grats-six/grats-six.component";
import {GratsSevenComponent} from "./grats-seven/grats-seven.component";
import {GratsEightComponent} from "./grats-eight/grats-eight.component";
import {GratsNineComponent} from "./grats-nine/grats-nine.component";
import {GratsPugComponent} from "./grats-pug/grats-pug.component";
import {BookSlideComponent} from "./book-slide/book-slide.component";
import {LastSlideComponent} from "./last-slide/last-slide.component";

@NgModule({
  declarations: [
    FirstSlideComponent,
    GratsOneComponent,
    GratsTwoComponent,
    GratsThreeComponent,
    GratsFourComponent,
    GratsFiveComponent,
    GratsSixComponent,
    GratsSevenComponent,
    GratsEightComponent,
    GratsNineComponent,
    GratsPugComponent,
    BookSlideComponent,
    LastSlideComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    FirstSlideComponent,
    GratsOneComponent,
    GratsTwoComponent,
    GratsThreeComponent,
    GratsFourComponent,
    GratsFiveComponent,
    GratsSixComponent,
    GratsSevenComponent,
    GratsEightComponent,
    GratsNineComponent,
    GratsPugComponent,
    BookSlideComponent,
    LastSlideComponent
  ]
})
export class SlidesModule { }
