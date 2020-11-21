import React from "react";
import ReactDOM from "react-dom";
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

/*
 * Store
 */
const store = createStore(counterReducer);

/*
 * App Component
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    let centerStyle = {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      MsUserSelect: "none",
      userSelect: "none",
      cursor: "pointer",
    };

    return (
      <div onClick={this.onClick} style={centerStyle}>
        <h1> {this.props.store.getState().value} </h1>
      </div>
    );
  }

  onClick() {
    this.props.store.dispatch(increase(1));
  }
}

/*
 * Rendering
 */
const render = () => {
  // const appElement = document.getElementById("app");
  // window.onload = function () {
  //   ReactDOM.render(<App store={store} />, appElement);
  // };
  ReactDOM.render(
    <React.StrictMode>
      <App store={store} />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

store.subscribe(render);
render();
