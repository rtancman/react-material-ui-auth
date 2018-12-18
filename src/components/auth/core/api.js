
const baseApi = 'http://localhost:8080/auth'

export const getToken = () => {
  let token = localStorage.getItem('token')
  if (!token) return ''

  return token
}

export const setToken = () => {
  let token = localStorage.getItem('token')
  if (!token) return ''

  return token
}

export const headers = {
  'Content-Type': 'application/json',
}

export const routes = {
  signIn: `${baseApi}/signin`,
  session: `${baseApi}/session`,
} 

export const sessionAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}