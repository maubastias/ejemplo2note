import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  elRut = new FormControl('');
  elNombre = new FormControl('');
  laEdad = new FormControl('');

  persona = new FormGroup({
    elRut : new FormControl(''),
    elNombre : new FormControl(''),
    laEdad : new FormControl('')
  });

  lista_persona = new Array();
  perso: any;
  grabar(){

    console.log('Comienzo el proceso');
    this.perso = {
      rut : this.persona.controls.elRut.value,
      nombre : this.persona.controls.elNombre.value,
      edad : this.persona.controls.laEdad.value
    };
    console.log(this.perso);

    this.lista_persona.push(this.perso);
    localStorage.setItem('datos',JSON.stringify(this.lista_persona));
  }

}
