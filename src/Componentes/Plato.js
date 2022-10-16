
export const Plato=(props)=>{

    const {platos3,menor10=true} = props;

    return(


            
                platos3.map(
                    ({id,nombre,descripcion,procedencia,calificacion,imagen,precio},index)=>(
                    
                        
                            
                        <div className="card col col-2"  key={id}>

                            <img src={imagen} className="card-img-top" alt="..."/>
                            <div className="card-header">Plato: {nombre}</div>
                            <div className={menor10?'card-body':'card-body d-none '}>
                                <p className='card-text' >{descripcion}</p>
                            </div>
                            <div className="card-footer">Calificacion: {calificacion} / Precio: {precio}  / Procedencia: {procedencia}</div>

                        </div>

                        

                    )
                )

               
            
    )
     

        
}