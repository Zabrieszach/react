import axios from "axios";
const API_KEY = 'AIzaSyBOReu2M28Kny1MEwFLqe6jdmDzdquAMkk';



export default axios.create ({
  baseURL: "https://www.googleapis.com/youtube/v3/",
  params: {
    part: "snippet",
    maxResults: 10,
    key: API_KEY
  }
});