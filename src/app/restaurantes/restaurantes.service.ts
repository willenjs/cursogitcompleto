import {Injectable} from '@angular/core'
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import {Restaurante} from './restaurante/restaurante.model'
import {MenuItem} from '../restaurante-detalhe/menu-item/menu-item.model'
import {ErrorHandler} from '../app.error-handler'
import {MEAT_API} from '../app.api'

@Injectable()
export class RestaurantesService {
  constructor(private http:Http) {
  }

  restaurantes(): Observable<Restaurante[]> {
    return this.http.get(`${MEAT_API}/restaurantes`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  restauranteById(id : string): Observable<Restaurante> {
    return this.http.get(`${MEAT_API}/restaurantes/${id}`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  reviewsOfResturante(id: string): Observable<any> {
    return this.http.get(`${MEAT_API}/restaurantes/${id}/reviews`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }

  menuOfRestaurante(id: string): Observable<MenuItem[]> {
    return this.http.get(`${MEAT_API}/restaurantes/${id}/menu`)
      .map(response => response.json())
      .catch(ErrorHandler.handleError)
  }
}
