import { createContext, useReducer, useContext } from 'react';
import reducer, { initState } from './reducer';

//tạo context để dữ liệu bay cao bay xa thế giới
const StateContext = createContext();

//tạo provider cho StateContext
function StateProvider({ children }) {
    return <StateContext.Provider value={useReducer(reducer, initState)}>{children}</StateContext.Provider>;
}
//tạo sẵn hàm nhận prop luôn
const useStateValue = () => {
    return useContext(StateContext);
};

export { StateContext, useStateValue, StateProvider };
