import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  preserveWhitespaces: false
})
export class AppComponent {
  title = 'ben åberg';

  public constructor(private titleService: Title ) { }
 
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
