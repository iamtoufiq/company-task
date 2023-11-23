import React, { useState } from 'react'
import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducers";
import { useNavigate } from 'react-router-dom';
const context = createContext();
const initialState = {
  data:"" ,
  editContent:{},
  editUserContent:{},
  loading:false
};
const Contexts = ({ children }) => {
  const [searchName, setSearchName]=useState("")
    const [state, dispatch] = useReducer(reducer, initialState);

    // edititable data , when click on the edit button
    const editData = (data) => {
      dispatch({
        type: "EDIT_DATA",
        payload: data,
      }); 

    };

    const editUser = (data) => {
      dispatch({
        type: "EDIT_USER",
        payload: data,
      }); 
    };

    const handleLoading= (para)=>{
      dispatch({
        type: "SET_LOADING",
        payload: para,
      }); 
    }
  return (
    <context.Provider
      value={{ ...state , editData ,editUser , searchName , setSearchName , handleLoading}}
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