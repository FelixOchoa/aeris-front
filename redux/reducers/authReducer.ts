const initialState = {
  id: "",
  email: "",
  token: "",
  isLogged: false,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
        isLogged: action.payload.isLogged,
      };
    case "LOGOUT":
      return {
        ...state,
        email: "",
        token: "",
        isLogged: false,
      };
    case "GET_CURRENT_USER":
      return {
        ...state,
        id: action.payload.id,
        email: action.payload.email,
        token: action.payload.token,
        isLogged: action.payload.isLogged,
      };
    default:
      return state;
  }
};

export default authReducer;
