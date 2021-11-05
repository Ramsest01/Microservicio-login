import internal from "stream";

export class user {
    id: number;
    usuario: string
    correo: string
    pass: string

    constructor(nuevoId: number,nuevoUsuario:string, nuevoCorreo:string, nuevaPass:string) {
        this.id=nuevoId;
        this.usuario=nuevoUsuario;
        this.correo=nuevoCorreo;
        this.pass=nuevaPass;
     }
    
}