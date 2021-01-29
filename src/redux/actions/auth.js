export const login = (username,password) => {
    if(username==='admin' && password === 'admin'){
        return {
            type: 'LOGIN',
            payload: true
        }
    }else{
        return {
            type: 'LOGIN',
            payload: null
        }
    }
}