import { Componente } from './../../interfaces/interfaces';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor(private ds: DataService) { }

  ngOnInit() {
    this.componentes = this.ds.getMenu();
  }
}
