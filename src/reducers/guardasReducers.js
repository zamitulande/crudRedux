import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR,
    COMENZAR_DESCARGA_GUARDA,
    DESCARGA_GUARDA_EXITO,
    DESCARGA_GUARDA_ERROR,
   

} from '../types';


//cada reducer tiene su propio state
const initialState={
    guardas:[],
    error: null,
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_GUARDA:
        case COMENZAR_DESCARGA_GUARDA:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_GUARDA_EXITO:
            return{
                ...state,
                loading: false,
                guardas:[...state.guardas, action.payload]
            }
        case AGREGAR_GUARDA_ERROR:
        case DESCARGA_GUARDA_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case DESCARGA_GUARDA_EXITO:
            return{
                ...state,
                loading: false,
                error: null,
                guardas: action.payload
            }
        
        default:
            return state;
    }
}