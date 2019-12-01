import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './layout/components/about.component';
import { AdminModule } from './admin/admin.module';
import { LoginModule } from '../app/login/login.module';
import { RootStoreModule } from './core/@ngrx/root-store.module';

import { LocalStorageService } from './core/services/local-storage.service';
import { ConfigOptionsService } from './core/services/config-options.service';
import { GeneratorService } from './core/services/generator.service';
import { PRODUCTMETADATA } from './core/services/constants.service';
import { RandomCharacters, GeneratorFactory } from './core/services/generator.factory';

import { httpInterceptorProviders } from './core/interceptors';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,

    SharedModule,
    LoginModule,
    AdminModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    HttpClientModule,
    AppRoutingModule,
    RootStoreModule
  ],
  providers: [
    httpInterceptorProviders,
    { provide: LocalStorageService, useClass: LocalStorageService},
    { provide: ConfigOptionsService},
    { provide: PRODUCTMETADATA, useValue: 'App: "CarShop", Ver: "1.0"'},
    { provide: RandomCharacters, useFactory: GeneratorFactory(5), deps: [GeneratorService]}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
