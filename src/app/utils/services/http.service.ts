import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.baseUrl
@Injectable({
  providedIn: 'root'
})


export class HttpService<TFind, TFindOne> {

  constructor(
    private http:HttpClient
  ) { }

  findAll<T = TFind>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${API_URL}${endpoint}`).pipe()
  }

  find<T = TFindOne>(endpoint: string, itemId?: string): Observable<T> {
    let uri = itemId ? `/${itemId}` : ``;    
     return this.http.get<T>(`${API_URL}${endpoint}${uri}`).pipe(
    );
  }
}
