import { Component, OnInit, Input } from '@angular/core';


/**
 * 模块菜单组件
 * @export
 * @class SubmenuComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'lts-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent implements OnInit {

  @Input()
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    
  }

}
