import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR, 
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR

} from '../types';
import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

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