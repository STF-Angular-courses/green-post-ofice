import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/models/department.model';
import { DepartmentService } from '../common/services/department.service';
import { PackageService } from '../common/services/package.service';


@Component({
  selector: 'app-department-item',
  templateUrl: './department-item.component.html',
  styleUrls: ['./department-item.component.scss']
})
export class DepartmentItemComponent  {
  constructor(private departmentService:DepartmentService,private packageService:PackageService) {
      
  }
  @Input() depart: Department;
  @Output() showDepart = new EventEmitter<number>();
 
}
