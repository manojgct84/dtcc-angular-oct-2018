import { AuthModule } from './auth/auth.module';
// import { ProductModule } from './product/product.module';
import { CartModule } from './cart/cart.module';
import { AppComponent } from './app.component';
// collection of components, directives, pipes and services
// reference to other modules
import {NgModule} from '@angular/core';

// BrowserModule has dependencies [CommonModule, Compiler]
import {BrowserModule} from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SharedModule } from './shared/shared.module';

// step 1: route, configuration, map url to component
import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';

// ng 4.3 onwards, interceptors etc
import {HttpClientModule} from '@angular/common/http';



const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },

    {
        path: 'products',
        loadChildren: './product/product.module#ProductModule'
    },

    {
        path: '**', //not found
        component: NotFoundComponent
    }
];


@NgModule({
    imports: [
        // reference to other module
        BrowserModule,
        SharedModule,
        CartModule,

       // ProductModule,
        HttpClientModule,
        AuthModule,

        // step 2: routing, initialize routes with Angular imports
        RouterModule.forRoot(routes)
        
        //HttpModule,
        //ProductModule, 
        //CartModule,
        //AuthModule, 
    ],

    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent,
        // Header, Footer, etc
    ],

    bootstrap: [
        // the first/main component
       AppComponent
    ]

})
export class AppModule {

}
