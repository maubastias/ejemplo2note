import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  templateUrl: './pagina2.page.html',
  styleUrls: ['./pagina2.page.scss'],
})
export class Pagina2Page implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
    
    this.listar();

  }

  lista_personas = [
    {
    rut: "17887776-k",
    nombre: "Pedro",
    edad: 50
    },{

    rut:"12123456-8",
    nombre: "Juan",
    edad: 20
  },{

    rut: "9999999-9",
    nombre: "Diego",
    edad: 30

    }];

    actualizar(rut:String){
      //alert('Ha dado click en actualizar persona de rut: ' + rut)
      this.router.navigate(['/pagina3',rut]);

    }

    eliminar(rut:String){
      
      var datos = localStorage.getItem('datos');
      //alert(datos);
      datos = datos.replace('[','');
      datos = datos.replace(']','');
      datos = datos.split('},{').join('};{');
      //alert(datos);
      var arreglo_temp = datos.split(';');
      var per;
      var lista_temporal = new Array();
      for (let index = 0; index < arreglo_temp.length; index++) {
        
        var registro = arreglo_temp[index];
        var la_persona = JSON.parse(registro);
        per = {
          rut : la_persona.rut,
          nombre : la_persona.nombre,
          edad : la_persona.edad
        };
        
        if (la_persona.rut!=rut){
          lista_temporal.push(per);
        }
        
      }

      this.lista_personas = lista_temporal;
      localStorage.setItem('datos',JSON.stringify(this.lista_personas))
      alert('Persona eliminada de rut: ' + rut);
    } 
    
    listar(){
      
      var datos = localStorage.getItem('datos');
      //alert(datos);
      datos = datos.replace('[','');
      datos = datos.replace(']','');
      datos = datos.split('},{').join('};{');
      //alert(datos);
      var arreglo_temp = datos.split(';');
      var per;
      var lista_temporal = new Array();
      for (let index = 0; index < arreglo_temp.length; index++) {
        
        var registro = arreglo_temp[index];
        var la_persona = JSON.parse(registro);
        per = {
          rut : la_persona.rut,
          nombre : la_persona.nombre,
          edad : la_persona.edad
        };
        
        lista_temporal.push(per);
      }

      this.lista_personas = lista_temporal;
    }

}
