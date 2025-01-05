import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChuckJoke } from '../models/chuck-joke.interface';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisService {

  private readonly url: string;

  constructor(private http: HttpClient) {
    this.url =  'https://api.chucknorris.io/jokes/random';
  }

  getJoke():Observable<IChuckJoke>{
    return this.http.get<IChuckJoke>(this.url);
  }

}
