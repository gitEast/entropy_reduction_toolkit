import CONST_resultStatus from '@/const/request-status'

class Request {
  async #responseInterceptor(response: Response) {
    if (response.ok) return await response.json()
    else {
      let data: any = await response.text()
      console.log(data)
      try {
        if (JSON.parse(data)) {
          data = JSON.parse(data)
        }
      } catch (error) {
        console.log('返回不是个 json 对象')
      }
      return { code: CONST_resultStatus.getByKey('FAIL'), data }
    }
  }

  async get(url: string) {
    const response = await fetch(`/api${url}`)
    return await this.#responseInterceptor(response)
  }

  async post(url: string, body: any) {
    const response = await fetch(`/api${url}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    return await this.#responseInterceptor(response)
  }

  async put(url: string, body: any) {
    const response = await fetch(`/api${url}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    })
    return await this.#responseInterceptor(response)
  }

  async delete(url: string) {
    const response = await fetch(`/api${url}`, {
      method: 'DELETE'
    })
    return await this.#responseInterceptor(response)
  }
}

const request = new Request()

export default request
