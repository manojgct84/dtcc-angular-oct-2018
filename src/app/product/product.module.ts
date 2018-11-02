import { SaveAlertGuard } from './../shared/guards/save-alert.guard';
// product.module.ts

import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';

import {RouterModule, Routes} from '@angular/router';

import {FormsModule,
        ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../auth/guards/auth.guard';

//  nested navigation
const routes: Routes = [
  {
   // path: 'products',

    path: '', // products prefix coming from app.module lazy loading

    component: ProductHomeComponent,

    children: [
      {
        path: '',  // products/list
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canDeactivate: [SaveAlertGuard],
        canActivate: [AuthGuard],
        data: ['admin']
      },
      {
        path: 'edit/:id', // products/edit/12345
        component: ProductEditComponent,
        canDeactivate: [SaveAlertGuard],
        canActivate: [AuthGuard]
      },
      {
        path: 'search',
        component: ProductSearchComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,

    FormsModule,
    ReactiveFormsModule,
    SharedModule.forChild(), // service excluded
    RouterModule.forChild(routes)
  ],
  declarations: [ProductHomeComponent, ProductListComponent, ProductEditComponent, ProductSearchComponent]
})
export class ProductModule { }
