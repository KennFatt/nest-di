import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerSerivce: PowerService) {}

  getData() {
    console.log('Using power supply to draw 20 amount of watts');
    this.powerSerivce.supplyPower(20);

    return "data you're looking for";
  }
}
