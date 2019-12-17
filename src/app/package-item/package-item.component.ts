import { Component, Input, Output } from '@angular/core';
import { Package } from 'src/models/package.model';
import { PackageService } from '../common/services/package.service';
import { DepartmentService } from '../common/services/department.service';

@Component({
  selector: 'app-package-item',
  templateUrl: './package-item.component.html',
  styleUrls: ['./package-item.component.scss']
})
export class PackageItemComponent  {
  constructor(private packageService:PackageService, private departmentService:DepartmentService) {
      this.departmentService.pushPackages()
  }
  //односторонній біндінг з батьківського в дочірній
  @Input() package: Package<string>;
  
  getCorrectBase64(base64:string):string{
    return `data:image/jpeg;base64,${base64}`;
  }
}
