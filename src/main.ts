import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExtraOptions } from '@angular/router';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

const routerConfig: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled', // (optionnel)
};