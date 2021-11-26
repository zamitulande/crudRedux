import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR

} from '../types';

//crear nuevos guardas
export function crearNuevoGuardaAction(guarda){
    return(dispatch)=>{
        dispatch(agregarGuarda());

        try {
            dispatch(agregarGuardaExito(guarda));
        } catch (erro) {
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
const agregarGuardaError = ()=>({

})