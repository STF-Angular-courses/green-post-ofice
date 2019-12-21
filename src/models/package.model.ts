export interface Package<T>{
    id:number
    title:string
    description:string
    sender:string
    recipient:string
    screen?:string
    type:T,
    department?:number
}