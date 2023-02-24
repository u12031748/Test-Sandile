import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { hero } from '../models/hero';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  heroes: hero[]
  colors = [
    'color-class1', 'color-class2', 'color-class3', 'color-class4'
 ];
 randomColor = [];
  constructor(private apiService:ApiService) { }

  ngOnInit() {

    this.getColor()
    this.getHeroes()
  }

  getColor(){
    this.randomColor = [];
    for (let i =0; i < 4; i++) {
      const random = Math.floor(Math.random() * this.colors.length)
      console.log(random)

      this.randomColor.push(this.colors[random])
      
    }
  }
  getHeroes()
  {
    this.apiService.getHeros().subscribe((results:hero[]) => {
      this.heroes = results;
    });
  }
  Evolve(hero:hero)
  {
    this.apiService.postHeros(hero).subscribe((results: hero) => {
      let indexToUpdate = this.heroes.findIndex(hero => hero.name === results.name);
      this.heroes[indexToUpdate] = results;
    });
  }

}
