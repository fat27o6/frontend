import axios from "axios"
// const API_BASE_URL = "http://localhost:8000";
const API_BASE_URL = "https://movies-reviews-s3l8.onrender.com";

class MovieDataService{
  getAll(page = 0){
    return axios.get(`${API_BASE_URL}/movies?page=${page}`)
    //return axios.get(`http://localhost:5000/movies?`, {params: {page: page}})
  }
  get(id){
    return axios.get(`${API_BASE_URL}/movies/${id}`)
  }
  find(query, by = "title", page = 0){
    return axios.get(`${API_BASE_URL}/movies?${by}=${query}&page=${page}`)
  }
  createReview(data){
    return axios.post(`${API_BASE_URL}/reviews`, data)
  }
  updateReview(data){
    return axios.put(`${API_BASE_URL}/reviews`, data)
  }
  deleteReview(data){
    return axios.delete(`${API_BASE_URL}/reviews`, data)
  }
  getRatings(){
    return axios.get(`${API_BASE_URL}/movies/ratings`)
  }
}
const movieDataServiceInstance = new MovieDataService()

export default movieDataServiceInstance