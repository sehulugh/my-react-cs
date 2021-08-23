import { useState } from "react";


const Converter = () => {
   const [km, setKm] = useState(0)

   function handleChange(e) {
        setKm(e.target.value);
       
   }

   var convert = (km) => (km/1.609).toFixed(2);

    return ( <div>
        <input type="text" value={km} onChange={handleChange} />
        <p>{km} Km is {convert(km)}</p>
    </div> );
}
 
export default Converter;