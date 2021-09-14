import * as actions from "../actionCreator";

const api = ({ dispatch }) => next => action => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

  const { url, method, data, onStart, onSuccess, onError } = action.payload;

  if (onStart) dispatch({ type: onStart });

  next(action);

  if (onSuccess) dispatch({ type: onSuccess, payload: data });
};

export default api