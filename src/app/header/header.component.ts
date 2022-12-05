import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  showClickClass: boolean = true;

  onSelect(feature: string) {
    if (feature !== 'recipe') this.showClickClass = false;
    else this.showClickClass = true;

    this.featureSelected.emit(feature);
  }
}
