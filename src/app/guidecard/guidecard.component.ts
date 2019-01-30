import { Component, Input, OnInit } from '@angular/core';
import { TravelGuide } from '../services/models';

@Component( {
  selector: 'guidecard',
  templateUrl: './guidecard.component.html',
  styleUrls: [ './guidecard.component.css' ]
} )
export class GuidecardComponent implements OnInit {

  @Input() travelGuide: TravelGuide;
  @Input() hideSeeMore:  false;

  constructor() {
  }

  ngOnInit() {
  }

}
