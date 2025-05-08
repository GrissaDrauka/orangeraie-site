import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mentions-legales',
  templateUrl: './mentions-legales.component.html',
  styleUrls: ['./mentions-legales.component.scss']
})

export class MentionsLegalesComponent {
  currentLang: string;

  constructor(private title: Title,
    private meta: Meta,
    private translate: TranslateService) {
    this.currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.translate.onLangChange.subscribe(lang => this.currentLang = lang.lang);
  }

  ngOnInit(): void {
    this.translate.get([
      'seo.legal.title',
      'seo.legal.description'
    ]).subscribe(translations => {
      this.title.setTitle(translations['seo.legal.title']);
      this.meta.updateTag({ name: 'description', content: translations['seo.legal.description'] });
    });
  }

}
