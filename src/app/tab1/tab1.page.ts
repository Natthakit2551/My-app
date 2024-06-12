import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private page: NavController) { }
  goToabout() {
    this.page.navigateBack('/tabs/tab2');
    }
    gocontact() {
      this.page.navigateBack('/tabs/tab3');
    }
}
