import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-vr-image',
  templateUrl: './vr-image.component.html',
  styleUrls: ['./vr-image.component.scss']
})
export class VrImageComponent implements AfterViewInit{

  @Input()
  imageURL: string;

  ngAfterViewInit() {
    console.log("imageURL: " + this.imageURL)
    const element = document.getElementById("city");
    if (element) {
      element.setAttribute("src", this.imageURL)
    }
  }
}
