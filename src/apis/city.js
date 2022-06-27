import axios from "axios";

export async function getAllCity(){

    try {
        
        let {data}=await axios({
            url:"http://localhost:5000/city",
            method:"get"
        });

        return data;

    } catch (error) {
        return error;
    }
    
}