import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mostrarAgregarLibro: boolean = false;

  subscription: Subscription;

  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => this.mostrarAgregarLibro = value);
  }

  ngOnInit(): void {}

  toggleAgregarTarea() {
    this.uiService.toggleAgregarLibro();
  }
}
