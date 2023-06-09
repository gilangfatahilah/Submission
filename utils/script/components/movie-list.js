import "./movie-item.js";

class movieList extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = "";

        this._movie.forEach((movie) => {
            const movieItemElement = document.createElement("movie-item");
            movieItemElement.movie = movie;
            this.shadowDOM.appendChild(movieItemElement);
        });
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        h3 {
            font-weight: 500;
            margin-top: 1.2em;
            color: white;
        }

        .msg {
            text-align: center;
        }
        </style>
        `;

        this.shadowDOM.innerHTML += `<h3 class="msg">${message}</h3>`;
    }
}

customElements.define("movie-list", movieList);