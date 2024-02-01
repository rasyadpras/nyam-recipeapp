class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector('#searchElement').value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        .search-container {
          max-width: 800px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          padding: 16px;
          border-radius: 10px;
          display: flex;
          position: sticky;
          top: 10px;
          background-color: #1e293b;
        }

        .search-box {
          width: 100%;
          display: grid;
          grid-template-columns: 9fr 2fr;
          gap: 10px;
        }
        
        .search-box input {
          font-size: 15px;
          padding: 9px;
          border: 2px solid #ccc;
          background: transparent;
          border-radius: 7.5px;
          color: #fff;
        }
        
        .search-box button {
          font-size: 15px;
          background-color: #ffb92a;
          border: none;
          font-weight: 600;
          border-radius: 7.5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
      </style>
          
      <div id="search-container" class="search-container">
          <div class="search-box">
            <input type="text" id="searchElement" placeholder="Enter Food Name ...">
            <button id="searchButtonElement">Search</button>
          </div>
      </div>
    `;

    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
  }
}

customElements.define('search-bar', SearchBar);
