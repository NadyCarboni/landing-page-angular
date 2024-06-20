import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { NgOptimizedImage } from '@angular/common';
import { ButtomPrimaryComponent } from '../buttom-primary/buttom-primary.component';
import { NewsFormComponent } from '../news-form/news-form.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    ButtomPrimaryComponent, 
    NewsFormComponent
  ],
  providers: [], 
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
