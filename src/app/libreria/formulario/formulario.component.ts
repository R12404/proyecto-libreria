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
  titulo: string;
  nombreAutor: string;
  @Output() onGuardarTarea: EventEmitter<Libro> = new EventEmitter();
  mostrarAgregarLibro: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => this.mostrarAgregarLibro = value)
   }
  
  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.titulo){
      alert('Por favor, añade un nuevo libro');
      return;
    }

    const newLibro = {
      titulo: this.titulo,
      nombreAutor: this.nombreAutor
    }

    this.onGuardarTarea.emit(newLibro);

    this.titulo = '';
    this.nombreAutor = '';
  }

}
