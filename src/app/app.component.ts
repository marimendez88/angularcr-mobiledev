import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    if (!this.platform.is('hybrid') && !this.platform.is('mobileweb')) {
      const element = document.getElementsByTagName('ion-app')[0];
      element.classList.add('desktop');
    }
  }
}
