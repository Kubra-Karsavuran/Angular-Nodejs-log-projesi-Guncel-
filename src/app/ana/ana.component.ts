import { Component } from '@angular/core';
import { AnaService } from '../services/ana.service';
import { titra_shema } from './shema';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ana',
  templateUrl: './ana.component.html',
  styleUrls: ['./ana.component.css'],
})
export class AnaComponent {
  constructor(private anaService: AnaService) {}

  // TODO verileri ekrana yazdırma ıslemı
  dataSee: titra_shema[] = [];
  types: titra_shema[] = [];
  ngOnInit() {
    this.anaService.see().subscribe((data) => {
      this.dataSee = data;
    });
    // TODO type benzersız type ler için yazılan fonksıyon
    this.anaService.type().subscribe((data) => {
      this.types = data;
    });
  }

  // TODO message verisini almak için
  text = '';
  onkeyMesaj(event: any) {
    this.text = event.target.value;
    console.log(this.text);
  }

  // TODO type verısı
  typesecilen = '';
  onkeyType(veri: any) {
    console.log(veri);
    this.typesecilen = veri;
  }

  // TODO timestamp veri getırme işlemi
  text1 = '';
  onkeytimez(event: any) {
    this.text1 = event.target.value;
    console.log(this.text1);
  }

  // TODO description verısını bulma ıslemı yapılıyor
  text2 = '';
  descriptionGet(event: any) {
    this.text2 = event.target.value;
    console.log(this.text2);
  }

  // TODO flight veri alma işlemi
  text3 = '';
  flightGet(event: any) {
    this.text3 = event.target.value;
    console.log(this.text3);
  }

  filtrelemeYap() {
    console.log('verilerin en son halı');
    this.anaService
      .sonucGet(this.text1, this.text2, this.text3, this.text, this.typesecilen)
      .subscribe((data) => {
        console.log('oldu sanırım');
      });
  }
}
