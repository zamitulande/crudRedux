import{
    AGREGAR_DOTACION,
    AGREGAR_DOTACION_EXITO,
    AGREGAR_DOTACION_ERROR

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
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}