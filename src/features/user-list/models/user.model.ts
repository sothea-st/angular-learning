export interface User {
    id:number,
    name: string,
    role?:'admin'|'user'|'editor',
    email:string
}