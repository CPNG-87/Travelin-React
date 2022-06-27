import axios from "axios";

export async function getAllDestination({isFood=false,cityId=1}){

    try {
        
        let {data}=await axios({
            url:"http://localhost:5000/destination",
            method:"get"
        });

        data=data.data.filter((item)=>item.is_food===isFood&&item.id_city===cityId);

        return data;

    } catch (error) {
        return error;
    }
    
}