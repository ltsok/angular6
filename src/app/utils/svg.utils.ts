import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

export const loadSvgResources = (ir: MatIconRegistry, ds: DomSanitizer):void => {
    const imgDir = `assets/img`;
    const avatarDir = `${imgDir}/avatar`
    // ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl('/assets/img/sidebar/weekly.svg'));
    // ir.addSvgIconInNamespace('lts','week',ds.bypassSecurityTrustResourceUrl('/assets/img/sidebar/weekly.svg'));
    // ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl('/assets/img/sidebar/project.svg'));
    // ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl('/assets/img/sidebar/projects.svg'));
    // ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl('/assets/img/sidebar/month.svg'));
    // ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl('/assets/img/sidebar/day.svg'));
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(`${avatarDir}/avatars.svg`));
    ir.registerFontClassAlias('ltsfont','lts');
}
