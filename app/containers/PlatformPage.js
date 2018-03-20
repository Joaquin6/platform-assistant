import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Platform from 'components/Platform';
import * as PlatformActions from 'actions/platform';

function mapStateToProps(state) {
  return {
    platform: state.platform || '',
    getPlatform() {
      return 'MacOS';
    }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(PlatformActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Platform);
