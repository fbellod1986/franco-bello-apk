import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ionicForm!: FormGroup;
  isSubmitted = false;

  constructor(public formBuilder: FormBuilder, private router: Router) { }
  
  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(2)]],
      cantidad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    });
  }

  submitForm() {
    this.isSubmitted = true;

    if (!this.ionicForm.valid) {
      console.log('Por favor ingresar los datos');
      console.error('Los campos estan vacios');
      console.warn('Recuerde usar los controles apropiados en los campos del formulario');
      return false;
    } else {

      localStorage.setItem('nombreProducto', this.ionicForm.controls.nombre.value);
      localStorage.setItem('cantidadProducto', this.ionicForm.controls.cantidad.value);

      this.router.navigate(['datos-productos']);
      this.ionicForm.reset();
    }
  }
  
  get errorControl() {
    return this.ionicForm.controls;
  }
  
}