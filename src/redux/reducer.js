import { getQueriesForElement } from '@testing-library/dom';
import { ADD, DELETE, EDIT, DONE, FILTER } from './action';

const initialState = {

  listOfTasks: 
  [
    {
        id:0,value:"HTML CSS",completed:false,
    },
     {
        id:1,value:"JS",completed:true,
    },
     {
        id:2,value:"React Js",completed:false,
    }
],
  
  filteredState: "all",
  
  
};

const reducer = (state = initialState, action) => {
  if (action.type === ADD) {
    return { ...state, listOfTasks: [...state.listOfTasks, action.payload] };
  }
  if (action.type === DELETE) {
    return {
      ...state,
      listOfTasks: state.listOfTasks.filter((el) => el.id !== action.payload),
    };
  }
  if (action.type === EDIT) {
    return {
      ...state,
      listOfTasks: state.listOfTasks.map((el) => {
        if (el.id === action.payload.id) {
          el.value = action.payload.newText;
        }
        return el;
      }),
    };
  }
  if (action.type === DONE) {
    return {
      ...state,
      listOfTasks: state.listOfTasks.map((el) => {
        if (el.id === action.payload) {
          el.completed = !el.completed;
        }
        return el;
      }),
    };
  }

  if (action.type === FILTER) {
   
    return {
      ...state,
      filteredState: action.payload,
    };
  }
  return state;
};

export default reducer;
