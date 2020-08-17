import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  user: {
      anonymous: true,
      name: null,
      user_id: "adminUser@123"
  },
  refreshState: {
    reload: false
  },
  mode: {
    dark: false
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        user: {
            name: action.payload.name,
            email: action.payload.email,
            anonymous: false
        }
      };
    case "LOGOUT_USER":
      return {
        user: {
            name: null,
            email: null,
            anonymous: true
        }
      };
    case "REFRESH_STATE":
      return {
        ...state,
        refreshState: {
          reload: action.payload.reload
        }
      };
    case "SET_DARK_MODE":
      return {
        ...state,
        mode: {
          dark: action.payload.dark
        }
      }
    default:
      throw new Error();
  }
};

export const AppContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
