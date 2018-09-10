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
    // this.heroservice.getHeroes().subscribe((res:any)=> {
    //   console.log(res);
    // });
    this.ads = this.heroservice.getAds();
    // $.ajax({
    //   url: "http://10.5.43.9:9999/users/all",
    //   type: "GET",
    //   // dataType: "jsonp",
    //   // jsonp: "callback",
    //   // cache: true,
    //   success: function (res) {
    //     console.log(res);
    //   }
    // });
    this.queryAll();
  }

  queryById(id = 1): void {
    this.heroservice.queryById(id).subscribe((res) => {
      console.log(res);
    });
  }

  queryAll(): void {
    this.heroservice.queryALL().subscribe((res) => {
      console.log(res);
    });
  }

}
