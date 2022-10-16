
export const PlatoTabla=(props)=>{

    const {plato3} = props;

    return(


        <table className="table table-sm table-striped">

        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripcion</th>
                <th>Calificacion</th>
                <th>Precio</th>
                <th>Procedencia</th>
                <th>Imagen</th>
            </tr>
        </thead>

        <tbody>

                
                    {
                        plato3.map(({id,nombre,descripcion,procedencia,calificacion,imagen,precio},index)=>(

                            <tr key={id}>

                                <td>{nombre}</td>
                                <td>{descripcion}</td>
                                <td>{calificacion}</td>
                                <td>{precio}</td>
                                <td>{procedencia}</td>
                                <td><img  className="img-fluid" src={imagen} alt=''/> </td>


                            </tr>

                        ))

                    }
                
           

        </tbody>

        </table>
            
        
     

        )
}