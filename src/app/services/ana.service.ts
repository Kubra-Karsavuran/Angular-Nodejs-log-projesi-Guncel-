import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { titra_shema } from '../ana/shema';

@Injectable({
  providedIn: 'root',
})
export class AnaService {
  constructor(private http: HttpClient) {}

  // TODO ekrana verılerı yazdırma ıslemı
  see(): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>('/api/getall');
  }

  // TODO benzersız typeler ıcın
  type(): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>('/api/typeget');
  }
}
