import {toast} from 'react-toastify'

export const toastError=(error)=>{
    if(error.response && error.response.data&& error.response.data.message){
        return toast.error(error.response.data.message,{
            position:toast.POSITION.TOP_CENTER,
        })
    }else{
        return toast.error("Unexpected error");
    }
}