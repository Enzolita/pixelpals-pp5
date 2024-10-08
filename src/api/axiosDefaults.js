import axios from "axios";

axios.defaults.baseURL = 'https://pixelpals-backend-49bb71efec81.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true

export const axiosReq = axios.create();
export const axiosRes = axios.create();

export const setAuthorizationHeader = (data) => {
  if (data?.access) {
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    axiosReq.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
    axiosRes.defaults.headers.common["Authorization"] = `Bearer ${data.access}`;
  } else {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    delete axiosReq.defaults.headers.common["Authorization"];
    delete axiosRes.defaults.headers.common["Authorization"];
  }
};