import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import styles from './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      loginLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.loginSubmit = this.loginSubmit.bind(this)
  }

  handleChange (name, event) {
    this.setState({ [name]: event.target.value })
  }

  async loginSubmit (event) {
    event.preventDefault()
    this.setState({ loginLoading: true })
    try {
      const resJson = await fetch('/api/users/login', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      })
      const res = await resJson.json()
      this.props.checkLoginStatus(res.exist, res.valid)
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ loginLoading: false })
    }
  }

  render () {
    const form = <form onSubmit={this.loginSubmit} className={styles.login_form}>
      <div className={styles.login_form_username}>
        <label>Username</label>
        <input type='text' onChange={(event) => { this.handleChange('username', event) }}/>
      </div>
      <div className={styles.login_form_password}>
        <label>Password</label>
        <input type='password' onChange={(event) => { this.handleChange('password', event) }}/>
      </div>
      <div className={styles.login_form_submit}>
        <button type='submit'>Login</button>
      </div>
    </form>
    const loading = <p>loading</p>
    const redirect = <Redirect to='/'/>
    if (this.props.loginStatus && !this.state.loginLoading) {
      return redirect
    } else {
      if (this.state.loginLoading) {
        return loading
      } else {
        return form
      }
    }
  }
}

Login.propTypes = {
  loginStatus: PropTypes.bool,
  checkLoginStatus: PropTypes.func
}

export default Login
