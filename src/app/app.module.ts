import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentItemComponent } from './department-item/department-item.component';
import { DepartmentItemListComponent } from './department-item-list/department-item-list.component';
import { PackageItemListComponent } from './package-item-list/package-item-list.component';
import { PackageItemComponent } from './package-item/package-item.component';
import { MatCardModule,  MatGridListModule, MatListModule, MatButtonModule } from '@angular/material';
import { DepartmentShowComponent } from './department-show/department-show.component';
import { DepartmentService } from './common/services/department.service';
import { PackageService } from './common/services/package.service';
@NgModule({
  declarations: [
    AppComponent,
    DepartmentItemComponent,
    DepartmentItemListComponent,
    PackageItemListComponent,
    PackageItemComponent,
    DepartmentShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatGridListModule,
    MatListModule, 
    MatButtonModule
  ],
  providers: [DepartmentService, PackageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
