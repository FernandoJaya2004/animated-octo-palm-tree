import { Component } from '@angular/core';
import { HijoComponent } from "../hijo/hijo.component";

@Component({
  selector: 'app-padre',
  imports: [HijoComponent],
  templateUrl: './padre.component.html',
  styleUrl: './padre.component.css'
})
export class PadreComponent {
    nombre: string = 'Estudiante';
    contadorTotal: number = 0;

    ActualizarContador(valor: number){
      this.contadorTotal += valor;
    }

    cambiarNombre(){
      this.nombre = 'Programador Junior'
    }
}
