import axios from "axios";

export default class GalleryService {
  static async getAll(limit = 100) {
    const response = await axios.get('https://jsonplaceholder.typicode.com/photos', {
      params: {
        _limit: limit
      }
    })
    return response
  }
}