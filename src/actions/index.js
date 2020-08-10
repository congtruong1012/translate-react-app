import * as types from "./actionTypes";
export const getLanguage = (data) => {
  return {
    type: types.LANGUAGE,
    payload: data,
  };
};
export const addLanguage = (data) => {
  return {
    type: types.ADD_LANGUAGE,
    payload: data,
  };
};
export const updateLanguage = (data) => {
  return {
    type: types.UPDATE_LANGUAGE,
    payload: data,
  };
};
export const deleteLanguage = (id) => {
  return {
    type: types.DELETE_LANGUAGE,
    payload: id,
  };
};
