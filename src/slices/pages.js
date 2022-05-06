import { createSlice } from "react-context-slices";
import {ALL_MEETUP_PAGE} from '../utils/constants'

export const slice='pages'
const initialState={[slice]:{page:ALL_MEETUP_PAGE}}
const SET='SET'
const reducer=(draft,action)=>{
    switch(action.type){
        case SET:
            draft[slice].page=action.payload
            break
        default:break
    }
}
export const {useValues,useActions}=createSlice(reducer,initialState,slice,(useDispatch)=>()=>{
    const dispatch=useDispatch()
    const set=(page)=>dispatch({type:SET,payload:page})
    return {[slice]:{set}}
})