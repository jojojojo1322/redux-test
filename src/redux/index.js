import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";

/*
 * Action
 */

const INCREMENT = "INCREMENT";

function increase(diff) {
  return {
    type: INCREMENT,
    addBy: diff,
  };
}

/*
 * Reducer
 */

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + action.addBy,
      });
    default:
      return state;
  }
};


