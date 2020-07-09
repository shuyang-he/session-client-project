const logoutSuccess = () => {
  return {
    type: 'LOGOUT_SUCCESS'
  }
}

const logoutFailure = () => {
  return {
    type: 'LOGOUT_FAILURE'
  }
}

const logoutFin = (logout, dispatch) => {
  if (logout) {
    dispatch(logoutSuccess())
  } else {
    dispatch(logoutFailure())
  }
}

export const logout = async () => {
  try {
    const resJson = await fetch('/api/users/logout')
    const res = await resJson.json()
    logoutFin(res.logout)
  } catch (error) {
    console.log(error)
  }
}
