import * as types from '../mutation-types'
/* eslint-disable */
const state = {
    tableWidth: 700,
    tableHeight: 700,
    tableMinHeight: 300,
    tableMinWidth: 300,
    tableMaxHeight: 1920,
    tableMaxWidth: 1080,
    tableSizes: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    tableSelectedSize: 5,
    //cellWidth:500 / 3,
    //cellHeight: 500 / 3,
}

const mutations = {
    [types.UPDATE_TABLE_DIMENSION](state,payload){
        if(payload.width && payload.height){
            state.tableWidth = payload.width
            state.tableHeight = payload.height
        }
        if(payload.maxWidth && payload.maxHeight){
            state.tableMaxHeight = payload.maxHeight;
            state.tableMaxWidth = payload.maxWidth;
        }
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
    calcTableDimension({commit}){
        const maxWidth = document.body.clientWidth;
        const maxHeight = document.body.clientHeight;
        const payload = {maxWidth,maxHeight}
        if(maxWidth <=1024){
            payload.width = 450;
            payload.height = 450;
        }
        if(maxWidth <=480){
            payload.width = 300;
            payload.height = 300;
        }
        commit(types.UPDATE_TABLE_DIMENSION, payload)
    },
    updateTableDimension({commit,dispatch}, {width,height}){
        commit(types.UPDATE_TABLE_DIMENSION, {width,height})
        dispatch('game/resizeGameField', null, { root: true })
    }
}

const getters = {
    tableSize: state => ({width:state.tableWidth, height:state.tableHeight}),
    tableVariabilitySizes: state => ({
        minWidth:state.tableMinWidth,
        minHeight:state.tableMinHeight,
        maxWidth:state.tableMaxWidth,
        maxHeight:state.tableMaxWidth
    }),
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
