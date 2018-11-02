import { DataService } from './services/data.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { PowerPipe } from './pipes/power.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { DataComponent } from './services/data/data.component';

@NgModule({
  imports: [
    CommonModule
  ],

  // all components/pipes/directive in declaration are private to the module by default
  declarations: [
    AddressComponent,
    PowerPipe,
    FilterPipe,
    SortPipe,
    HighlightDirective,
    DataComponent
  ],

  // exports makes component/pipes/directive to be public, to be used in other module
  exports: [
    AddressComponent,
    PowerPipe,
    FilterPipe,
    SortPipe,
    HighlightDirective
  ],

  providers: [
   // DataService
  ]
})
export class SharedModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [DataService]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: SharedModule
       
    };
  }
  
}
