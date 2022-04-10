export default class Api {
  constructor({url, headers}) {
    this._url = url;
    this._userUrl = `${this._url}users/me`;
    this._cardsUrl = `${this._url}cards`;
    this._avatarUrl = `${this._url}users/me/avatar`;
    this._headers = headers;
  }

  _responseStatus(res) {
    return res.ok ? res.json() : Promise.reject(`Код ошибки: ${res.status}`);
  }

  getUserData() {
    return fetch(this._userUrl, {
      headers: this._headers
    })
      .then((res) => this._responseStatus(res))
      .catch((err) => Promise.reject(err));
  }

  getCards() {
    return fetch(this._cardsUrl, {
      headers: this._headers
    })
      .then((res) => this._responseStatus(res))
      .catch((err) => Promise.reject(err));
  }

  setUserData({name, about}) {
    return fetch(this._userUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about
      })
    })
      .then((res) => this._responseStatus(res))
      .catch((err) => Promise.reject(err));
  }

  addCard({name, link}) {
    return fetch(this._cardsUrl, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then((res) => this._responseStatus(res))
      .catch((err) => Promise.reject(err));
  }

  removeCard(id) {
    return fetch(this._cardsUrl + `/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._responseStatus(res))
    .catch((err) => Promise.reject(err));
  }

  putLike(id) {
    return fetch(this._cardsUrl + `/likes/${id}`, {
      method: 'PUT',
      headers: this._headers
    })
    .then(res => this._responseStatus(res))
    .catch((err) => Promise.reject(err));
  }

  removeLike(id) {
    return fetch(this._cardsUrl + `/likes/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(res => this._responseStatus(res))
    .catch((err) => Promise.reject(err));
  }

  setUserAvatar(url) {
    return fetch(this._avatarUrl, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    })
    .then(res => this._responseStatus(res))
    .catch((err) => Promise.reject(err));
  }
};
