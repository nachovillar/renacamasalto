import jwt_decode from 'jwt-decode'

class UserAuth {
    constructor(){
        this.authenticated = false;
        this.permisos = '';
    }

    login(){
        let token = localStorage.getItem('jwt')
        if(token){
            this.permisos = jwt_decode(token).permisos
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
}

export default new UserAuth()