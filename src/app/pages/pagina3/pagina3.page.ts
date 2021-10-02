import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pagina3',
  templateUrl: './pagina3.page.html',
  styleUrls: ['./pagina3.page.scss'],
})
export class Pagina3Page implements OnInit {

  constructor(private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    var datitos = this.activatedRoute.snapshot.paramMap.get('valor');
    //alert(datitos);
    this.buscar(datitos);
  }

  persona = new FormGroup({
    elRut : new FormControl(''),
    elNombre : new FormControl(''),
    laEdad : new FormControl('') 
  });

  buscar(rut:String){
    var datos = localStorage.getItem('datos');
    datos = datos.replace('[','');
    datos = datos.replace(']','');
    datos = datos.split('},{').join('};{');
    var arreglo_temp = datos.split(';');

    for (let index = 0; index < arreglo_temp.length; index++) {
      var registro = arreglo_temp[index];
      var la_persona = JSON.parse(registro);
      if(la_persona.rut == rut){
        this.persona.controls.elRut.setValue(rut);
        this.persona.controls.elNombre.setValue(la_persona.nombre);
        this.persona.controls.laEdad.setValue(la_persona.edad);
      
      }
      
    }
    
  }

}
