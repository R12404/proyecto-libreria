import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class LibreriaService {

  baseUrlLibros: string = 'http://localhost:5000/libros'

  constructor(private http: HttpClient) {}

  getLibros(): Observable<Libro[]> {
    return this.http.get<Libro[]>(this.baseUrlLibros);
  }

  deleteLibro(libro: Libro): Observable<Libro> {
    const url = `${this.baseUrlLibros}/${libro.id}`;
    return this.http.delete<Libro>(url)
}

  updateLibro(libro: Libro): Observable<Libro> {
  const url = `${this.baseUrlLibros}/${libro.id}`;
  return this.http.put<Libro>(url, libro, httpOptions);
}

  addLibro(libro: Libro): Observable<Libro> {
      return this.http.post<Libro>(this.baseUrlLibros, libro, httpOptions);     
}
}

