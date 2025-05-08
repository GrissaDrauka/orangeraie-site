import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-activites',
  templateUrl: './activites.component.html',
  styleUrls: ['./activites.component.scss']
})
export class ActivitesComponent {

  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translate: TranslateService
  ) { }

  ngOnInit(): void {
    this.translate.get([
      'seo.activites.title',
      'seo.activites.description'
    ]).subscribe(translations => {
      this.titleService.setTitle(translations['seo.activites.title']);
      this.metaService.updateTag({ name: 'description', content: translations['seo.activites.description'] });
    });
  }

}
