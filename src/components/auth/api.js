
const baseApi = 'http://localhost:8080/auth'

export const getToken = () => {
  let token = localStorage.token
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