import { Component, OnInit } from '@angular/core';

interface Tarjeta{
  title:string;
  subtitle:string;
  image:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'New challenge';
  public arrayTarjetas: Tarjeta[]=[];

  ngOnInit(): void {
    this.arrayTarjetas= [
      {title: "Image 1", subtitle: "Subtitle Image 1",image: "https://media.istockphoto.com/id/1362013456/es/vector/antecedentes-de-treest-y-moon_night.jpg?s=612x612&w=0&k=20&c=Pe2TJR2gkeCNuICm04WglSNV5EdiGvHiaRHWTo4qjCs="},
      {title: "Image 2", subtitle: "Subtitle Image 2",image: "https://media.istockphoto.com/id/187677762/es/foto/tierra-de-oro.jpg?s=612x612&w=0&k=20&c=s99T9Lb74E41kq18oim_ZC3W_svVi3XAsjmS-8_zXbg="},
      {title: "Image 3", subtitle: "Subtitle Image 3",image: "https://us.123rf.com/450wm/kjpargeter/kjpargeter0702/kjpargeter070200044/791429-silueta-de-%C3%A1rbol-contra-la-puesta-de-sol-vector.jpg?ver=6"},
    ]
  }
}
