import storejs from "storejs";
import { message } from "ant-design-vue/es";
import axios from "axios";
import router from "@/router";

const http = axios.create({
  baseURL: process.env.VUE_APP_URL,
  timeout: 3000,
});
http.defaults.withCredentials = true;
http.interceptors.request.use(function (config) {
  const token = storejs.get("token");
  if (token && config.headers) {
    config.headers["ejyy-pc-token"] = token;
  }
  return config;
});

http.interceptors.response.use(
  (response) => {
    const code = response.data.code;
    if (response.status === 200) {
      if (code !== 200) {
        message.error("error");
        return Promise.reject(response);
      } else {
        return Promise.resolve(response.data);
      }
    } else if (response.status === 401) {
      message.warning("没有权限访问!");
      router.push("/login");
      return Promise.reject(response);
    } else {
      console.log("未知错误!");
      return Promise.reject(response);
    }
  },
  (error) => {
    if (error.message.indexOf("timeout") > -1) {
      message.error("请求超时,请稍后再试!");
    }
    if (!window.navigator.onLine) {
      message.error("网络似乎失去了连接,请检查后重试!");
    }
  }
);

export default http;
