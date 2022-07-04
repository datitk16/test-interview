import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardLayoutComponent } from './components/dashboard-layout/dashboard-layout.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { DialogMessageModalComponent } from './components/dialog-message-modal/dialog-message-modal.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../+state/app.reducer';
@NgModule({
  declarations: [
    DashboardLayoutComponent,
    DialogMessageModalComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatSortModule,
    StoreModule.forRoot({ app: reducer }),
    EffectsModule.forRoot([]),
  ],
  exports: [
    DashboardLayoutComponent
  ],
})
export class CoreModule { }
