import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:8080' });

API.interceptors.request.use((req) => {
  if (localStorage.getItem('tokens')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('tokens')).token}`;
  }

  return req;
});

export const getCartItems = () => API.get('/api/user/getcartitems');
export const addtocart = (data) => API.post('/api/user/cart/addtocart',data);
export const removeItem = (data) => API.post ('/api/user/cart/removeItem',data);
export const signin = (formData) => API.post('/api/signIn', formData);
export const signup = (formData) => API.post('/api/user/signUp', formData);
export const clearCart=()=>API.post('/api/user/cart/removeCart');