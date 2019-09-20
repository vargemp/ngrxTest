import { Component, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory, ComponentRef } from '@angular/core';
import { FunnyTextComponent } from './funny-text/funny-text.component';
import { Container } from '@angular/compiler/src/i18n/i18n_ast';
import { bananaAnimations, routeAnimations } from './animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'NgrxTest';
  num = 1;
  carActive = false;

  activateFunction() {
    this.num += 0.3;
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
