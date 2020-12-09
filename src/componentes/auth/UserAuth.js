import jwt_decode from 'jwt-decode'
import jwt_admin from 'jsonwebtoken'


class UserAuth {
    constructor(){
        this.authenticated = false;
        this.permisos = '';
    }

    login(){
        let token = localStorage.getItem('jwt')
        let valido = jwt_admin.verify(token,"Clave super secreto para jwt")
        if(valido){
            console.log('Token valido')
            this.permisos = jwt_admin.decode(token).permisos
            if(this.permisos[0] === 'v'){
                this.authenticated = true
            }
        }
    }
    logout(){
        this.authenticated = false
        this.permisos = ''
        localStorage.removeItem('jwt')
    }
    isAuthenticated(){
        return this.authenticated
    }
    isVoluntario(){
        if(this.permisos[0] === 'v'){
            return true
        }else{
            return false
        }
    }
    isDirectivo(){
        if(this.permisos[4] === 'd'){
            return true
        }else{
            return false
        }
    }
    isAdmin(){
        if(this.permisos[5] === 'a'){
            return true
        }else{
            return false
        }
    }
    isCoordinador(){
        if(this.permisos[1] === 'c' || this.permisos[2] === 'c' || this.permisos[3] === 'c'){
            return true
        }else{
            return false
        }
    }
    isComedor(){
        if(this.permisos[1] === 'c'){
            return true
        }else{
            return false
        }
    }
    isConstruye(){
        if(this.permisos[2] === 'c'){
            return true
        }else{
            return false
        }
    }
    isReforza(){
        if(this.permisos[3] === 'c'){
            return true
        }else{
            return false
        }
    }
}

export default new UserAuth()