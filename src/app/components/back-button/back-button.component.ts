import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  @Input() title:string = '';
  @Output() action = new EventEmitter<void>();
  onClick(){
    this.action.emit();
  }

}
