class searchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector("#movie-name").value;
    }

    render() {
        this.shadowDOM.innerHTML = ` <style>
        .search-container {
            display: grid;
            grid-template-columns: 9fr 3fr;
            gap: 1.2em;
        }

        .search-container input,
        .search-container button {
            font-size: 0.9em;
            outline: none;
            border-radius: 0.3em;
        }

        .search-container input {
            background-color: transparent;
            border: 1px solid #a0a0a0;
            color: #fff;
            padding: 0.7em;
        }

        .search-container input:focus {
            border-color: #fff;
        }

        .search-container button {
            background-color: #ffb92a;
            border: none;
            cursor: pointer;
        }

        #result {
            color: #fff;
        }
        </style>
        <div class="search-container">
            <input type="text" id="movie-name" placeholder="Masukan Judul Film..." value="Wednesday" />
            <button id="search-btn">Search</button>
        </div>
        <div id="result"></div>`;

        this.shadowDOM
            .querySelector("#search-btn")
            .addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", searchBar);