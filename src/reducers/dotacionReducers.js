import{
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR,
    COMENZAR_DESCARGA_DOTACION,
    DESCARGAR_DOTACION_ERROR,
    DESCARGAR_DOTACION_EXITO

} from '../types';


//cada reducer tiene su propio state
const initialState={
    dotacion:[],
    error: null,
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_DOTACION:
        case COMENZAR_DESCARGA_DOTACION:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_DOTACION_EXITO:
            return{
                ...state,
                loading: false,
                dotacion:[...state.dotacion, action.payload]
            }
        case AGREGAR_DOTACION_ERROR:
        case DESCARGAR_DOTACION_ERROR:  
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGAR_DOTACION_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                dotacion: action.payload
            }

        default:
            return state;
    }
}