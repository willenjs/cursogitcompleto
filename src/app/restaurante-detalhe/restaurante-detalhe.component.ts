import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'

import { RestaurantesService } from '../restaurantes/restaurantes.service'
import { Restaurante } from '../restaurantes/restaurante/restaurante.model'

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html',
  styleUrls: ['./restaurante-detalhe.component.css']
})
export class RestauranteDetalheComponent implements OnInit {

  restaurante: Restaurante

  constructor(private restauranteService: RestaurantesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restauranteById(this.route.snapshot.params['id'])
      .subscribe(restaurante => this.restaurante = restaurante)
  }

}
