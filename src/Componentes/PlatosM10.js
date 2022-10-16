import { PlatoTabla } from "./PlatoTabla";

export const PlatosM10=(props)=>{

    const {platos2}=props;

    const platosMenor10Items=platos2.filter(p=>p.precio<10);

    return(

        <div className="row">

        <h2>Platos menor a 10 soles</h2>

           <PlatoTabla  plato3={platosMenor10Items}/>
            

            
        </div>

    )



}