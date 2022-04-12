import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-update-button',
  templateUrl: './update-button.component.html',
  styleUrls: ['./update-button.component.css']
})
export class UpdateButtonComponent implements OnInit {
  @Input()
  texto: string;
  @Output()
  btnUpdateClick= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onClickUpdate() {
  this.btnUpdateClick.emit()
  }

}
