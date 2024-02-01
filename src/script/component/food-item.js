class FoodItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set food(food) {
    this._food = food;
    this.render();
  }

  render() {
    const getIngredients = (food) => {
      let ingreHtml = '';
      for (let i = 1; i <= 20; i++) {
        const ingredient = food[`strIngredient${i}`];
        if (ingredient) {
          const measure = food[`strMeasure${i}`];
          ingreHtml += `<li>${measure} ${ingredient}</li>`;
        } else {
          break;
        }
      }
      return ingreHtml;
    };

    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        :host {
          display: block;
          margin-bottom: 40px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          border-radius: 10px;
          overflow: hidden;
        }

        .img-food {
          width: 100%;
          max-height: 300px;
          object-fit: cover;
          object-position: center;
        }

        .food-info {
          padding: 25px;
          background-color: #1e293b;
        }

        .details {
          background-color: #ffb92a;
          text-align: center;
          padding: 10px 0;
          border-radius: 10px;
        }

        .details > h2 {
          font-size: 32px;
          text-align: center;
          color: black;
          font-weight: 600;
        }

        .details > h4 {
          font-size: 24px;
          text-align: center;
          color: black;
          font-weight: 400;
          font-style: italic;
        }

        .food-info > p {
          white-space: pre-wrap;
          word-wrap: break-word;
          padding: 40px 24px 24px;
          font-size: 14px;
          color: #fff;
        }

        .ingre-container h3 {
          margin-top: 20px;
          text-align: center;
          color: #fff;
          font-weight: 200;
          font-size: 16px;
        }

        .ingre-container ul {
          font-size: 15px;
          position: relative;
          display: grid;
          grid-template-columns: auto auto;
          gap: 12px 16px;
          padding: 16px 0 0 18px;
          color: #ccc;
          text-transform: capitalize;
        }
      </style>
          
      <img class="img-food" src="${this._food.strMealThumb}" alt="Image Food">
      <div class="food-info">
        <div class="details">
          <h2>${this._food.strMeal}</h2>
          <h4>${this._food.strArea}</h4>
        </div>
        <div class="ingre-container">
          <h3>Ingredients:</h3>
          <ul>${getIngredients(this._food)}</ul>
        </div>
        <p>${this._food.strInstructions}</p>
      </div>
    `;
  }
}

customElements.define('food-item', FoodItem);
