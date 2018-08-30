import { Component, OnInit } from '@angular/core';
import { HeroService } from './heroes.service';
import { AdItem } from '@shared';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  ads: AdItem[];

  constructor(
    private heroservice: HeroService
  ) {}

  ngOnInit() {
    this.heroservice.getHeroes().subscribe((res:any)=> {
      console.log(res);
    });
    this.ads = this.heroservice.getAds();
  }

}
