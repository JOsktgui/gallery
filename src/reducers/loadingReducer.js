import { IMAGES } from '../constans';

const loadingReducer = (state = false, action) => {
  switch (action.type) {
    case IMAGES.LOAD:
      return true;
    case IMAGES.LOAD_SUCCESS:
      return true;
    case IMAGES.LOAD_FAIL:
      return false;

    default:
      return state;
  }
};

export default loadingReducer;