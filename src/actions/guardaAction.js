import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR, 
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR,
    COMENZAR_DESCARGA_GUARDA,
    DESCARGA_GUARDA_EXITO,
    DESCARGA_GUARDA_ERROR,
    COMENZAR_DESCARGA_DOTACION,
    DESCARGAR_DOTACION_EXITO,
    DESCARGAR_DOTACION_ERROR,
    OBTENER_GUARDA_ELIMINAR,
    GUARDA_ELIMINADO_EXITO,
    GUARDA_ELIMINADO_ERROR,
    OBTENER_DOTACION_ELIMINAR,
    DOTACION_ELIMINADO_EXITO,
    DOTACION_ELIMINADO_ERROR,
    OBTENER_GUARDA_EDITAR,
    OBTENER_DOTACION_EDITAR,
    COMENZAR_EDICION_DOTACION,
    COMENZAR_EDICION_GUARDA,
    GUARDA_EDITADO_EXITO,
    DOTACION_EDITADO_EXITO

} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';
import dotacionReducers from '../reducers/dotacionReducers';


//------------------------------------------------------------------------------------------------------------------
                // CREAR GUARDAS


//crear nuevos guardas
export function crearNuevoGuardaAction(guarda){
    return async (dispatch)=>{
        dispatch(agregarGuarda());

        try {
            //insertar datos en la API
            await clienteAxios.post('/guardas', guarda)

            //si todo sale  bien se actualiza el state
            dispatch(agregarGuardaExito(guarda));

            //alerta de alert2
            Swal.fire(
                'Correcto',
                'El guarda se agrego Correctamente',
                'success'
            )
        } catch (err) {
            console.log(err);
            //si hay un error se cambia el state
            dispatch(agregarGuardaError(true));

            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}
const agregarGuarda=()=>({
    type: AGREGAR_GUARDA,
    payload: true
});
//si se guarda bien el guarda en la base de datos
const agregarGuardaExito = guarda => ({
    type: AGREGAR_GUARDA_EXITO,
    payload: guarda
})

//si no se guarda bien, pasa un error
const agregarGuardaError = estado =>({
    type: AGREGAR_GUARDA_ERROR,
    payload: estado
});

//---------------------------------------------------------------------------------------------------------------

            //CREAR DOTACION

//crear nueva dotacion
export function crearNuevoDotacionAction(dotacion){
    return async (dispatch)=>{
        dispatch(agregarDotacion());

        try {
            //insertar datos en la API  
            await clienteAxios.post('/dotacion', dotacion)

            //si todo sale  bien se actualiza el state
            dispatch(agregarDotacionExito(dotacion));

            //alerta de alert2
            Swal.fire(
                'Correcto',
                'La dotacion se agrego Correctamente',
                'success'
            )
        } catch (err) {
            console.log(err);
            //si hay un error se cambia el state    
            dispatch(agregarDotacionError(true));

            //alerta de error de alert2
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Hubo un error, intenta de nuevo'
            })
        }
    }
}
const agregarDotacion=()=>({
    type: AGREGAR_DOTACION,
    payload: true
});
//si se guarda bien la dotacion  en la base de datos
const agregarDotacionExito = dotacion => ({
    type: AGREGAR_DOTACION_EXITO,
    payload: dotacion
})

//si no se guarda bien, pasa un error
const agregarDotacionError = estado =>({
    type: AGREGAR_DOTACION_ERROR,
    payload: estado

});



//-------------------------------------------------------------------------------------

            //OBNTER GUARDAS EN LA API

//funcion que descarga los guardas de la base de datos
export function obtenerGuardasAction(){
    return async (dispatch)=>{
        dispatch(descargaGuardas());

        //hacer la consulta a la api
        try {
            const respuesta = await clienteAxios.get('/guardas');
            dispatch(descargaGuardasExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaGuardasError());
        }
    }
}
const descargaGuardas=()=>({
    type: COMENZAR_DESCARGA_GUARDA,
    payload: true
})

const descargaGuardasExitosa = guardas=>({
    type: DESCARGA_GUARDA_EXITO,
    payload: guardas
})
const  descargaGuardasError = () =>({
    type: DESCARGA_GUARDA_ERROR,
    payload: true
})




//--------------------------------------------------------------------------------------------------------

            //OBTNER DOTACION EN LA API

//fincion que descarga las dotaciones de la base de datos
export function obtenerDotacionAction(){
    return async (dispatch)=>{
        dispatch(descargarDotacion());

        //hacer la consulta a al api
        try {
            const respuesta = await clienteAxios.get('/dotacion');
            dispatch(descargaDotacionExitosa(respuesta.data));
        } catch (error) {
            console.log(error);
            dispatch(descargaDotacionError());
        }
    }
}
const descargarDotacion=()=>({
    type:COMENZAR_DESCARGA_DOTACION,
    payload: true
})
const descargaDotacionExitosa = dotacion =>({
        type: DESCARGAR_DOTACION_EXITO, 
        payload: dotacion
})
const descargaDotacionError = ()=>({
    type: DESCARGAR_DOTACION_ERROR,
    payload: true
})

