import axios from "axios";

const service = axios.create({
  baseURL: "/",
  timeout: 20 * 1000,
  // timeout: 5 * 10,
});

service.interceptors.request.use((config) => {
  return config;
});
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    // 1. cancelRequest(自定义code，见store.clearCancelToken), 代表请求取消
    // 2. axios.isCancel()：true--请求取消  false--请求失败
    //   if (error.message === 'cancelRequest') {
    //     return Promise.reject(error);
    //   }
    //   const message = error.response?.data.translation || '请求失败';
    //   console.log('error', error);
    //   switch (error.response.status) {
    //     case 401:
    //       gotoLogin();
    //       // store.dispatch('user/resetToken').then(() => {
    //       //   router.push({ path: '/' });
    //       // });
    //       // checkCode(message);
    //       break;
    //     case 403:
    //       router.push({ path: '/403' });
    //       break;
    //     case 406:
    //       gotoLogin(true);
    //       // checkCode(message);
    //       break;
    //     default:
    //       checkCode(message);
    //       break;
    //   }
    return Promise.reject(error);
  }
);

export default service;
