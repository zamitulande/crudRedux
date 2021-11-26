import{
    AGREGAR_GUARDA,
    AGREGAR_GUARDA_EXITO,
    AGREGAR_GUARDA_ERROR

} from '../types';


//cada reducer tiene su propio state
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
        default:
            return state;
    }
}