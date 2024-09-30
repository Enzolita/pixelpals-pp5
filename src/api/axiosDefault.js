import axios from "axios";

axios.defaults.baseURL = 'https://pixelpals-pp5-ee2d5ecf265c.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true