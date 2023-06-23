import {Component} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './cats.html',
  styleUrls: ['./cats.scss']
})
export class Cats {

  xxx() {
    console.log(document.documentElement.scrollTop)
    console.log(document?.scrollingElement?.scrollTop)
    console.log(window.pageYOffset)
  }
}
