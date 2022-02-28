import * as actionTypes from "./action.js";

const initialState = {
  notes: [
    {
      id: 1,
      title: "Create clean app",
      task: "npx create-react-app",
      done: true,
    },
    {
      id: 2,
      title: "Install Redux",
      task: "npm install redux",
      done: false,
    },
    {
      id: 3,
      title: "Install Complementary Packages​",
      task: "npm install react-redux and npm install --save-dev redux-devtools",
      done: false,
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return {
        notes: [
          ...state.notes,
          {
            id: new Date().valueOf(),
            ...action.playload,
            done: false,
          },
        ],
      };
    case actionTypes.REMOVE_TODO:
      const newToDos = state.notes.filter(
        (item) => item.id !== action.playload
      );
      return {
        ...state.notes,
        notes: newToDos,
      };
    case actionTypes.DONE_NOTE:
      const doneToggle = state.notes.map((item) => {
        return item.id === action.playload
          ? { ...item, done: !item.done }
          : { ...item };
      });
      return {
        ...state,
        notes: doneToggle,
      };

    default:
      return state;
  }
};
// let store = createStore(reducer);
// //only way to update state is to call store.dispatch()
// store.dispatch({
//   type: actionTypes.ADD_TODO,
// });
// store.dispatch({
//   type: actionTypes.REMOVE_TODO,
// });
// store.dispatch({
//   type: actionTypes.DONE_NOTE,
// });
export default reducer;
