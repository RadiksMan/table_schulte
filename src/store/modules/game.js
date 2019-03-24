import * as types from '../mutation-types';
import { createPlayingField, recalculatePlayingFieldPosition, getRightAnswersValue } from '../../services/gameService'

const state = {
    isGame: false,
    isGameReady: false,
    isPrepareGame: false,
    isGameFinished: false,

    playingField: [],
    rightAnswersVal: [],
    userAnswer:null,
}

const mutations = {
    [types.GAME_PREPEARE](state) {
        state.isPrepareGame = true;
        state.isGame = false;
        state.isGameFinished = false;
    },
    [types.GAME_CREATE_GAME_FIELD](state, playingField) {
        state.playingField = playingField;
    },
    [types.GAME_RECALCULATE_GAME_FIELD](state, playingField) {
        state.playingField = playingField;
    },
    [types.GAME_READY](state) {
        state.isPrepareGame = false;
        state.isGameReady = true;
    },
    [types.GAME_END](state) {
        state.isGameReady = false;
        state.isGameFinished = true;
    },
    [types.GAME_GET_RIGHT_ANSWERS_VALUE](state, rightAnswersVal) {
       // console.log('rightAnswersVal', rightAnswersVal)
        state.rightAnswersVal = rightAnswersVal;
    },
    [types.GAME_GET_NEXT_RIGHT_ANSWER](state){
        state.rightAnswersVal.shift();
        //console.log('state.rightAnswersVal',state.rightAnswersVal)
    },
    [types.GAME_USER_ANSWER](state,userAnswer){
        //console.log('userAnswer',userAnswer)
        state.userAnswer = userAnswer;
    }
}

const actions = {
    async startGame({ commit, dispatch }) {
        commit(types.GAME_PREPEARE);
        await dispatch('prepareGame');
        commit(types.GAME_READY);
        //
        //commit(types.GAME_START);
    },
    async endGame({ commit }) {
        commit(types.GAME_END);
    },
    prepareGame({ commit, dispatch, state, rootState }) {
        // console.log('state', state)
        // console.log('rootState', rootState)
        return new Promise((resolve) => {
            commit(types.GAME_CREATE_GAME_FIELD, {})
            const { tableHeight, tableWidth, tableSelectedSize } = rootState.config;
            const playingField = createPlayingField({
                rows: tableSelectedSize,
                cells: tableSelectedSize,
                tableWidth,
                tableHeight
            })
            commit(types.GAME_CREATE_GAME_FIELD, playingField)
            commit(types.GAME_GET_RIGHT_ANSWERS_VALUE, getRightAnswersValue(tableSelectedSize))
            resolve();
        })
    },
    shakeGameField({ commit, dispatch, state, rootState }) {
        commit(types.GAME_PREPEARE);
        const { playingField } = state;
        const { tableHeight, tableWidth, tableSelectedSize } = rootState.config;
        const recalculatedPlayingField = recalculatePlayingFieldPosition(playingField, {
            rows: tableSelectedSize,
            cells: tableSelectedSize,
            tableWidth,
            tableHeight
        })
        commit(types.GAME_RECALCULATE_GAME_FIELD, recalculatedPlayingField)
        commit(types.GAME_GET_RIGHT_ANSWERS_VALUE, getRightAnswersValue(tableSelectedSize))
        commit(types.GAME_READY);
    },
    userChoiseValue({ commit, dispatch, state, rootState }, field) {
        //console.log('field', field)
        const { rightAnswersVal, userAnswer:prevUserAnswer } = state;
        const rightAnswer = rightAnswersVal[0];
        const answerIsCorrect = rightAnswer === field.value;
        const userAnswer = {
            ...field,
            answerIsCorrect,
            timeStamp:+ new Date(),
        };
        //check if user choise same val
        // if(prevUserAnswer && prevUserAnswer.value === field.value){
        //     return false;
        // }
        if(answerIsCorrect) commit(types.GAME_GET_NEXT_RIGHT_ANSWER)
        commit(types.GAME_USER_ANSWER,userAnswer)
    },
}

const getters = {
    playingField: state => state.playingField,
    userAnswer: state => state.userAnswer,
}

const gameModule = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

export default gameModule;
