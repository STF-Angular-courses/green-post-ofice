import { Package } from './package.model';

export interface Department{
    id:number
    name:string
    worktime?:string
    packages: Package<string>[]
}
