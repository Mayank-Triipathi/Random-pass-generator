import { useEffect, useState } from "react";

 function currencyconvert(){
    const [data,setdata] = useState({});
     useEffect(() =>{fetch(`fca_live_MFo6EzQOmP51h3SBD0joBLbWL7P3hww3ZBZQMkLe`)
        .then((res) =>{res.json()}).then((res)=>{setdata(res[currency])});},[currency])
    
return data;
}

export default currencyconvert;