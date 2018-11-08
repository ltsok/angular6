import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmenuComponent } from './submenu.component';
import { LoggerService } from '@core';
import { constant } from './submenu.constant';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SubmenuComponent]
})
export class SubmenuModule {
  /**
   * 构造函数
   * @param {LoggerService} logger
   * @memberof GlobalModule
   */
  constructor(private logger: LoggerService) {
    this.logger.info(constant.identifier, 'Initialize submenu module.');
  }
}
