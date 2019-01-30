import { Component, OnInit } from '@angular/core';
import { TravelGuidesService } from '../services/travel-guides.service';
import { ActivatedRoute } from '@angular/router';
import { TravelGuide } from '../services/models';


@Component( {
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: [ './guide.component.css' ],
  providers: [ TravelGuidesService ]
} )
export class GuideComponent implements OnInit {

  private readonly id: string;
  public travelGuide: TravelGuide;

  constructor( private travelGuidesService: TravelGuidesService, private route: ActivatedRoute ) {
    this.id = this.route.snapshot.params[ 'id' ];
  }

  ngOnInit() {
    this.travelGuide = this.travelGuidesService.getTravelGuideById( this.id );
  }


}
