import axios from "axios";
export default class RawgService {
    _apiBase = "https://api.rawg.io/api";
    _apiKey = "6ea7cccd9c744715b1125a6d369f89e6";
    async getResource(url) {
        const res = await axios.get(`${this._apiBase}${url}?key=${this._apiKey}`)

        //if (!res.ok) throw new Error(`Could not fetch ${url}, received ${res.status}`)
        return res;
    }
    getAllGames = async () => {
        const res = await this.getResource("/games");
        return res.data.results;
    }
}