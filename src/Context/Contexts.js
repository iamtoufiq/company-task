import React from 'react'
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducers";
import { useNavigate } from 'react-router-dom';
const context = createContext();
const initialState = {
  data:"sdafsadfasdfsadfsadfsa" ,
  editContent:{},
  loading:false
};
const Contexts = ({ children }) => {
   
    const [state, dispatch] = useReducer(reducer, initialState);

    // edititable data , when click on the edit button
    const editData = (data) => {
      dispatch({
        type: "EDIT_DATA",
        payload: data,
      }); 
      
    console.log("data", data);
    };


  return (
    <context.Provider
      value={{ ...state , editData}}
    >
      {children}
    </context.Provider>
  )
}
// Global Hook
const useGlobalHook = () => {
    return useContext(context);
  };
export default Contexts
export { useGlobalHook };