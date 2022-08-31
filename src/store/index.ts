import { createStore } from 'vuex'
import { Maps } from '@/types/utils'
import app from './modules/app'
interface Module {
  [k: string]: Maps
}
const modules:Module = {
  app
}
console.log(modules)
// 导入所有的vuex模块
// const storeModels = import.meta.glob('./modules/*.ts')
// console.log(storeModels)
// const storeArr:string[] = []
// for (const i in storeModels) {
//   storeArr.push(i)
// }
// const modules = storeModels.keys().reduce((module:module, modulePath:string) => {
//   // 解析文件名
//   const moduleName:string = modulePath.replace(/^.\/(.*)\.ts/, '$1')
//   const value = storeModels(modulePath)
//   module[moduleName] = value.default
//   return module
// }, {})
export default createStore({
  modules: {
    ...modules
  }
})
