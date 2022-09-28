import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs/internal/Observable';
import { Componente } from '../interfaces/interfaces';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  componentes: Observable<Componente[]>;

  constructor(private menu: MenuController, private ds: DataService) {}

  // eslint-disable-next-line @angular-eslint/use-lifecycle-interface
  ngOnInit() {
    this.componentes = this.ds.getMenu();
  }

  toogleMenu(){
    this.menu.toggle();
  }

}




