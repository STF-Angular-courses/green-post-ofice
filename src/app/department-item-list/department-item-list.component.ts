import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Department } from 'src/models/department.model';
import { Package } from 'src/models/package.model';
import { DepartmentService } from '../common/services/department.service';
import { PackageService } from '../common/services/package.service';
@Component({
  selector: 'app-department-item-list',
  templateUrl: './department-item-list.component.html',
  styleUrls: ['./department-item-list.component.scss']
})
export class DepartmentItemListComponent{
  constructor(private departmentService:DepartmentService, private packageService:PackageService) {
      
  }
  @Output() showDepart = new EventEmitter<Department>()
  porcessDepartmentById(id:number){
     const depart = this.departmentService.departments.find((item:Department)=>{
       return  item.id === id
     });
     this.departmentService.pushPackages()
     this.showDepart.emit(depart);
  }
  
}
