import { setError } from "./RTK/slices/error";

export const digit2 = (num) => (num >= 10 ? num : `0${num}`);

export function fireError(dispatch, errMsg, seconds) {
  dispatch(setError(errMsg));
}
