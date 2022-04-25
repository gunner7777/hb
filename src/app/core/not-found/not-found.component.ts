import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {GratsService} from "../../grats.service";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gratsService: GratsService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.route.data
      .pipe(
        take(1)
      )
      .subscribe(
      (data) => {
        this.gratsService.gratsInit(data.gratsCompleted);
      }
    )
  }

  goToMainPage() {
    this.router.navigate(['']);
  }

}
