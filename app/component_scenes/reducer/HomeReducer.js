import {HOMEACTIONTYPE} from '../action_types/HomeActionType';

const INITIAL_STATE = {
  loading: false,
  savetodatabase:""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HOMEACTIONTYPE.SAVE_TO_DATABASE_RESPONSE:
      return {
        ...state,
        loading: false,
        savetodatabase:action.val
      };
    default:
      return state;
  }
};