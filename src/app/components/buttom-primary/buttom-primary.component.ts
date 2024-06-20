import { CommonModule } from '@angular/common';
import { Component, Input, Output,  EventEmitter} from '@angular/core';

type _btnVariants  = 'primary' | 'secondary'

@Component({
  selector: 'app-buttom-primary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './buttom-primary.component.html',
  styleUrl: './buttom-primary.component.scss'
})
export class ButtomPrimaryComponent {
  @Input('btn-text') btnText: string = "";
  @Input() disabled: boolean = false;
  @Input() loading: boolean = false;
  @Input() variant: _btnVariants = 'primary';
  @Output('submit') onSubmit = new EventEmitter();


  submit(){
    this.onSubmit.emit()
  }
}
