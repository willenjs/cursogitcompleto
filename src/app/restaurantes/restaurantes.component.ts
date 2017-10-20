import { Component, OnInit } from '@angular/core';
import { Restaurante } from './restaurante/restaurante.model'
import { RestaurantesService } from './restaurantes.service'

@Component({
  selector: 'mt-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css']
})
export class RestaurantesComponent implements OnInit {

  restaurantes: Restaurante[]

  constructor(private restaurantesService : RestaurantesService) {
  }

  ngOnInit() {
    this.restaurantesService.restaurantes().subscribe(
      restaurantes => this.restaurantes = restaurantes
    )
  }

}
