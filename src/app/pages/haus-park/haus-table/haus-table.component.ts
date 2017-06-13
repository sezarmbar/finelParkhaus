import { Component, OnInit , ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Rx';
import {MdSidenav,MdTabGroup} from "@angular/material";
import { SliderComponent } from '../../../share/slider';
import { ParkingsService , addresShared } from '../../../service';
import { SideMapComponent } from '../side-map';

@Component({
  selector: 'app-haus-table',
  templateUrl: './haus-table.component.html',
  styleUrls: ['./haus-table.component.scss']
})
export class HausTableComponent implements OnInit {
   @ViewChild('tabsEnd') tabEnd:MdTabGroup;
   @ViewChild('sidenavEnd') sidenav: MdSidenav;
   @ViewChild('planRout') elPlanRout:ElementRef;
   @ViewChild(SideMapComponent) sideMap;
   @ViewChild(SliderComponent) sliderChild;
   private sideMapShow:boolean = false;
   private slideInit:boolean = false;
   private Parkhaus:any;
   private lastTime:any;
   private currentPark={};
   private currentParkName:any;
   private subscription;
   constructor(private service:ParkingsService,private addresService:addresShared,private router:Router) {}

  ngOnInit() {
    // this.sideMapShow= true;

    this.callService() ;
    // this.sideMap.currentlocationFind();
    this.subscription = Observable.interval(1000 * 60).subscribe(x => {
      this.callService();
    });
    this.sideMapShow = true;
  }

  callService() {
    this.service.getParks().subscribe(
      (parkings) => {
        this.Parkhaus = parkings.Daten.Parkhaus;
        this.lastTime = parkings.Daten.Zeitstempel;
      });
  }
  closeSidenave(){
    this.sidenav.close();
  }
  onCloseSidenavEnd(){
    this.tabEnd.selectedIndex = 0;
    this.slideInit = false;
    this.sideMapShow=false;
    this.addresService.setParkHausName("");
  }
  onOpenSidenavEnd(park){
    this.currentParkName = park.Name;
    if(this.sideMap != undefined ){
    this.sideMap.serchAddres(park.Name);
    }
  }
  mapShow(){
    // this.router.navigate(['/hausmap'])
    console.log("mapshoe")
    this.sideMapShow= true;
  }
  showPark(park) {
    this.addresService.setParkHausName(park.Name);
    this.currentPark=park; 
    this.sidenav.open();
    this.slideInit = true;
  }
  onSelectChange = (event: any): void => {
    if(event.index === 0 ){
      console.log(event.index)
      this.slideInit = true;
    }else{
      this.slideInit = true;
    }
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}