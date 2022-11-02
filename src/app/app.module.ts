import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColonneCompComponent } from './colonne-comp/colonne-comp.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { TacheCompComponent } from './tache-comp/tache-comp.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogModifComponent } from './dialog-modif/dialog-modif.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ColonneCompComponent,
    TacheCompComponent,
    DialogModifComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
