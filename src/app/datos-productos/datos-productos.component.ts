import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-datos-productos',
  templateUrl: './datos-productos.component.html',
  styleUrls: ['./datos-productos.component.css']
})
export class DatosProductosComponent implements OnInit{

  nombreProducto!: any;
  cantidadProducto!: any;

  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    this.getValoresProductos();
  }

  getValoresProductos() {
    this.nombreProducto = localStorage.getItem('nombreProducto');
    this.cantidadProducto = localStorage.getItem('cantidadProducto');
  }

  volver() {
    this.router.navigate(['home']);
    localStorage.clear();
  }

}
