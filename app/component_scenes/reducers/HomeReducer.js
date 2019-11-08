import {HomeActionType} from '../action_types';

const INITIAL_STATE = {
  loading: false,
  savetodatabase:""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HomeActionType.SAVE_TO_DATABASE_RESPONSE:
      return {
        ...state,
        loading: false,
        savetodatabase:action.val
      };
    default:
      return state;
  }
};