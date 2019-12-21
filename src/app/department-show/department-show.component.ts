import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/models/department.model';
import { DepartmentService } from '../common/services/department.service';
import { PackageService } from '../common/services/package.service';

@Component({
  selector: 'app-department-show',
  templateUrl: './department-show.component.html',
  styleUrls: ['./department-show.component.scss']
})
export class DepartmentShowComponent  {

  constructor(private departmentService:DepartmentService) {
      
  }
  @Input() department:Department;
  
  
}
