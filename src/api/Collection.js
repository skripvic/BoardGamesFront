import { API_URL } from '@/utils/constants'

export class CollectionApi {
  constructor () {
    this._baseUrl = API_URL
  }

  _getResponseData (res) {
    if (!res.ok) {
      return res.text().then(text => { throw new Error(text) })
    }
    return res.json()
  }

  async getCollectionInfo (id) {
    const response = await fetch(`${this._baseUrl}/Collection/getCollectionInfo/` + id, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getCollectionList (userId) {
    const response = await fetch(`${this._baseUrl}/Collection/getCollectionList/` + userId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async getGamesInCollectionList (collectionId) {
    const response = await fetch(`${this._baseUrl}/Collection/getGamesInCollectionList/` + collectionId, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    return this._getResponseData(response)
  }

  async deleteGameFromCollection (gameInfo) {
    await fetch(`${this._baseUrl}/Collection/deleteGameFromCollection`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(gameInfo)
    })
  }

  async createCollection (newCollection) {
    const response = await fetch(`${this._baseUrl}/Collection/createCollection`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCollection)
    })
    return this._getResponseData(response)
  }

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

  async deleteCollection (id) {
    await fetch(`${this._baseUrl}/Collection/deleteCollection`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(id)
    })
  }
}
