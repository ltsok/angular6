import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  today = 'day';

  constructor(ir: MatIconRegistry,ds: DomSanitizer) {
    const imgDir = `assets/img`;
    const avatarDir = `${imgDir}/avatar`;
    const sidebarDir = `${imgDir}/sidebar`;
    ir.addSvgIcon('svg1',ds.bypassSecurityTrustResourceUrl('assets/img/sidebar/svg1.svg'));
    // ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    // ir.registerFontClassAlias('ltsfont','lts');
  }

  ngOnInit() {
    // this.today = `day${getDate(new Date())}`;
  }

}
