import { Component } from '@angular/core';
import { ButtomPrimaryComponent } from '../buttom-primary/buttom-primary.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ButtomPrimaryComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
