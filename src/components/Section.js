export default class Section {
    constructor({renderer}, containerSelector) {
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }

    renderItems(cardItems) {
      cardItems.forEach((item) => {
          this._renderer(item);
      });
    }

    addItem(element, isAppend) {
      isAppend ? this._container.append(element) : this._container.prepend(element);
    }
};
