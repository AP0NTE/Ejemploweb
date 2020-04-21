import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor() { }
  mostrarHome:boolean;
  mostrarRestudiantes:boolean;
  mostrarRdocente:boolean;
  mostrarTdocente:boolean;
  mostrarTestudiantes:boolean;
  mostrarEldocente:boolean;
  mostrarElestudiantes:boolean;
  mostrarEdocente:boolean;
  mostrarEestudiantes:boolean;
  
  MostrarRe():void{
    this.mostrarRestudiantes=true;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarRd():void{
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=true;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarTe(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=true;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarTd(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=true;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEle(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=true;
    this.mostrarHome=false;
  }
  MostrarEld(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=true;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEdd(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=true;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  MostrarEde(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=true;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=true;
    this.mostrarElestudiantes=false;
    this.mostrarHome=false;
  }
  ocultarTodo(){
    this.mostrarRestudiantes=false;
    this.mostrarRdocente=false;
    this.mostrarEdocente=false;
    this.mostrarEestudiantes=false;
    this.mostrarTdocente=false;
    this.mostrarTestudiantes=false;
    this.mostrarEldocente=false;
    this.mostrarElestudiantes=false;
    this.mostrarHome=true;
  }
  ngOnInit() {
  }

}
