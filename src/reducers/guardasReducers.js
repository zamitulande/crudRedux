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
        default:
            return state;
    }
}