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
    text1: any, //time3
    text2: any, //description3
    text3: any, //flight3
    text: any, //mesaj3
    typesecilen: any //type
  ): Observable<titra_shema[]> {
    return this.http.get<titra_shema[]>(
      '/api/sonuc?message=' +
        text +
        '&time=' +
        text1 +
        '&description=' +
        text2 +
        '&flight=' +
        text3 +
        '&type=' +
        typesecilen +
        ''
    );
  }
}
