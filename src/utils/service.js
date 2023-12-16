import axios from "axios";
import {networkConfig} from "../../config/index";
import {addPending, deletePending} from './cancelRequest'
import {store} from "../store/index";

const useProjectStatusStore = store.useProjectStatusStore()
const netWork = axios.create(networkConfig)

// 添加请求拦截器
netWork.interceptors.request.use(function (config) {
  addPending(config)
  useProjectStatusStore.setLoadingStatus(true)
  if (Reflect.has(config, '_useFormFlag')) {
    config.headers['content-type'] = 'application/x-www-form-urlencoded';
    config.data = qs.stringify(config.data);
    
  } else if (Reflect.has(config, '_fileFlag')) {
    config.headers['Accept'] = '*/*';
    config.headers['content-type'] = 'multipart/form-data';
    
  } else {
    config.headers['content-type'] = 'application/json;charset=UTF-8';
  }
  return config;
}, function (error) {
  useProjectStatusStore.setLoadingStatus(false)
  return Promise.reject(error);
});

// 添加响应拦截器
netWork.interceptors.response.use(function (response) {
  deletePending(response)
  useProjectStatusStore.setLoadingStatus(false)
  let { data } = response
  
  if (data instanceof Blob) {
    return data
  }
  
  return data;
}, function (error) {
  deletePending(error)
  useProjectStatusStore.setLoadingStatus(false)
  return Promise.reject(error);
});

export default  netWork