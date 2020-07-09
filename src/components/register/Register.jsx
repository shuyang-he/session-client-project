import React, { Component } from 'react'
import styles from './Register.css'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      comfirmPassword: '',
      registerLoading: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.registerSubmit = this.registerSubmit.bind(this)
  }

  handleChange (name, event) {
    this.setState({ [name]: event.target.value })
  }

  async registerSubmit () {
    this.setState({ registerLoading: true })
    try {
      const resJson = await fetch('/api/users/register', {
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
      console.log(res)
    } catch (error) {
      console.log(error)
    } finally {
      this.setState({ registerLoading: false })
    }
  }

  render () {
    return (
      <>
        <form onSubmit={this.registerSubmit} className={styles.register_form}>
          <div className={styles.register_form_username}>
            <label>Username</label>
            <input type='text' onChange={(event) => { this.handleChange('username', event) }}/>
          </div>
          <div className={styles.register_form_password}>
            <label>Password</label>
            <input type='password' onChange={(event) => { this.handleChange('password', event) }}/>
          </div>
          <div className={styles.register_form_comfirm_password}>
            <label>Comfirm password</label>
            <input type='password' onChange={(event) => { this.handleChange('comfirmPassword', event) }}/>
          </div>
          <div className={styles.register_form_submit}>
            <button type='submit' >Register</button>
          </div>
        </form>
      </>
    )
  }
}

export default Register
