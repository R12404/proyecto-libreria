import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiServiceService {
  private mostrarAgregarLibro: boolean = false;
  private subject = new Subject<any>();
  
  constructor() {}

   toggleAgregarLibro(): void {
    this.mostrarAgregarLibro = !this.mostrarAgregarLibro;
    this.subject.next(this.mostrarAgregarLibro);
  }

  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
