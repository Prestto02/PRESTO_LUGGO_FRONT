import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-visually-politics',
  templateUrl: './visually-politics.component.html',
  styleUrls: ['./visually-politics.component.css'],
})
export class VisuallyPoliticsComponent implements OnInit {
  id: string = '';
  pdfSrc: string = '';
  constructor(private actived: ActivatedRoute) {
    this.id = this.actived.snapshot.params['id'];
  }

  ngOnInit(): void {
    console.log(this.id);
  }
}
