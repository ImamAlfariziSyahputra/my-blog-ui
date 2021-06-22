import Api from '@/api/Api';
const END_POINT = 'blogs';

export default {
  store(payload) {
    return Api.post(END_POINT, payload);
  },
}