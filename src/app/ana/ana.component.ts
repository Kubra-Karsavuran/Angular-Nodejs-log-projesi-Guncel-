import { Component } from '@angular/core';
import { AnaService } from '../services/ana.service';
import { titra_shema } from './shema';

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
}
