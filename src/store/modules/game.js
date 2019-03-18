import * as types from '../mutation-types';
import {createPlayingField} from '../../services/gameService'

const state = {
    isGame:false,
    isGameReady:false,
    isPrepareGame:false,
    isGameFinished:false,

    playingField:[],
}

const mutations = {
    [types.GAME_PREPEARE](state){
        state.isPrepareGame = true;
        state.isGame = false;
        state.isGameFinished = false;
    },
    [types.GAME_CREATE_GAME_FIELD](state,playingField){
        state.playingField = playingField;
    },
    [types.GAME_READY](state){
        state.isPrepareGame = false;
        state.isGameReady = true;
    },
    [types.GAME_END](state){
        state.isGameReady = false;
        state.isGameFinished = true;
    }
}

const actions = {
    async startGame({commit,dispatch}){
        commit(types.GAME_PREPEARE);
        await dispatch('prepareGame');
        commit(types.GAME_READY);
        //
        //commit(types.GAME_START);
    },
    async endGame({commit}){
        commit(types.GAME_END);
    },
    prepareGame({commit,dispatch,state,rootState }){
        return new Promise((resolve) => {
            commit(types.GAME_CREATE_GAME_FIELD,{})
            const { tableHeight, tableWidth, tableSelectedSize } = rootState.config;
            console.log('tableSelectedSize',tableSelectedSize)
            const playingField = createPlayingField({
                rows:tableSelectedSize,
                cells:tableSelectedSize,
                tableWidth,
                tableHeight
            })
            //console.log('playingField',playingField)
            commit(types.GAME_CREATE_GAME_FIELD,playingField)
            resolve();
        })
    },
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
