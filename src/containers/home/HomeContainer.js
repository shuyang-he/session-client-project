import Home from '../../components/home/Home'
import { connect } from 'react-redux'
import { logout } from '../../actions/Logout'

const mapStateToProps = (state, props) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    logoutProcess: (logoutStatus) => { logout(logoutStatus, dispatch) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
