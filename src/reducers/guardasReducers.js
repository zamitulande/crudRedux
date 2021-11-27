import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_GUARDA_ERROR

} from '../types';


//cada Reducer tiene su propio state
const initialState={
    guardas:[],
    dotacion:[],
    error: null,
    loading: false
}
export default function(state = initialState, action){
    switch(action.type){
        case AGREGAR_GUARDA:
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

            case AGREGAR_DOTACION:
            return{
                ...state,
                loading:action.payload
            }
        case AGREGAR_DOTACION_EXITO:
            return{
                ...state,
                loading: false,
                guardas:[...state.dotacion, action.payload]
            }
        default:
            return state;
    }
}