import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { AboutComponent } from './layout/components/about.component';

import { LocalStorageService } from './core/services/local-storage.service';
import { ConfigOptionsService } from './core/services/config-options.service';
import { GeneratorService } from './core/services/generator.service';
import { PRODUCTMETADATA } from './core/services/constants.service';
import { RandomCharacters, GeneratorFactory } from './core/services/generator.factory';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CartModule,
    ProductsModule,
    OrdersModule,
    SharedModule,
    CoreModule
  ],
  providers: [
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: ConfigOptionsService},
    { provide: PRODUCTMETADATA, useValue: 'App: "CarShop", Ver: "1.0"'},
    { provide: RandomCharacters, useFactory: GeneratorFactory(5), deps: [GeneratorService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
