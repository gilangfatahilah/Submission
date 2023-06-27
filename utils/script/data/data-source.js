class DataSource {
    static searchMovie(keyword) {
        const apiKey = '1db0dfdba4f3c8e77c0dbf81d12f62e9';
        const url = 'https://api.themoviedb.org/3';

        return fetch(`${url}/search/movie?api_key=${apiKey}&query=${keyword}&page=1`)
            .then((response) => {
                return response.json();
            })
            .then((responseJson) => {
                if (responseJson.results) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;