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
  beforeCreate() {
    console.log(this);
    //this.startGame();
    this.$store.dispatch('game/startGame')
  },
  computed: {
    ...mapGetters({
      tableSize: "config/tableSize",
      playingField: "game/playingField"
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
  border: 1px solid red;
  position: relative;
  margin-bottom: 10px;
}
</style>