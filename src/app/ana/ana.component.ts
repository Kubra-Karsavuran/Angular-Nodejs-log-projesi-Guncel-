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
  guncel_veri: titra_shema[] = [];
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
  message = '';
  onkeyMesaj(event: any) {
    this.message = event.target.value;
    console.log(this.message);
  }

  // TODO type verısı
  typesecilen = '';
  onkeyType(veri: any) {
    console.log(veri);
    this.typesecilen = veri;
  }

  // TODO timestamp veri getırme işlemi
  time = '';
  onkeytimez(event: any) {
    this.time = event.target.value;
    console.log(this.time);
  }

  // TODO description verısını bulma ıslemı yapılıyor
  description = '';
  descriptionGet(event: any) {
    this.description = event.target.value;
    console.log(this.description);
  }

  // TODO flight veri alma işlemi
  flight = '';
  flightGet(event: any) {
    this.flight = event.target.value;
    console.log(this.flight);
  }

  asil: boolean = true;
  ek: boolean = false;
  //TODO filtreleme kısmı burda
  filtrelemeYap() {
    this.asil = false;
    this.ek = true;

    this.anaService
      .sonucGet(
        this.message,
        this.typesecilen,
        this.description,
        this.time,
        this.flight
      )
      .subscribe((data) => {
        this.guncel_veri = data;
      });
  }
}
