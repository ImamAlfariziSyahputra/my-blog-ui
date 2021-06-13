import Api from '@/api/Api';

export default {
  register(payload) {
    return Api.post('register', payload);
  },
  login(payload) {
    return Api.post('login', payload);
  },
}