import { Component } from '@angular/core';
import { ButtomPrimaryComponent } from '../buttom-primary/buttom-primary.component';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [ButtomPrimaryComponent],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {

}
