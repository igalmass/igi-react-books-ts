import {VoicemailModel} from '../components/voicemail/models/VoicemailModel';
import ActionTypes from './ActionTypes';


const initialState = {
    allVoicemails: [] as VoicemailModel[]
}

const voicemailReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ActionTypes.ADD_VOICEMAIL:
            return {
                ...state,
                allVoicemails: state.allVoicemails.concat(action.newVoicemail)
            }
        case ActionTypes.DELETE_VOICEMAIL:
            return {
                ...state,
                allVoicemails: state.allVoicemails.filter((cur: VoicemailModel) => cur.id !== action.id)
            };

        default:
            return state;
    }
}

export default voicemailReducer;