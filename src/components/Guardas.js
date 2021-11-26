import React, {Fragment} from 'react';


const Guardas = () => {
    return (
      <Fragment>
          <h2 className="text-center my-5">Listado de Guardas</h2>

          <table className="table table-striped">
                <thead className="bg-primary table-dark">
                    <tr>
                        <th scope="col">Cedula</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">EPS</th>
                        <th scope="col">Fondo de pension</th>
                        <th scope="col">Fecha ingreso</th>
                    </tr>
                </thead>
          </table>
      </Fragment>
        
      );
}
 
export default Guardas;