import { API_URL } from '@/utils/constants'

export class UserApi {
  constructor () {
    this._baseUrl = API_URL
  }

  _getResponseData (res) {
    if (!res.ok) {
      return res.json().then(json => {
        if (json && json.message) {
          throw new Error(json.message)
        } else {
          throw new Error('Не удалось обработать ответ сервера')
        }
      })
    }
    return res.json()
  }

  async getUserInfo (jwt) {
    const response = await fetch(`${this._baseUrl}/User/getUserInfo/`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getUserList (jwt) {
    const response = await fetch(`${this._baseUrl}/User/getUserList`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async registration (newUser) {
    const response = await fetch(`${this._baseUrl}/User/registration`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    return this._getResponseData(response)
  }

  async signIn (signInForm) {
    const response = await fetch(`${this._baseUrl}/User/signIn`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signInForm)
    })
    return this._getResponseData(response)
  }

  async validateJwt (jsonJwt, jwt) {
    const response = await fetch(`${this._baseUrl}/User/validateJwt`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(jsonJwt)
    })
    return this._getResponseData(response)
  }

  // not used
  async updateUser (updateUser) {
    const response = await fetch(`${this._baseUrl}/User/updateUser`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateUser)
    })
    return this._getResponseData(response)
  }

  // not used
  async deleteUser (id) {
    const response = await fetch(`${this._baseUrl}/User/deleteUser/` + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }
}
