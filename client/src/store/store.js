import create from 'zustand'
import {devtools,persist} from 'zustand/middleware'
let store = (set)=>({
  urlDet : '',
    Det:'',
  setDet : (setDet) => set(state=>({Det:[{img:setDet.img,category:setDet.category,header:setDet.header}]})),
  apiDet : (apiDet) => set((state)=>({urlDet:[{category:apiDet.category,num:apiDet.num,diff:apiDet.diff}]}))
})
store = devtools(store)
store = persist(store)
const useStore = create(devtools(store))

export default useStore