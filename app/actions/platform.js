// @flow
import type { platformStateType } from '../reducers/platform';

type actionType = {
  +type: string
};

export const CHECK_PLATFORM = 'CHECK_PLATFORM';

export function platform() {
  return {
    type: CHECK_PLATFORM
  };
}

export function getPlatform() {
  return (dispatch: (action: actionType) => void, getState: () => platformStateType) => {
    dispatch(platform());
  };
}
