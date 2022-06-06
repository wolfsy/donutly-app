
export default function getAuthToken() {
    const auth = JSON.parse(localStorage.getItem('auth'));

    return auth && auth.token ? `Bearer ${auth.token}` : '';
  }
  