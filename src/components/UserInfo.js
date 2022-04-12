export default class UserInfo {
  constructor({authorSelector, aboutSelector, profileAvatar}) {
    this._author = document.querySelector(authorSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(profileAvatar);
  }

  getUserInfo() {
    return {
      author: this._author.textContent,
      about: this._about.textContent
    };
  }

  setUserInfo({author, about, id}) {
    this._author.textContent = author;
    this._about.textContent = about;
    this.id = id;
  }

  setUserAvatar({avatar}) {
    this._avatar.src = avatar;
  }
};