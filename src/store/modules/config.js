import * as types from '../mutation-types'
/* eslint-disable */
const state = {
    tableWidth: 500,
    tableHeight: 500,
    tableSizes: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    tableSelectedSize: 3,
    //cellWidth:500 / 3,
    //cellHeight: 500 / 3,
}

const mutations = {
    [types.UPDATE_TABLE_DIMENSION](state,payload){
        state.tableWidth = payload.width
        state.tableHeight = payload.height
    },
    [types.UPDATE_TABLE_SIZE](state,payload){
        state.tableSelectedSize = payload
        //state.cellWidth = state.tableWidth / payload
        //state.cellHeight = state.tableHeight / payload
    }
}

const actions = {
    updateTableSize({ commit,dispatch,state }, tableSelectedSize){
        const {tableSelectedSize:prevTableSelectedSize} = state;
        commit(types.UPDATE_TABLE_SIZE, tableSelectedSize)
        if(tableSelectedSize === prevTableSelectedSize){
            dispatch('game/shakeGameField', null, { root: true })
        }else {
            dispatch('game/startGame', null, { root: true })
        }
    },
    initTableDimension({commit}){
        const width = document.body.clientWidth - 30;
        const height = document.body.clientHeight - 30;
        commit(types.UPDATE_TABLE_DIMENSION, {width,height})
    },
    updateTableDimension({commit,dispatch}, {width,height}){
        commit(types.UPDATE_TABLE_DIMENSION, {width,height})
        dispatch('game/resizeGameField', null, { root: true })
    }
}

const getters = {
    tableSize: state => ({width:state.tableWidth, height:state.tableHeight}),
    //cellSize: state => ({width:state.cellWidth, height:state.cellHeight}),
    tableSelectedSize: state => state.tableSelectedSize,
    tableSizes: state => state.tableSizes,
}

const configModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default configModule;
