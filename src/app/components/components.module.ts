import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
//import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { ModalComponent, NgbdModalContent } from './modal/modal.component';
import { NavigationComponent } from './navigation/navigation.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    NouisliderModule,
    RouterModule,
    // JwBootstrapSwitchNg2Module,
  ],
  declarations: [
    ComponentsComponent,
    NavigationComponent,
    ModalComponent,
    NgbdModalContent,
    
  ],
  entryComponents: [NgbdModalContent],
  exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
