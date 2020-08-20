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
  theme: {
    mode: "light"
  },
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
    case "CHANGE_MODE":
      return {
        ...state,
        theme: {
          mode: action.payload.mode
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
