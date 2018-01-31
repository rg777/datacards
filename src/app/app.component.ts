import { Component,OnInit ,trigger, state, style, transition, animate} from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class AppComponent {
  title = 'app';
  data: any;
  data_back:any;
  tile:any;
  flip: string = 'inactive';
  constructor(private http: HttpClient){

    this.data={
      a:"",
      description:"",
      b:"",
      c:"",
      d:"",
      e:"",
      url:""};
      this.data_back={
        a:"",
        description:"",
        b:"",
        c:"",
        d:"",
        e:"",
        url:"http://commons.wikimedia.org/wiki/Special:FilePath/Vijay%20Arora%202.jpg"};
  }

  toggleFlip() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }

  ngOnInit(){


this.http.get<Provider>('https://us-central1-kanji-1306.cloudfunctions.net/wikidata').subscribe(obj => {
  // Read the result field from the JSON response.
  console.log(obj);
  let married="No";
  let children="No";
  if(typeof obj.spouseLabel !== "undefined"){
    married= "Yes";
  }
  if (typeof obj.childLabel !=="undefined"){
    children="Yes";
  }

  this.data={
    a:obj.personLabel.value,
    description:"Indian actor, producer and television personality",
    b:obj.dob.value.slice(0,10),
    c:obj.birthplaceLabel.value,
    d:married,
    e:children,
    url:obj.image.value};

});
this.tile=[{name:"DOB"},{name:"Birth Place"},{name:"Married"},{name:"Children"}];

  }

}

interface Provider {
    personLabel: any,
    dob: any,
    childLabel: any,
    spouseLabel: any,
    birthplaceLabel: any,
    image:any
}
