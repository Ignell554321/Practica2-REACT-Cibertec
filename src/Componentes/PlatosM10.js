import { Plato } from "./Plato";

export const PlatosM10=(props)=>{

    const {platos2}=props;

    const platosMenor10Items=platos2.filter(p=>p.precio<10);

    return(

        <div className="row">

        <h2>Platos menor a 10 soles</h2>

           <Plato  platos3={platosMenor10Items} menor10={false}/>
            

            
        </div>

    )



}