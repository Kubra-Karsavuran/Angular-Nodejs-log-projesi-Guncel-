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

  // TODO filtreleme kısmı burda
  sonucGet(
    message: any,
    typesecilen: any,
    description: any,
    time: any,
    flight: any
  ): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>(
      '/api/sonuc?message=' +
        message +
        '&timestamp=' +
        time +
        '&description=' +
        description +
        '&flight_id=' +
        flight +
        '&type=' +
        typesecilen +
        ''
    );
  }
}
