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
        return this.shadowDOM.querySelector("#search-input").value;
    }

    render() {
        this.shadowDOM.innerHTML = ` <style>
        .search {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 4rem;
            background-color: #0B2447;
            padding: 1rem 2rem;
        }

        .search>h1 {
            font-size: 1.7rem;
            color: #fff;
        }

        .search>h1>span {
            color: #A5D7E8;
        }

        .search>.search-input>input {
            width: 18rem;
            height: 2.5rem;
            margin: 0.8rem;
            padding: 0.5rem 1rem;
            border-radius: 0.8rem;
            color: #fff;
            background-color: transparent;
            border: 2px solid #19376D;
            font-size: 1rem;
            font-weight: 500;
        }

        .search>.search-input>input:focus {
            outline: none;
            background-color: #19376D;
        }

        .search>.search-input>button {
            width: 5rem;
            height: 2.8rem;
            color: #fff;
            background-color: #A5D7E8;
            border: #19376D;
            border-radius: 0.8rem;
            cursor: pointer;
        }

        @media screen and (max-width: 690px) {
            .search>h1 {
                font-size: 1rem;
            }

            .search>.search-input>input{
                width: 10rem;
                height: 1rem;
                font-size: 1rem;
            }
            .search>.search-input>button{
                width: 4rem;
                height: 2.1rem;
            }
        }
        @media screen and (max-width: 467px) {
            .search>h1 {
                display: none;
            }
            .search>.search-input{
                font-size: 0.8rem;
                margin: 0 auto;
            }
            .search>.search-input>input{
                width: 8rem;
                height: 1rem;   
            }
            .search>.search-input>button{
                width: 3.5rem;
                height: 2.1rem;
            }
        }
        </style>
        <div class="search">
            <h1>Whats<span>Movie</span>?</h1>
            <div class="search-input">
                <input type="text" placeholder="Search Movie " id="search-input" value="Avengers">
                <button id="search-btn" type="submit">Search</button>
            </div>
        </div>`;

        this.shadowDOM
            .querySelector("#search-btn")
            .addEventListener("click", this._clickEvent);
    }
}

customElements.define("search-bar", searchBar);