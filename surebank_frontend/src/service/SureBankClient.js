import axios from "axios"

const BASE_URL="http://localhost:8080";


function getToken(){
    debugger;
    let auth=sessionStorage.getItem("token");
    if(auth){
        auth=JSON.parse(auth);
    }

    return auth? `Bearer ${auth.token}`:"";
}


const getAxiosIntance=()=>{
    const token=getToken();
    debugger;
    const axiosInstance=axios.create({
        headers:{
            Authorization:token
        }
    })
    return axiosInstance;
}





class SureBankClient{

    register(userInfo){
        return axios.post(BASE_URL+"/register",userInfo);
    }

    login(loginInfo){
        return axios.post(BASE_URL+"/login",loginInfo);
    }

    getUserInfo(){
        return getAxiosIntance().get(BASE_URL+"/user/userInfo");
    }



}

export default new SureBankClient();