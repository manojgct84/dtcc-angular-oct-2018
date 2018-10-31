// bootstrapping
// load angular module into browser

import {platformBrowserDynamic} 
        from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { environment } from './environments/environment';

console.log('ENV ', environment);

platformBrowserDynamic()
            .bootstrapModule(AppModule);
