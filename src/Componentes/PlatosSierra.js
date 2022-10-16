import { PlatoTabla } from "./PlatoTabla";
import {Component} from 'react';



export class PlatosSierra extends Component{

     platosSierraItems=this.props.platos2.filter(p=>p.procedencia==='Sierra');

    render(){

        return(

            <div className="row">
    
            <h2>Platos de procedencia: SIERRA</h2>
    
               <PlatoTabla  plato3={this.platosSierraItems}/>
                
    
                
            </div>
    
        )
    }

       
    

}

/*
export const PlatosSierra=(props)=>{

    const {platos2}=props;

    const platosSierraItems=platos2.filter(p=>p.procedencia==='Sierra');

    return(

        <div className="row">

        <h2>Platos de procedencia: SIERRA</h2>

           <PlatoTabla  plato3={platosSierraItems}/>
            

            
        </div>

    )



}*/