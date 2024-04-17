import { API_URL } from '@/utils/constants'

export class GameApi {
  constructor () {
    this._baseUrl = API_URL
  }

  _getResponseData (res) {
    if (!res.ok) {
      return res.json().then(json => {
        console.log(json)
        if (json && json.message) {
          throw new Error(json.message)
        } else {
          throw new Error('Не удалось обработать ответ сервера')
        }
      })
    }
    return res.json()
  }

  async getGameInfo (id, jwt) {
    const response = await fetch(`${this._baseUrl}/Game/getGameInfo/` + id, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getGameList (jwt) {
    const response = await fetch(`${this._baseUrl}/Game/getGameList`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async createGame (newGame, jwt) {
    const response = await fetch(`${this._baseUrl}/Game/createGame`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newGame)
    })
    return this._getResponseData(response)
  }

  async uploadFile (data, jwt) {
    const response = await fetch(`${this._baseUrl}/Game/addGamePicture`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>'
      },
      body: data
    })
    return this._getResponseData(response)
  }

  // not used
  async updateGame (updateGame) {
    const response = await fetch(`${this._baseUrl}/Game/updateGame`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateGame)
    })
    return this._getResponseData(response)
  }

  // not used
  async deleteGame (id) {
    const response = await fetch(`${this._baseUrl}/Game/deleteGame/` + id, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }
}
