import { API_URL } from '@/utils/constants'

export class CollectionApi {
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

  async getCollectionInfo (id, jwt) {
    const response = await fetch(`${this._baseUrl}/Collection/getCollectionInfo/` + id, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getCollectionList (jwt) {
    const response = await fetch(`${this._baseUrl}/Collection/getCollectionList/`, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getGamesInCollectionList (collectionId, jwt) {
    const response = await fetch(`${this._baseUrl}/Collection/getGamesInCollectionList/` + collectionId, {
      method: 'GET',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async addGameToCollection (gameAndCollectionId, jwt) {
    await fetch(`${this._baseUrl}/Collection/addGameToCollection`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameAndCollectionId)
    })
  }

  async deleteGameFromCollection (gameAndCollectionId, jwt) {
    await fetch(`${this._baseUrl}/Collection/deleteGameFromCollection`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameAndCollectionId)
    })
  }

  async createCollection (newCollection, jwt) {
    const response = await fetch(`${this._baseUrl}/Collection/createCollection`, {
      method: 'POST',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCollection)
    })
    return this._getResponseData(response)
  }

  // not used
  async updateCollection (updateCollection) {
    const response = await fetch(`${this._baseUrl}/Collection/updateCollection`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateCollection)
    })
    return this._getResponseData(response)
  }

  async deleteCollection (id, jwt) {
    await fetch(`${this._baseUrl}/Collection/deleteCollection`, {
      method: 'DELETE',
      headers: {
        authorization: `bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
  }
}
