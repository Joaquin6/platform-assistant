// @flow
import { CHECK_PLATFORM } from '../actions/platform';

export type platformStateType = {
  platform: () => void
};

type actionType = {
  +type: string
};

export default function platform(state: string = 'unknown', action: actionType) {
  switch (action.type) {
    case CHECK_PLATFORM:
      return state;
    default:
      return state;
  }
}
