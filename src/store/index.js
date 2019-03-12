import Vue from 'vue';
import Vuex from 'vuex';

import game from './modules/game';
import config from './modules/config';
import stats from './modules/stats';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    game,
    config,
    stats
  }
});
