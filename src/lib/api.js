const api = {
  request(method, url, data){
    console.log(process.env.API_URL)
    return fetch(`${process.env.REACT_APP_API_URL}/url`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: method,
      body: JSON.stringify( data ),
      credentials: 'include'
    })
  }
}

export default api