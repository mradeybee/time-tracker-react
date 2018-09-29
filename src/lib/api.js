import fetch from 'unfetch'

const api = {
  request(method, url, data, access_token){
    return fetch(`${process.env.REACT_APP_API_URL}/${url}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': access_token
      },
      method: method,
      body: JSON.stringify( data ),
      credentials: 'include'
    })
  }
}

export default api