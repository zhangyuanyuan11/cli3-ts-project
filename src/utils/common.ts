import Cookie from 'js-cookie';
import {cookieExpires} from '@/config'
export const TOKEN_KEY:string = 'token';
export const setToken =(token:string)=>{
    Cookie.set(TOKEN_KEY,token,{expires:cookieExpires || 1})
}
export const getToken=()=>{
    const token = Cookie.get(TOKEN_KEY);
    if(token){
        return token;
    }else{
        return false
    }
}
/**
 * @param{String} url
 * @description 从url中解析参数
 */
export const getParams = (url:string)=>{
    const keyValueArr = url.split('?')[1].split('&');
    let paramsObj:any ={};
    keyValueArr.forEach(item=>{
        const keyValue = item.split('=');
        paramsObj[keyValue[0]] = keyValue[1];
    
    })
    return paramsObj;
}


