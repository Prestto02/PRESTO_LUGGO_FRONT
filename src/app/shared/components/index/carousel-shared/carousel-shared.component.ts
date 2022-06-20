import { Component, Input, OnInit } from '@angular/core';
export interface ImgCarousel {
  id: number;
  img: string;
  title: string;
  text: string;
}

@Component({
  selector: 'app-carousel-shared',
  templateUrl: './carousel-shared.component.html',
  styleUrls: ['./carousel-shared.component.css'],
})
export class CarouselSharedComponent implements OnInit {
  @Input() carouselComponents: ImgCarousel[] = [];
  @Input() indicators = true;
  @Input() autoSide = false; // IF CONTINUE AUTOMATIC SLIDE
  @Input() slideInterval = 5000; //DEFAULT 3 SECONDS
  selectedIndex = 0;
  constructor() {}

  ngOnInit(): void {
    if (this.autoSide) {
      this.autoSlideImage();
    }
  }

  autoSlideImage(): void {
    setInterval(() => {
      this.onNextSlid();
    }, this.slideInterval);
  }
  //NEXT SLIDE
  onNextSlid(): void {
    if (this.selectedIndex === this.carouselComponents.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
  //SELECTED CAROUSEL NEXT
  selectImagen(i: number): void {
    this.selectedIndex = i;
  }
}
