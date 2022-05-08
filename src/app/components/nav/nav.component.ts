import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  activeMenu = false;
  counter = 0;
  subscriptions: Subscription[] = [];

  constructor(
    private storeService: StoreService 
  ) { }

  ngOnInit(): void {
     // Si se tendrán más subscripciones
    this.subscriptions = [
      this.getMyCartLength()
    ]
  }

  getMyCartLength(): Subscription {
    return this.storeService.myCart$
      .subscribe(products => {
        console.log(products.length)
        this.counter = products.length;
      })
  }


  ngOnDestroy(){
    this.subscriptions.forEach(sub => {
      if (sub !== null) {
        sub.unsubscribe()
      }
    });

    // Manejar una sola subscripción
    //this.subscription ? this.subscription.unsubscribe() : null;
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }
}
