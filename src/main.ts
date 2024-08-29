import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import 'aos/dist/aos.css';
import Aos from 'aos';

Aos.init();

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
})
  .catch(err => console.error(err));
function ngOnInit() {
  throw new Error('Function not implemented.');
}

