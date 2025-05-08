import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get([
      'seo.home.title',
      'seo.home.description'
    ]).subscribe(translations => {
      this.titleService.setTitle(translations['seo.home.title']);
      this.metaService.updateTag({ name: 'description', content: translations['seo.home.description'] });
    });
  }

}
