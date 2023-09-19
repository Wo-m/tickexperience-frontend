import { AfterViewInit, Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Section } from '../../core/model/section.model';

@Component({
  selector: 'app-vr-image',
  templateUrl: './vr-image.component.html',
  styleUrls: ['./vr-image.component.scss']
})
export class VrImageComponent {

  // If using single image set selector to 1
  // and pass url wrapped in array of length 1

  @Input()
  imageURLs: string[];

  @Input()
  selector: number;

  ngOnChanges(changes: SimpleChanges) {
    this.selectImage();
  }

  selectImage() {
    const sky = document.querySelector('a-sky');
    if (sky) {
      sky.setAttribute('src', `#${this.selector}`);
    }
  }
}
