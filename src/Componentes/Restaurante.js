
import {data} from '../data';
import { Platos } from './Platos';
import { PlatosCM6 } from './PlatosCM6';
import { PlatosCosta } from './PlatosCosta';
import { PlatosM10 } from './PlatosM10';
import { PlatosSierra } from './PlatosSierra';

export const Restaurante=()=>{

    const {platos} = data;

    return(
    <div className='container-fluid'>
    
        <h1>Platos Restaurante</h1>
        <Platos platos2={platos}/>
        <PlatosCM6 platos2={platos}/>
        <PlatosCosta platos2={platos}/>
        <PlatosSierra platos2={platos}/>
        <PlatosM10 platos2={platos}/>

    </div>
    )
}