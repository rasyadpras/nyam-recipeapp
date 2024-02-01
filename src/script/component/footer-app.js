class FooterApp extends HTMLElement {
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
            position: fixed;
            left: 0;
            bottom: 0;
            display: block;
            width: 100%;
            background-color: #ffb92a;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          }
  
          p {
            margin: 10px;
            text-align: center;
            font-size: 12px;
            color: #000;
            font-family: 'Segoe UI';
            font-style: italic;
          }
        </style>
           
        <p>Project Front-End Javascript by Rasyad</p>
      `;
  }
}

customElements.define('footer-app', FooterApp);