//----------------------------------------------------------------------------------------------------------------

            //ELIMINAR GUARDAS DE LA API

export function borrarGuardaAction(id){
    return async (dispatch)=>{
        dispatch(obtenerGuardaEliminar(id));
        
        try {
            await clienteAxios.delete(`/guardas/${id}`);
            dispatch(eliminarGuardaExito());

            //si se elimina, mostrar la alerta
            Swal.fire(
                'Eliminado',
                'El guarda se elimino correctamente.',
                'success'
              )
        } catch (error) {
                console.log(error);
                dispatch(eliminarGuardaError());
        }
    }
}
const obtenerGuardaEliminar = id => ({
    type: OBTENER_GUARDA_ELIMINAR,
    payload: id
})
const eliminarGuardaExito =id => ({
    type: GUARDA_ELIMINADO_EXITO
})
const eliminarGuardaError = ()=> ({
    type: GUARDA_ELIMINADO_ERROR,
    payload: true
})






//-------------------------------------------------------------------------------------------------------------------------

            //ELIMINAR DOTACION DE LA API


//selecciona y elimina una dotacion
export function borrarDotacionAction(id){
    return async (dispatch)=>{
        dispatch(obtenerDotacionEliminar(id));
        
        try {
            await clienteAxios.delete(`/dotacion/${id}`);
            dispatch(eliminarDotacionExito());
             //si se elimina, mostrar la alerta
             Swal.fire(
                'Eliminado',
                'La dotacion se elimino correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
            dispatch(eliminarDotacionError());
        }
    }
}
const obtenerDotacionEliminar = id => ({
    type: OBTENER_DOTACION_ELIMINAR,
    payload: id
});
const eliminarDotacionExito = id => ({
    type: DOTACION_ELIMINADO_EXITO
     
});
const eliminarDotacionError = id => ({
    type : DOTACION_ELIMINADO_ERROR,
    payload: true
});


//----------------------------------------------------------------------------------------------------------------

        //EDITAR GUARDA DE LA API

//colocar guarda en edicion
export function obtenerGuardaEditar(guarda){
    return(dispatch)=>{
        dispatch(obtenerGuardaActionEditar(guarda))
    }
}

const obtenerGuardaActionEditar  = guarda => ({
        type: OBTENER_GUARDA_EDITAR,
        payload: guarda
})




//--------------------------------------------------------------------------------------------------------------------

     //EDITAR DOTACION DE LA API

//colocar dotacion en edicion
export function obtenerDotacionEditar (dotacion){
    return(dispatch)=>{
        dispatch(obtenerDotacionActionEditar(dotacion))
    }
}
const obtenerDotacionActionEditar = dotacion => ({
    type: OBTENER_DOTACION_EDITAR,
    payload: dotacion
})


//-----------------------------------------------------------------------------------------------------------------

        //editar el registro del guarda en al api

export function editarGuardaAction(guarda){
    return async (dispatch)=>{
        dispatch(editarGuarda(guarda))

        try {
           await clienteAxios.put(`/guardas/${guarda.id}`, guarda);
            dispatch(editarGuardaExito(guarda));
            //si se elimina, mostrar la alerta
            Swal.fire(
                'Editado',
                'El guarda se Edito correctamente.',
                'success'
              )
        } catch (error) {
            
        }
    }
}

const editarGuarda= guarda=>({
    type: COMENZAR_EDICION_GUARDA,
    
});
const editarGuardaExito = guarda => ({
    type:GUARDA_EDITADO_EXITO,
    payload:guarda
})



//--------------------------------------------------------------------------------------------------------------------------


            //editt el registro de la dotacion en la api

export function editarDotacionAction(dotacion) {
    return async (dispatch) => {
        dispatch( editarDotacion() );

        try {
            await clienteAxios.put(`/dotacion/${dotacion.id}`, dotacion);    
            dispatch(editarDotacionExito(dotacion));
            //si se elimina, mostrar la alerta
            Swal.fire(
                'Editado',
                'La dotacion se Edito correctamente.',
                'success'
              )
        } catch (error) {
            console.log(error);
           
        }
    }
}
const editarDotacion = () => ({
    type: COMENZAR_EDICION_DOTACION
});
const editarDotacionExito= dotacion=> ({
    type: DOTACION_EDITADO_EXITO,
    payload: dotacion
})
