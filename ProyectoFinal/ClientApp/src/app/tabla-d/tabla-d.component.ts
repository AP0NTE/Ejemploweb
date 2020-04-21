import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../services/docente.service';
import {Docente} from '../models/docente';

@Component({
  selector: 'app-tabla-d',
  templateUrl: './tabla-d.component.html',
  styleUrls: ['./tabla-d.component.css']
})
export class TablaDComponent implements OnInit {
  docente :Docente[];
  constructor(private docenteService:DocenteService) { }

  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.docenteService.getAll().subscribe(docente=>this.docente=docente);
  }

}
