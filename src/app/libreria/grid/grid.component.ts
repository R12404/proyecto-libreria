import { Component } from '@angular/core';
import { Libro } from 'src/app/interfaces/libro';
import { LibreriaService } from 'src/app/services/libreria.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  misLibros: Libro[] = []

  constructor(private libreriaService: LibreriaService){}

  ngOnInit(): void {
    this.libreriaService.getLibros().subscribe((libros) => this.misLibros = libros)
  }
  
  eliminarLibro(libro: Libro) {
    return this.libreriaService.deleteLibro(libro).subscribe(() => {this.misLibros = this.misLibros.filter(t => t.id === libro.id)} )}
  
  actualizarLibro(libro: Libro){
    return this.libreriaService.updateLibro(libro).subscribe()
  }

  anadirLibro(libro: Libro) {
    return this.libreriaService.addLibro(libro).subscribe((libro) => {
      this.misLibros.push(libro);
      alert(`Libro: 
      titulo: ${libro.titulo}
      autor: ${libro.autor} 
      Añadido exitosamente`)
    })
  }
}
