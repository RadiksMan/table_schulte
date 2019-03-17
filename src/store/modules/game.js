import * as types from '../mutation-types';
import {createPlayingField} from '../../services/gameService'

const state = {
    isGame:false,
    isGameReady:false,
    isPrepareGame:false,

    playingField:[],
}

const mutations = {
    [types.GAME_PREPEARE](state){
        state.isPrepareGame = true;
        state.isGame = false;
    },
    [types.GAME_CREATE_GAME_FIELD](state,playingField){
        state.playingField = playingField;
    }
}

const actions = {
    async startGame({commit,dispatch}){
        commit(types.GAME_PREPEARE);
        await dispatch('prepareGame');
    },
    prepareGame({commit,dispatch,state,rootState }){
        return new Promise((resolve) => {
            const { tableHeight, tableWidth, tableSelectedSize } = rootState.config;
            const playingField = createPlayingField({
                rows:tableSelectedSize,
                cells:tableSelectedSize,
                tableWidth,
                tableHeight
            })
            //console.log('playingField',playingField)
            commit(types.GAME_CREATE_GAME_FIELD,playingField)
        })
    }
}

const getters = {
    playingField: state => state.playingField
}

const gameModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default gameModule;
