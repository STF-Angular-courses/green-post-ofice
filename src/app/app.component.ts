import { Component } from '@angular/core';
import { DepartmentService } from './common/services/department.service';
import { Department } from 'src/models/department.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private departmentService:DepartmentService) {
      
  }
  title = 'post-office-green';
  activeDepartment = true;
  department:Department | null = null;
  
  showDepartment(department:Department){
    this.department = department;
    this.activeDepartment = false;
  }
  backToDepartment(){
    this.department = null;
    this.activeDepartment = true;
  }
}
