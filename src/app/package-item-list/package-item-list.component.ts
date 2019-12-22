import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Package } from 'src/models/package.model';
import { DepartmentService } from '../common/services/department.service';

@Component({
  selector: 'app-package-item-list',
  templateUrl: './package-item-list.component.html',
  styleUrls: ['./package-item-list.component.scss']
})
export class PackageItemListComponent  {
 constructor(private departmentService:DepartmentService) {
     
 }
}
