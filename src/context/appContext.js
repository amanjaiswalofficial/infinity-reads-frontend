import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  user: {
      anonymous: true,
      name: null,
      email: "adminUser@123"
  },
  propsNavbar: {
    overImage: false, 
    imageHeight: null, 
    scrollAmount: null
  },
  editBlog: {
    title: null,
    content: null,
    user_id: null
  },
  deleteBlog: {
    id: null
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
    case "SET_NAVBAR_PROPS":
      return {
        ...state,
        propsNavbar: {
          overImage: action.payload.overImage, 
          imageHeight: action.payload.imageHeight, 
          scrollAmount: action.payload.scrollAmount
        }
      };
    case "RESET_NAVBAR_PROPS":
        return {
          ...state,
          propsNavbar: {
            overImage: false,
            imageHeight: null,
            scrollAmount: null
          }
        };
    case "ENABLE_EDIT_BLOG":
    return {
        ...state,
        editBlog: {
            title: action.payload.title,
            user_id: action.payload.user_id,
            content: action.payload.content
        }
      };
    case "ENABLE_DELETE_BLOG":
      return {
          ...state,
          deleteBlog: {
              id: action.payload.id
          }
        };
  
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
