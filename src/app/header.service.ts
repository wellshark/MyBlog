import {EventEmitter, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  onClick = new EventEmitter();

  public doClick() {
    this.onClick.emit();
  }
}
