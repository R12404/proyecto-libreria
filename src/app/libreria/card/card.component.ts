import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {
  libros: Libro[] = []
  @Input() libro: Libro;
  
  @Output() onEliminarLibro: EventEmitter<Libro> = new EventEmitter();



  constructor(private libreriaService: LibreriaService){}

  ngOnInit(): void {
    this.libreriaService.getLibros().subscribe((libros) => this.libros = libros)
  }

  onEliminar(libro: Libro) {
    this.onEliminarLibro.emit(libro);
  }
}