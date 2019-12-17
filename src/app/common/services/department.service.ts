import { Injectable } from '@angular/core';
import { Department } from 'src/models/department.model';
import { Package } from 'src/models/package.model';
import { PackageService } from './package.service';

@Injectable()
export class DepartmentService {

  constructor(private packageService:PackageService) { this.pushPackages() }

  public departments:Department[]=[{
    id:1,
    name: "Department 1",
    worktime:"9:00-18:30",
    packages:[]
  },{
    id:2,
    name: "Department 2",
    packages:[],
    worktime:"23:30-6:00"
  }]
  pushPackages():void{
   this.departments.forEach(element => {
     element.packages = []
     Array.prototype.push.apply(element.packages, this.packageService.parcels.filter(m => m.department === element.id));
   });
  }
  add(): void {
    const lastId = this.departments[this.departments.length - 1].id;
    const newId = lastId + 1;
    this.departments.push({
      id:newId,
      name: `Department ${newId}`,
      worktime: '10:00 - 20:00',
      packages:[],
    });
    console.log(this.departments);
  }
  remove(id: number): void {
    const deleteIndex = this.departments.findIndex((depart) => depart.id === id);
    this.departments.splice(deleteIndex, 1);
  }

}
