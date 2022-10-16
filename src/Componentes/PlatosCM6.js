
import { PlatoTabla } from "./PlatoTabla";
import {Component} from 'react';


export class PlatosCM6 extends Component{
    
    
     platosCM6=this.props.platos2.filter(p=>p.calificacion>6);

    render(){

        return(

            <div className="row">
    
            <h2>Platos con calificacion mayor a 6</h2>
    
               <PlatoTabla  plato3={this.platosCM6}/>
                
    
                
            </div>
    
        )
    }

       
    

}

/*export const PlatosCM6=(props)=>{

    const {platos2}=props;

    const platosCM6=platos2.filter(p=>p.calificacion>6);

    return(

        <div className="row">

        <h2>Platos con calificacion mayor a 6</h2>

           <PlatoTabla  plato3={platosCM6}/>
            

            
        </div>

    )



}*/