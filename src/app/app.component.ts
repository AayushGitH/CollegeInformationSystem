import { PathLocationStrategy } from '@angular/common';
import { getInstructionStatements } from '@angular/compiler/src/render3/view/util';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { fadeAnimation } from './My-animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [fadeAnimation]
})
export class AppComponent {
  title = 'AGym';

  getState(outlet: RouterOutlet)
  {
    return outlet.isActivated?
    outlet.activatedRoute.snapshot.url[0].path : "none";
  }
}


