import { getValidatorToken,login,getMenuByToken,getCustomerInfo,getQutationCustomerList,getSalesmanList } from '@/api/user'
import config from '@/config'
import { setLocalStorage,getLocalStorage,JSONParseLocalStorage} from '@/libs/util'
const serverBusyTips="执行失败，请稍后再试！"


export default {
    state:{
	  userObjInfo:getLocalStorage("userObj")=='' ? '' :JSONParseLocalStorage("userObj"),
      token: getLocalStorage("TOKEN")==''?'':JSONParseLocalStorage("TOKEN"),
	 // token: uni.getStorageSync("TOKEN")==''?'':JSON.parse(uni.getStorageSync("TOKEN")),
      menuList:getLocalStorage("menuList")==''?'':JSONParseLocalStorage("menuList"),
	  userInfo:getLocalStorage("userInfo")=='' ? '' :JSONParseLocalStorage("userInfo"),
    },
    getters:{
	  userObjInfo_getters:(state, getters)=>{
		  return state.userObjInfo
		},
      menuList_getters:(state, getters)=>{
        return state.menuList
      },
	  userInfo_getters:(state, getters)=>{
	    return state.userInfo
	  },
    },
    mutations: {
		setUserObjInfo(state, token) {
		   state.userObjInfo = token
		   uni.setStorageSync("userObj",JSON.stringify(token)) 
		},
        setLoginToken(state, token) {
          //debugger
           state.token = token
          //setLocalStorage('TOKEN',token)
		  uni.setStorageSync("TOKEN",JSON.stringify(token)) 
        },
        //保存菜單
        setMenuList(state,data){
          state.menuList = data
          //setLocalStorage('menuList',data)
		  uni.setStorageSync("menuList",JSON.stringify(data)) 
        },
		//保存用户信息
		setUserInfo(state,data){
		  state.userInfo = data
		  uni.setStorageSync("userInfo",JSON.stringify(data)) 
		}
    },
    actions: {
      /**
      * @description 获取随机码，用于MD5 加密
      * @params { username }
      */
      getValidatorToken_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
			 // debugger
            getValidatorToken(params).then(res=>{
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
               
                resolve(data)
              }
              else
              {
                reject(data.msg)
              } 
            }).catch(err=>{
              //console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      },
     /**
      * @description 用户登录
      * @params { username, password }
      */
      Login_action({commit}, params) {
       // debugger
        return new Promise((resolve, reject) => {
          try {
            login(params).then(res => {
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              
              if(data.success)
              {
                //commit('setToken',data.data.token)
                resolve(data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err => {
              //console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
      
         
        })
      },
      /**
      * @description 根据token,获取用户功能菜单
      * @params { token } 
      */
      getMenuByToken_action({commit},params){
        return new Promise((resolve,reject)=>{
          try {
            getMenuByToken(params).then(res=>{
             // debugger
              const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
              if(data.success)
              {
                commit('setMenuList',data.data)
                resolve(data.data)
              }
              else
              {
                reject(data.msg)
              }
            }).catch(err=>{
              //console.error(JSON.stringify(err))
              reject(serverBusyTips)
            })
          } catch (error) {
            reject(serverBusyTips+error)
          }
        })
      },
        /**
      * @description 获取过滤选择用户列表
      * @params { token } 
      */
     getCustomerInfo_action({commit},params){
      return new Promise((resolve,reject)=>{
        try {
          getCustomerInfo(params).then(res=>{
           // debugger
            const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
            if(data.success)
            {
              resolve(data.data)
            }
            else
            {
              reject(data.msg)
            }
          }).catch(err=>{
            //console.error(JSON.stringify(err))
            reject(serverBusyTips)
          })
        } catch (error) {
          reject(serverBusyTips+error)
        }
      })
    },
	
	/**
	  * @description 获取过滤选择用户列表
	  * @params { token } 
	  */
	 getQutationCustomerList_action({commit},params){
	  return new Promise((resolve,reject)=>{
	    try {
	      getQutationCustomerList(params).then(res=>{
	       // debugger
	        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
	        if(data.success)
	        {
	          resolve(data.data)
	        }
	        else
	        {
	          reject(data.msg)
	        }
	      }).catch(err=>{
	        //console.error(JSON.stringify(err))
	        reject(serverBusyTips)
	      })
	    } catch (error) {
	      reject(serverBusyTips+error)
	    }
	  })
	},
	
	/**
	  * @description 业务员列表
	  * @params { w_OptType } w_OptType(类型)0:业务员
	  */
	 getSalesmanList_action({commit},params){
	  return new Promise((resolve,reject)=>{
	    try {
	      getSalesmanList(params).then(res=>{
	       // debugger
	        const data = config.isRunApp ? res : res.data //因为web 浏览器 多封装了一层 data 包裹
	        if(data.success)
	        {
	          resolve(data.data)
	        }
	        else
	        {
	          reject(data.msg)
	        }
	      }).catch(err=>{
	        //console.error(JSON.stringify(err))
	        reject(serverBusyTips)
	      })
	    } catch (error) {
	      reject(serverBusyTips+error)
	    }
	  })
	},

    }
  }