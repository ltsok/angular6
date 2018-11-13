import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

/** 采用mat-icon时使用 */
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer):void => {
    const imgDir = `assets/img`;
    const avatarDir = `${imgDir}/avatar`;
    const sidebarDir = `${imgDir}/sidebar`;
    ir.addSvgIcon('svg1',ds.bypassSecurityTrustResourceUrl(`${sidebarDir}/svg1.svg`));
    // ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.registerFontClassAlias('ltsfont','lts');
}
