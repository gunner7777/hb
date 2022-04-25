import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {FirstSlideComponent} from "./slides/first-slide/first-slide.component";
import {GratsOneComponent} from "./slides/grats-one/grats-one.component";
import {GratsThreeComponent} from "./slides/grats-three/grats-three.component";
import {GratsTwoComponent} from "./slides/grats-two/grats-two.component";
import {GratsFourComponent} from "./slides/grats-four/grats-four.component";
import {GratsEightComponent} from "./slides/grats-eight/grats-eight.component";
import {GratsSevenComponent} from "./slides/grats-seven/grats-seven.component";
import {GratsSixComponent} from "./slides/grats-six/grats-six.component";
import {GratsFiveComponent} from "./slides/grats-five/grats-five.component";
import {GratsNineComponent} from "./slides/grats-nine/grats-nine.component";
import {GratsPugComponent} from "./slides/grats-pug/grats-pug.component";
import {BookSlideComponent} from "./slides/book-slide/book-slide.component";
import {NotFoundComponent} from "./core/not-found/not-found.component";
import {LastSlideComponent} from "./slides/last-slide/last-slide.component";
import {RefreshGuard} from "./refresh.guard";
import {LocalstorageResolver} from "./localstorage.resolver";

const appRoutes: Routes = [
  { path: '', component: FirstSlideComponent, resolve: {gratsCompleted: LocalstorageResolver} },
  { path: 'hb/1', component: GratsOneComponent, canActivate:[RefreshGuard] },
  { path: 'hb/2', component: GratsTwoComponent, canActivate:[RefreshGuard] },
  { path: 'hb/3', component: GratsThreeComponent, canActivate:[RefreshGuard] },
  { path: 'hb/4', component: GratsFourComponent, canActivate:[RefreshGuard] },
  { path: 'hb/5', component: GratsFiveComponent, canActivate:[RefreshGuard] },
  { path: 'hb/6', component: GratsSixComponent, canActivate:[RefreshGuard] },
  { path: 'hb/7', component: GratsSevenComponent, canActivate:[RefreshGuard] },
  { path: 'hb/8', component: GratsEightComponent, canActivate:[RefreshGuard] },
  { path: 'hb/9', component: GratsNineComponent, canActivate:[RefreshGuard] },
  { path: 'hb/10', component: GratsPugComponent, canActivate:[RefreshGuard] },
  { path: 'hb/11', component: BookSlideComponent, canActivate:[RefreshGuard] },
  { path: 'hb/12', component: LastSlideComponent, canActivate:[RefreshGuard] },
  //{path: '**', redirectTo: '/', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent, pathMatch: 'full', resolve: {gratsCompleted: LocalstorageResolver} },
]
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
