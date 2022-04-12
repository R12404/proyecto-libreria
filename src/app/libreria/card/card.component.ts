import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Libro } from 'src/app/interfaces/libro';
import { LibreriaService } from 'src/app/services/libreria.service';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  libros: Libro[] = []
  @Input()
  unico: Libro;
  mostrarAgregarLibro: boolean;
  
  @Output() onEliminarLibro: EventEmitter<Libro> = new EventEmitter();

  subscription: Subscription;

  constructor(private libreriaService: LibreriaService,
    private uiService: UiServiceService){
      this.subscription = this.uiService.onToggle().subscribe((value) => this.mostrarAgregarLibro = value )
    }

  ngOnInit(): void {
    this.libreriaService.getLibros().subscribe((libros) => this.libros = libros)
  }

  onEliminar(libro: Libro) {
    this.onEliminarLibro.emit(libro);
  }

  toggleAgregarTarea() {
    this.uiService.toggleAgregarLibro();
  }

}