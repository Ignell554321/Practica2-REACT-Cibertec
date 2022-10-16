import { PlatoTabla } from "./PlatoTabla";

export const PlatosCosta=(props)=>{

    const {platos2}=props;

    const platosCostaItems=platos2.filter(p=>p.procedencia==='Costa');

    return(

        <div className="row">

        <h2>Platos de procedencia: COSTA</h2>

           <PlatoTabla  plato3={platosCostaItems}/>
            

            
        </div>

    )



}