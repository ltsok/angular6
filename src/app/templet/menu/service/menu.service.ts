import { SubMenuItems } from './../../../core/service/tpi/tpi-menu/tpi-menu.model';
import { TpiMenuItem } from '../../../core/service/tpi/tpi-menu/tpi-menu.model';
import { Injectable } from '@angular/core';
import { ITpiMenu } from '../../../core/service/tpi/tpi-menu/tpi-menu.interface';


@Injectable()
export class MenuService implements ITpiMenu{

    constructor() { }

    /** 获取主菜单 */
    getMenuItems(): TpiMenuItem[] {
        return [];
    }
    
    /** 获取侧边栏菜单 */
    getSubMenuItems(): SubMenuItems[] {

        let menuItems: SubMenuItems[] = [
            {
                name: 'Homepage',
                path: '/login',
                icon: 'lts lts-home',
                isActive: true
            },
            {
                name: 'Archives',
                path: '/heroes',
                icon: 'lts lts-archive',
                isActive: false
            },
            {
                name: 'Tags',
                path: '/tags',
                icon: 'lts lts-tags',
                isActive: false
            },
            {
                name: 'GitHub',
                path: '/github',
                icon: 'lts lts-GitHub',
                isActive: false
            }
        ];
        return menuItems;
    }
}