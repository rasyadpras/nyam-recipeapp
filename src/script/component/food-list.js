import './food-item';

class FoodList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set foods(foods) {
    this._foods = foods;
    this.render();
  }

  renderError(message) {
    this.shadowDOM.innerHTML = `
        <style>
          .placeholder {
            font-weight: 400;
            color: #fff;
            margin-top: 60px;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
        </style>
    `;

    this.shadowDOM.innerHTML += `<h2 class="placeholder">${message}</h2>`;
  }

  render() {
    this.shadowDOM.innerHTML = '';
    this._foods.forEach((food) => {
      const foodItemElement = document.createElement('food-item');
      foodItemElement.food = food;

      this.shadowDOM.appendChild(foodItemElement);
    });
  }
}

customElements.define('food-list', FoodList);
