export default class UserInfo {
  constructor({authorSelector, aboutSelector}) {
    this._author = document.querySelector(authorSelector);
    this._about = document.querySelector(aboutSelector);
  }

  getUserInfo() {
    return {
      author: this._author.textContent,
      about: this._about.textContent
    };
  }

  setUserInfo({author, about}) {
    this._author.textContent = author;
    this._about.textContent = about;
  }
};