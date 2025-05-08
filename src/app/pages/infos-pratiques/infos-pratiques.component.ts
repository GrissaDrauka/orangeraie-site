import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-infos-pratiques',
  templateUrl: './infos-pratiques.component.html',
  styleUrls: ['./infos-pratiques.component.scss']
})
export class InfosPratiquesComponent {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get([
      'seo.infos.title',
      'seo.infos.description'
    ]).subscribe(translations => {
      this.titleService.setTitle(translations['seo.infos.title']);
      this.metaService.updateTag({ name: 'description', content: translations['seo.infos.description'] });
    });
  }
}
