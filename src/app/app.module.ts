import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {BfaPanelComponent} from "./shared/bfa-panel/bfa-panel.component";
import { HeaderComponent } from './core/header/header.component';
import { ContentComponent } from './core/content/content.component';
import { FooterComponent } from './core/footer/footer.component';
import { FirstSlideComponent } from './slides/first-slide/first-slide.component';
import { GratsOneComponent } from './slides/grats-one/grats-one.component';
import {AppRoutingModule} from "./app-routing.module";
import { GratsTwoComponent } from './slides/grats-two/grats-two.component';
import { GratsThreeComponent } from './slides/grats-three/grats-three.component';
import { GratsFourComponent } from './slides/grats-four/grats-four.component';
import { GratsFiveComponent } from './slides/grats-five/grats-five.component';
import { GratsSixComponent } from './slides/grats-six/grats-six.component';
import { GratsSevenComponent } from './slides/grats-seven/grats-seven.component';
import { GratsEightComponent } from './slides/grats-eight/grats-eight.component';
import { GratsNineComponent } from './slides/grats-nine/grats-nine.component';
import { GratsPugComponent } from './slides/grats-pug/grats-pug.component';
import { BookSlideComponent } from './slides/book-slide/book-slide.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { LastSlideComponent } from './slides/last-slide/last-slide.component';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {SlidesModule} from "./slides/slides.module";


@NgModule({
  declarations: [
    AppComponent,
    //BfaPanelComponent,
    //HeaderComponent,
    //ContentComponent,
    //FooterComponent,
    //FirstSlideComponent,
    //GratsOneComponent,
    //GratsTwoComponent,
    //GratsThreeComponent,
    //GratsFourComponent,
    //GratsFiveComponent,
    //GratsSixComponent,
    //GratsSevenComponent,
    //GratsEightComponent,
    //GratsNineComponent,
    //GratsPugComponent,
    //BookSlideComponent,
    //NotFoundComponent,
    //LastSlideComponent
  ],
  imports: [
    BrowserModule,
    //BfaButtonModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    SlidesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
