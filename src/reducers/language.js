import * as types from "../actions/actionTypes";

const initialState = [
  {
    id: "a1b2c",
    name: "vietnamese",
  },
  {
    id: "a1b3c",
    name: "english",
  },
  {
    id: "a1b5c",
    name: "japanese",
  },
];

const languageReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case types.LANGUAGE:
        localStorage.setItem('languege', JSON.stringify(state));
      return [...payload];
    case types.ADD_LANGUAGE:
        const newLang = [...state];
        newLang.push(payload);
        localStorage.setItem('language', JSON.stringify(newLang))
      return [...newLang];
      case types.DELETE_LANGUAGE:
        const newArr = state.filter(item => item.id !== payload);
      return [...newArr];
    default:
      return [...state];
  }
};
export default languageReducer;
