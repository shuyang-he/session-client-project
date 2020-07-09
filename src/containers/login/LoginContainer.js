import { connect } from 'react-redux'
import { loginFin } from '../../actions/Login'
import Login from '../../components/login/Login'

const mapStateToProps = (state, ownProps) => {
  return {
    loginStatus: state.loginStatus
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    checkLoginStatus: (exist, valid) => { loginFin(exist, valid, dispatch) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
