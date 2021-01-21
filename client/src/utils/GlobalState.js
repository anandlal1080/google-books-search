import React, { createContext, useReducer, useContext } from "react";
import { RENDER_RESULTS, GET_FAVORITE, REMOVE_FAVORITE } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case RENDER_RESULTS:
      return {
        ...state,
        searchResults: action.payload.items,
      };

    case GET_FAVORITE:
      return {
        ...state,
        savedBooks: action.data,
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        savedBooks: action.data.state.savedBooks.filter((item) => {
          return item._id !== action.data._id;
        }),
      };

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    searchResults: [],
    currentResults: {
      _id: 0,
      title: "",
      authors: "",
      description: "",
      image: "",
      link: "",
    },
    savedBooks: [],
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
