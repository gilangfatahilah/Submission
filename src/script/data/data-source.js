class DataSource {
    static searchMovie(keyword) {
        return fetch(`http://www.omdbapi.com/?t=${keyword}&apikey=f9d9ced5`)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                if (data.Response) {
                    return Promise.resolve(data.Response);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
}

export default DataSource;