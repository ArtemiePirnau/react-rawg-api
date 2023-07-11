import axios from "axios"
export default class RawgService {
    _apiBase = "https://api.rawg.io/api"
    _apiKey = "6ea7cccd9c744715b1125a6d369f89e6"

    async getUrl(url) {
        const res = await axios.get(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Couldn't fetch ${url}, received status = ${res.status}`)
        }

        return await res.json();
    }

    getAllGames = async () => {
        const res = await this.getUrl(`/games/${this._apiKey}`);
        return res;
    }
}