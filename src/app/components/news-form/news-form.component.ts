import { Component, signal } from '@angular/core';
import { ButtomPrimaryComponent } from '../buttom-primary/buttom-primary.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsLetterService } from '../../services/news-letter.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-news-form',
  standalone: true,
  imports: [
    ButtomPrimaryComponent,
    ReactiveFormsModule,
  ],
  providers: [
    NewsLetterService
  ],
  templateUrl: './news-form.component.html',
  styleUrl: './news-form.component.scss'
})
export class NewsFormComponent {
  newsLetterForm!: FormGroup; 
  loading = signal(false)
  constructor(private service: NewsLetterService) {
    this.newsLetterForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email])
    })
  }

  onSubmit() {
    this.loading.set(true)
    if(this.newsLetterForm.valid) {
      this.service.sendData(this.newsLetterForm.value.name, this.newsLetterForm.value.email).subscribe({
        complete: () => {
          this.loading.set(false)
          this.newsLetterForm.reset();
        }
      })
    }
  }
}
