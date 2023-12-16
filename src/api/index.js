import netWork from "../utils/service";

//请求头像
export const getHeaderPic = ()=> netWork.get(`/otherApi/getHeaderPicApi`)

// 请求姓名
export const getName = ()=> netWork.get(`/otherApi/getRandomNameApi`)