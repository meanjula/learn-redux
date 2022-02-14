import * as actionTypes from "../store/action";
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
      const newToDos = state.notes.filter((item) => item.id === action.id);
      return {
        ...state.notes,
        notes: newToDos,
      };
    case actionTypes.DONE_NOTE:
      const doneToggle = state.notes.map((item) => {
        return item.id === action.id
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

export default reducer;
