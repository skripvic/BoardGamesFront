import { API_URL } from '@/utils/constants'

export class UserApi {
  constructor () {
    this._baseUrl = API_URL
  }

  _getResponseData (res) {
    if (!res.ok) {
      return res.text().then(text => { throw new Error(text) })
    }
    return res.json()
  }

  async getUserInfo (id) {
    const response = await fetch(`${this._baseUrl}/User/getUserInfo/` + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getUserList () {
    const response = await fetch(`${this._baseUrl}/User/getUserList`, {
      method: 'GET',
      headers: {
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

  async refreshToken (tokens) {
    const response = await fetch(`${this._baseUrl}/User/refreshToken`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(tokens)
    })
    return this._getResponseData(response)
  }

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
