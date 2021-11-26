import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR

} from '../types';

//crear nuevos guardas
export function crearNuevoGuardaAction(guarda){
    return()=>{
        console.log(guarda)
    }
}