import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pagina1',
  templateUrl: './pagina1.page.html',
  styleUrls: ['./pagina1.page.scss'],
})
export class Pagina1Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  persona = new FormGroup({
    elRut : new FormControl('',Validators.required),
    elNombre : new FormControl('',[Validators.required,Validators.minLength(3)]),
    laEdad : new FormControl('',[Validators.min(0),Validators.max(130),Validators.required])
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
    alert('Persona almacenada');
    this.persona.controls.elRut.setValue('');
    this.persona.controls.elNombre.setValue('');
    this.persona.controls.laEdad.setValue('');
    
  }

}
