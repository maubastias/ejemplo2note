import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Pagina4PageRoutingModule } from './pagina4-routing.module';

import { Pagina4Page } from './pagina4.page';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Pagina4PageRoutingModule,
    NgxQRCodeModule
  ],
  declarations: [Pagina4Page]
})
export class Pagina4PageModule {}
