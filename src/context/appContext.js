import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  user: {
      anonymous: true,
      name: null,
      user_id: "adminUser@123"
  },
  propsNavbar: {
    overImage: false, 
    imageHeight: null, 
    scrollAmount: null
  },
  editBlog: {
    _id: null,
    title: null,
    content: null,
    user_id: null
  },
  deleteBlog: {
    _id: null
  },
  refreshState: {
    reload: false
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
            _id: action.payload._id,
            title: action.payload.title,
            user_id: action.payload.user_id,
            content: action.payload.content
        }
      };
    case "ENABLE_DELETE_BLOG":
      return {
          ...state,
          deleteBlog: {
              _id: action.payload._id
          }
        };
    case "REFRESH_STATE":
      return {
        ...state,
        refreshState: {
          reload: action.payload.reload
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
