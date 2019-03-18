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
        state.tableWidth = payload.tableWidth
        state.tableHeight = payload.tableHeight
    },
    [types.UPDATE_TABLE_SIZE](state,payload){
        state.tableSelectedSize = payload
        //state.cellWidth = state.tableWidth / payload
        //state.cellHeight = state.tableHeight / payload
    }
}

const actions = {
    updateTableSize({ commit,dispatch }, tableSelectedSize){
        commit(types.UPDATE_TABLE_SIZE, tableSelectedSize)
        dispatch('game/startGame', null, { root: true })
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
