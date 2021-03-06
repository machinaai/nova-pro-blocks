import { Effect, Reducer } from 'umi';
import { DetailsModel } from '../interfaces/detailsModel.interface';

export interface StateModel {
    details?:DetailsModel,
    numberPhone?:string,    
    flowComplete?: boolean    
}

interface Model {
    namespace:string;
    state:StateModel;
    reducers: {
        setDetails:Reducer<StateModel>,
        setNumberPhone:Reducer<StateModel>,
        setFlowStatus:Reducer<StateModel>
    }
}

const Model:Model ={
    namespace: 'BLOCK_NAME_CAMEL_CASE',
    state: {
        flowComplete: false
      },
    reducers:{
        setDetails(state:any,{payload}:any){         
            return{
                ...state,
                details:payload
            }
        },
        setNumberPhone(state:any,{payload}:any){         
            return{
                ...state,
                details:payload
            }
        },
        setFlowStatus(state:any,{payload}:any){
            return{
                ...state,
                flowComplete:payload
            }
        }
    }


}

export default Model;