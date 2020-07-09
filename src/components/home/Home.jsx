import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import styles from './Home.css'

const home = ({
  loginStatus,
  logoutProcess
}) => {
  const logoutButton = loginStatus
    ? <button className={styles.home_navi_logout} onClick={logoutProcess}>Logout</button> : null
  return (
    <div className={styles.home_navi}>
      <Link className={styles.home_navi_links} to='/'>Home</Link>
      <Link className={styles.home_navi_links} to='/register'>Register</Link>
      <Link className={styles.home_navi_links} to='/login'>Login</Link>
      {logoutButton}
    </div>
  )
}

home.propTypes = {
  loginStatus: PropTypes.bool,
  logoutProcess: PropTypes.func
}

export default home
