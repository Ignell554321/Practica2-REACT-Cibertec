
export const Plato=(props)=>{

    const {platos3} = props;

    return(


            platos3.map(
                ({id,nombre,descripcion,procedencia,calificacion,imagen},index)=>(
                
                    
                        
                    <div className="card col col-2"  key={id}>

                        <img src={imagen} className="card-img-top" alt="..."/>
                        <div className="card-header">Plato: {nombre}</div>
                        <div className="card-body">
                            <p className="card-text">{descripcion}</p>
                        </div>
                        <div className="card-footer">Calificacion: {calificacion}</div>

                    </div>

                    

                )
            )
            
        
     

        )
}