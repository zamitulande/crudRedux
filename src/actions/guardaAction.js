import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR, 
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR

} from '../types';

//crear nuevos guardas
export function crearNuevoGuardaAction(guarda){
    return(dispatch)=>{
        dispatch(agregarGuarda());

        try {
            dispatch(agregarGuardaExito(guarda));
        } catch (error) {
            dispatch(agregarGuardaError(true));
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
    return(dispatch)=>{
        dispatch(agregarDotacion());

        try {
            dispatch(agregarDotacionExito(dotacion));
        } catch (error) {
            dispatch(agregarDotacionError(true));
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

})