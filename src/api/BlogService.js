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
    // get id from formData object
    const id = payload.get('id');
    return Api.put(`${END_POINT}/${id}`, payload);
  },
  delete(payload) {
    // !using { data: payload } to bring payload when axios delete method
    return Api.delete(`${END_POINT}/${payload.id}`, { data: payload});
  },
}