import axios from 'axios';

export default class Search{
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const APP_KEY = 'f785f67a9b61c9ee867a3fcba93fd4a6'
        const APP_ID = '12658d58'
    try {  
        const res = await axios(`https://api.edamam.com/search?q=${this.query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`)
        this.results = res.data.hits
    } catch (error) {
        alert(error)
    }

}

}