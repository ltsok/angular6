import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

/** 采用mat-icon时使用 */
export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer):void => {
    const imgDir = `assets/img`;
    const avatarDir = `${imgDir}/avatar`
    // ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.registerFontClassAlias('ltsfont','lts');
}
