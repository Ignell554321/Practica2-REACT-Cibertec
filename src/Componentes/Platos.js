import { Plato } from "./Plato"

export const Platos=(props)=>{

    const {platos2} = props;

    return(
    <>
        <div className="row">
            <Plato platos3={platos2}/>

        </div>

    </>
    )
}