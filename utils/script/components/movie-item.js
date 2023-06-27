class movieItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const rating = this._movie.vote_average.toFixed(1);
        const title = this._movie.original_title;
        const overview = this._movie.overview;
        const imgUrl = `https://image.tmdb.org/t/p/w500/${this._movie.poster_path}`;

        const getColor = (vote) => {
            if (vote >= 8) {
                return "green";
            } else if (vote >= 5) {
                return "orange";
            } else {
                return "red";
            }
        };

        this.shadowDOM.innerHTML = `
        <style>
        

        .item {
            width: 22rem;
            height: 90%;
            margin: 2rem;
            background-color: #0B2447;
            box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
            border-radius: 3px;
            position: relative;
            overflow: hidden;
        }

        .item img {
            max-width: 100%;
        }

        .item>.description {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 1.5rem;
            font-size: 0.8rem;
            color: #F6F1E9;
        }

        .item>.description h2 {
            font-weight: 700;
            width: 85%;
        }

        .item>.description span {
            background: rgba(0, 0, 0, 0.5);
            color: #FFD93D;
            width: 3rem;
            height: 2rem;
            padding: 0.3rem 0.6rem;
            font-size: 1.3rem;
            font-weight: 700;
            text-align: center;
        }

        .item>.description span.green{
            color: lightgreen;
        }

        .item>.description span.orange{
            color: orange;
        }

        .item>.description span.red{
            color: red;
        }

        .overview{
            position:absolute;
            left:0;
            right:0;
            bottom:0;
            background-color: #fff;
            padding: 1rem;
            max-height: 100%;
            transform:translateY(101%);
            transition:transform 0.3s ease-in;
        }

        .item:hover .overview {
            transform:translateY(0)
        }
        </style>

            <div class="item">
                <img src="${imgUrl}">
                <div class="description">
                    <h2>
                        ${title}
                    </h2>
                    <span class="${getColor(rating)}">
                        ${rating}
                    </span>
                </div>
                <div class="overview"> 
                    <h3>
                        Overview
                    </h3>
                    <p>
                        ${overview}
                    </p>
                </div>
            </div>
        </div>
        `;
    }
}
customElements.define("movie-item", movieItem);