import { LOADING, ERROR, SUCCESS } from "../actions/actions";

const initialState = {
  loading: false,
  error: "",
  results: [],
  info: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
      };
    case ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SUCCESS:
      return {
        ...state,
        loading: false,
        info: action.payload.info,
        results: action.payload.results,
      };
    default:
      return state;
  }
};

export default reducer;
