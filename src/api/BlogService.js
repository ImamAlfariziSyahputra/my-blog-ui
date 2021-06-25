import Api from './Api';
const END_POINT = 'blogs';

export default {
  all() {
    return Api.get(END_POINT);
  },
  show(blogId) {
    return Api.get(`${END_POINT}/${blogId}`);
  },
  store(payload) {
    return Api.post(END_POINT, payload);
  },
  update(payload) {
    return Api.put(`${END_POINT}/${payload.id}`, payload);
  },
  delete(blogId) {
    return Api.delete(`${END_POINT}/${blogId}`, );
  },
}