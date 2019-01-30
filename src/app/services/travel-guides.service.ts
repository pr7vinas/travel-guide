import { Injectable } from '@angular/core';
import { TravelGuide } from './models';


@Injectable()
export class TravelGuidesService {

  private readonly searchResult;

  constructor() {
    this.searchResult = [
      new TravelGuide(
        '86e52ba2-92ab-4469-8daa-f0cec0d04224',
        'Old Trafford',
        'Nicknamed "The Theatre of Dreams" by Bobby Charlton',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Manchester_United_Panorama_%288051523746%29.jpg/1600px-Manchester_United_Panorama_%288051523746%29.jpg',
        'Old Trafford is a football stadium in Old Trafford, Greater Manchester, England, and the home of Manchester United. With a capacity of 74,994,[1] it is the largest club football stadium (and second largest football stadium overall after Wembley Stadium) in the United Kingdom, and the eleventh-largest in Europe.[2] It is about 0.5 miles (800 m) from Old Trafford Cricket Ground and the adjacent tram stop.'
      ),
      new TravelGuide(
        'b90691a3-819a-4b70-bc90-11e954ceb4db',
        'Science and Industry Museum',
        'Formerly known as the Museum of Science and Industry',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Science_and_Industry_Museum.jpg/1600px-Science_and_Industry_Museum.jpg',
        'The Science and Industry Museum (formerly known as the Museum of Science and Industry) in Manchester, England, is a large museum devoted to the development of science, technology and industry with emphasis on the city\'s achievements in these fields. The museum is part of the Science Museum Group, a non-departmental public body of the Department for Culture, Media and Sport, having merged with the National Science Museum in 2012.[2]\n' +
        'There are extensive displays on the theme of transport (cars, aircraft, railway locomotives and rolling stock), power (water, electricity, steam and gas engines), Manchester\'s sewerage and sanitation, textiles, communications and computing.\n' +
        'The museum is an Anchor Point of the European Route of Industrial Heritage; and is situated on the site of the world\'s first passenger railway station – Manchester Liverpool Road – which opened as part of the Liverpool and Manchester Railway in September 1830. The railway station frontage and 1830 warehouse are both Grade I listed.'
      ),
      new TravelGuide(
        '30dea141-c163-49c8-b87e-29c2b290eebe',
        'National Football Museum',
        'England’s national museum of football',
        'https://upload.wikimedia.org/wikipedia/commons/4/4b/Finney.jpg',
        'The National Football Museum is England’s national museum of football. It is based in the Urbis building in Manchester city centre, and preserves, conserves and displays important collections of football memorabilia. As a publicly funded national museum, entrance is free.' +
        'The museum was originally based in Deepdale, Preston, Lancashire, but moved to Manchester in 2012.[2]'
      ),
      new TravelGuide(
        'b3490e71-cfdd-4ed0-9792-bbe582bbdba5',
        'The Lowry',
        'Designed by Michael Wilford',
        'https://upload.wikimedia.org/wikipedia/commons/7/7f/The_Lowry_and_Ship_Canal.JPG',
        'The Lowry is a theatre and gallery complex at Salford Quays, Salford, Greater Manchester, England. It is named after the early 20th century painter L. S. Lowry, known for his paintings of industrial scenes in North West England. The complex was officially opened on 12 October 2000 by Queen Elizabeth II.[1]'
      )
    ];
  }

  searchForTravelGuides(
    destination: string,
    traveller: string,
    when: string
  ): TravelGuide[] {

    // TODO: return Observable<> and use @angular/common/http to fetch data from API

    return this.searchResult;

  }


  getTravelGuideById( id: string ): TravelGuide {
    for ( const result of this.searchResult ) {
      if ( result.id === id ) {
        return result;
      }
    }
  }
}
