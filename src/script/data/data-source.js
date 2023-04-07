class DataSource {
    static searchMovie(keyword) {
        return fetch(`http://www.omdbapi.com/?s=${keyword}&apikey=f9d9ced5`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.Search) {
                    return Promise.resolve(data.Search);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;