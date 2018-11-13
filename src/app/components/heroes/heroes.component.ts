import { Component, OnInit, Inject, HostBinding } from '@angular/core';
import { HeroService } from './heroes.service';
import { AdItem, slideToRight } from '@shared';
import { apiUrl } from '@core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  animations: [
    slideToRight
  ]
})
export class HeroesComponent implements OnInit {

  @HostBinding('@routerAnim') state;
  ads: AdItem[];
  isOpen: boolean = true;
  constructor(
    private heroservice: HeroService,
    @Inject(apiUrl) private url 
  ) {
    console.log(url);
  }

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
    // this.queryAll();
  }

  // queryById(id = 1): void {
  //   this.heroservice.queryById(id).subscribe((res) => {
  //     console.log(res);
  //   });
  // }

  // queryAll(): void {
  //   this.heroservice.queryALL().subscribe((res) => {
  //     console.log(res);
  //   });
  // }

}
