import { Component, OnInit } from '@angular/core';
import { Info } from 'src/app/info';
import { InfoService } from 'src/app/info.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infos: Info[]=[];

  constructor(private infoservice: InfoService) { }

  ngOnInit(): void 
  {
    this.infoservice.getAllInfo().subscribe(
      (response: Info[])=>{
        this.infos = response;
      }
    );
  }

}
