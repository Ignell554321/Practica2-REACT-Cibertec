import { PlatoTabla } from "./PlatoTabla";

export const PlatosSierra=(props)=>{

    const {platos2}=props;

    const platosSierraItems=platos2.filter(p=>p.procedencia==='Sierra');

    return(

        <div className="row">

        <h2>Platos de procedencia: SIERRA</h2>

           <PlatoTabla  plato3={platosSierraItems}/>
            

            
        </div>

    )



}