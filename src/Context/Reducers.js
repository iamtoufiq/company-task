const ProductReducer = (state, action) => {
    switch (action.type) {
      case "EDIT_DATA":
        return {
          ...state,
          editContent:{...action.payload}
        };
        case "EDIT_USER":
          
          return {
            ...state,
            editUserContent:{...action.payload}
          };

          case "SET_LOADING":
          return {
            ...state,
            loading: action.payload
          };
      default:
        return state;
    }
  };
  export default ProductReducer;