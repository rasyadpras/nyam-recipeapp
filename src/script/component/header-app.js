class HeaderApp extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Poppins';
        }

        :host {
          display: block;
          width: 100%;
          background-color: #1e293b;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        }

        h1 {
          padding-top: 10px;
          font-size: 45px;
          text-align: center;
          font-weight: 600;
        }

        p {
          font-size: 18px;
          padding-bottom: 10px;
          margin-bottom: 10px;
          color: #fff;
          text-align: center;
          font-style: oblique;
        }
      </style>
          
      <h1>Nyam Nyam Nyam</h1>
      <p>Find your recipe here</p>
    `;
  }
}

customElements.define('header-app', HeaderApp);
