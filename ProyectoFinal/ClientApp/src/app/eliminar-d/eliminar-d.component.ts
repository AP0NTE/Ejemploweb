import { Component, OnInit } from '@angular/core';
import {DocenteService} from '../services/docente.service';
import {Docente} from '../models/docente';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-eliminar-d',
  templateUrl: './eliminar-d.component.html',
  styleUrls: ['./eliminar-d.component.css']
})
export class EliminarDComponent implements OnInit {

  docente :Docente[];
  constructor(private docenteService:DocenteService) {
  
   }
  
    myFunction():void {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[3];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}
  ngOnInit() {
    this.getAll();
  }
  getAll(){
    this.docenteService.getAll().subscribe(docente=>this.docente=docente);
  }
     
}