import { INCREMENT,DECREMENT,RESET } from "../Reducers/counterReducer";

export const increment =() =>({type :INCREMENT});
export const decrement = () => ({ type: DECREMENT });
export const reset = () => ({ type: RESET });