import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

import { NumericTextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { GridAllModule } from '@syncfusion/ej2-angular-grids';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule,
    ToolbarModule,
    GridAllModule,
    BrowserModule,
    NumericTextBoxAllModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
