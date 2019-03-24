<template>
  <div class="table-holder">
    <div
      class="table"
      :style="{width:tableSize.width+'px',height:tableSize.height+'px'}"
    >
      <div v-if="playingField.length">
        <TableCell
          v-for="cell in playingField"
          :key="cell.value"
          :cell="cell"
          :userAnswerAction="userAnswer"
        ></TableCell>
      </div>

    </div>
    <TableSizes/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TableSizes from "./TableSizes.vue";
import TableCell from './TableCell.vue'

export default {
  name: "Table",
  components: {
    TableSizes,
    TableCell
  },
  data(){
    return {}
  },
  beforeMount() {
    //console.log(this);
    this.$store.dispatch('game/startGame')
  },
  computed: {
    ...mapGetters({
      tableSize: "config/tableSize",
      playingField: "game/playingField",
      userAnswer: "game/userAnswer",
    })
  },
  methods:{
    ...mapActions({

    })
  }
};
</script>

<style scoped>
.table-holder {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.table {
  position: relative;
  margin-bottom: 10px;
}
</style>