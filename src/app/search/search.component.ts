import { Component, OnInit } from '@angular/core';
import { TravelGuidesService } from '../services/travel-guides.service';
import { TravelGuide } from '../services/models';

@Component( {
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: [ './search.component.css' ],
  providers: [ TravelGuidesService ]
} )
export class SearchComponent implements OnInit {

  public destination: string;
  public traveller: string;
  public when: string;

  public searchResults: TravelGuide [];


  constructor(
    private travelGuidesService: TravelGuidesService
  ) {
  }

  ngOnInit() {
  }

  search() {
    this.searchResults = this.travelGuidesService.searchForTravelGuides(
      this.destination,
      this.traveller,
      this.destination
    );
  }
}
