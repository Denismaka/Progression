class CounterPercent extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        this.counter = 0;
    }

    connectedCallback() {
        this.value = parseInt(this.getAttribute("value"), 10);
        const label = this.textContent;
        this.root.innerHTML = `
          <style>
            :host {
              font-family: 'Courier New', Courier, monospace;
              display: block;
              width: 200px;
              height: 200px;
              position: relative;
            }
            .content {
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              color: #7fdfff;
              font-size: 1.2em;
              font-weight: 500;
              text-align: center;
              line-height: 1.5em;
              text-shadow: 0 2px 8px #222a;
            }
            .rating {
              font-size: 2.5em;
              font-weight: 700;
              color: #ff9800;
              text-shadow: 0 0 10px #ff9800aa;
            }
            sup {
              font-size: 1.5em;
              font-weight: 300;
              color: #fff3;
            }
            .blocks {
              position: relative;
            }
            .block {
              position: absolute;
              width: 2px;
              height: 15px;
              background: #222;
              left: 50%;
              transform: rotate(calc(var(--i) * 3.6deg));
              transform-origin: 50% 100px;
              opacity: 0;
              border-radius: 2px;
              animation: animate 0.1s calc(var(--i) * 25ms) linear forwards;
            }
            .block:nth-child(-n + ${this.value}) {
              background: #ff9800;
              box-shadow: 0 0 15px #ff9800, 0 0 30px #ff9800aa;
            }
            @keyframes animate {
              to {
                opacity: 1;
              }
            }
          </style>
          <div class="content">
            <span class="rating">0</span><sup>%</sup>
            <span class="label">${label}</span>
          </div>
          <div class="blocks">
            ${Array.from(
                { length: 100 },
                (_, i) => `<div class="block" style="--i: ${i}"></div>`
            ).join("")}
          </div>
        `;
        this.$rating = this.root.querySelector(".rating");

        this.incrementCounter();
    }

    incrementCounter() {
        this.$rating.textContent = ++this.counter;
        if (this.counter < this.value) {
            setTimeout(this.incrementCounter.bind(this), 25);
        }
    }
}

customElements.define("counter-percent", CounterPercent);
