// import{
//     AGREGAR_DOTACION,
//     AGREGAR_DOTACION_EXITO,
//     AGREGAR_DOTACION_ERROR

// } from '../types';

// //crear nuevos guardas
// export function crearNuevoDotacionAction(dotacion){
//     return(dispatch)=>{
//         dispatch(agregarDotacion());

//         try {
//             dispatch(agregarDotacionExito(dotacion));
//         } catch (erro) {
//             dispatch(agregarDotacionError(true));
//         }
//     }
// }
// const agregarDotacion=()=>({
//     type: AGREGAR_DOTACION,
//     payload: true
// });
// //si se guarda bien el guarda en la base de datos
// const agregarDotacionExito = dotacion => ({
//     type: AGREGAR_DOTACION_EXITO,
//     payload: dotacion
// })

// //si no se guarda bien, pasa un error
// const agregarDotacionError = ()=>({

// })