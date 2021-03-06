import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Usando modelos en angular ';
  public inventario :any=[
    {id : 1, nombre : "pantalon",precio : 250},
    {id : 2, nombre : "chamarra",precio : 500},
  ];
  public formulario : any = {
    id:null,
    nombre : null,
    precio : null
  }
  public seleccionar (articulos : any) : void{
    this.formulario.id = articulos.id;
    this.formulario.nombre = articulos.nombre;
    this.formulario.precio = articulos.precio;

  }
  public eliminar (id : number):void{
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == id) {
        this.inventario.splice(index,1);
        alert("eliminado con exito!");
        break;
        
      }      
    }

  }
  public agregar() : void{
    let datoNuevo = {
      id : this.formulario.id,
      nombre : this.formulario.nombre,
      precio : this.formulario.precio,
      
    };
    this.inventario.push(datoNuevo);
    this.limpiar();
    alert("agregado con exito");
    

  }
  public limpiar() : void{
        this.formulario.id=null;
        this.formulario.nombre=null;
        this.formulario.precio=null;
  }
  public editar() : void{
    for (let index = 0; index < this.inventario.length; index++) {
      if (this.inventario[index].id == this.formulario.id) {
        this.inventario[index].id = this.formulario.id;
        this.inventario[index].nombre = this.formulario.nombre;
        this.inventario[index].precio = this.formulario.precio;
        this.limpiar();
        alert("Modificado con exito");
        break;
        
      }
      
    }

  }
}
