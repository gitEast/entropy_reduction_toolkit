class Request {
  async get(url: string) {
    const response = await fetch(`/api${url}`)
    const result = await response.json()
    return result
  }

  async post(url: string, body: any) {
    const response = await fetch(`/api${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const result = await response.json()
    return result
  }

  async put(url: string, body: any) {
    const response = await fetch(`/api${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    const result = await response.json()
    return result
  }

  async delete(url: string) {
    const response = await fetch(`/api${url}`, {
      method: 'DELETE'
    })
    const result = await response.json()
    return result
  }
}

const request = new Request()

export default request
