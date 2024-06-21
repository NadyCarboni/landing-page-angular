import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsLetterResponse } from '../interfaces/newsletter.interface';


@Injectable({
  providedIn: 'root'
})
export class NewsLetterService {
  private endpointUrl = 'https://www.youtube.com/redirect?event=live_chat&redir_token=QUFFLUhqbVF6cHFSWkY1V3FXWDVpdWlNclBCcktnMXVvZ3xBQ3Jtc0tsdFRWZk9HMHl4Uk5sSks4UHd5ZFh6eXo3YWVKRnNOMmdxY00tZjRCQzFLZERyZFlwaC1Nb251eTNkdEpnQ1pDOFJ4NkplZ0tjOFZxWnVZQzV5X0tIanYyWWVBQkJSQzVVTlhfWm5XajBfVlgwaDBvYw&q=https%3A%2F%2Ffaed47pcwb7biktidlecuafuty0aegep.lambda-url.us-east-1.on.aws%2F%27%3B'
  constructor(private http: HttpClient) { 
  
  }
  sendData(name: string, email: string):Observable<NewsLetterResponse> {
    const data = {name, email}
    return this.http.post<NewsLetterResponse>(this.endpointUrl, data)
  }
}
