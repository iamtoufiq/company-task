const ProductReducer = (state, action) => {
    switch (action.type) {
      case "EDIT_DATA":
        console.log(action.payload);
        return {
          ...state,
          editContent:{...action.payload}
        };
     
      default:
        return state;
    }
  };
  export default ProductReducer;