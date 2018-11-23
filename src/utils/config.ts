import qs from "qs";
import { AxiosResponse, AxiosRequestConfig } from "axios";

const axiosConfig: AxiosRequestConfig = {
  baseURL: "/",
  // 请求后的数据处理
  transformResponse: [
    function(data: AxiosResponse) {
      return data;
    }
  ],
  // 查询对象序列化函数
  paramsSerializer: function(params: any) {
    return qs.stringify(params);
  },
  // 超时设置s
  timeout: 30000,
  // 跨域是否带Token
  withCredentials: true,
  responseType: "json"
};

export default axiosConfig;
