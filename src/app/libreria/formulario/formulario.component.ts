import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Libro } from 'src/app/interfaces/libro';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  @Output() onGuardarTarea: EventEmitter<Libro> = new EventEmitter();
  titulo: string;
  nombreAutor: string;
  mostrarAgregarLibro: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.mostrarAgregarLibro = value)
   }
  
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.titulo && !this.nombreAutor){
      alert('Debes llenar los campos');
      return;
    }

    const newLibro = {
      titulo: this.titulo,
      autor: this.nombreAutor
    }

    this.onGuardarTarea.emit(newLibro);
    this.titulo = '';
    this.nombreAutor = '';
  }
  
}
