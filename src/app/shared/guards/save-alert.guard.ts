import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { IEditable } from '../interface/ieditable';

@Injectable({
  providedIn: 'root'
})
export class SaveAlertGuard implements CanDeactivate<IEditable>  {
  canDeactivate(target: IEditable) {
      if (!target.isDirty()) {
        return true;
      }
       
      return window.confirm("form changed, want to leave?");
   }
}
