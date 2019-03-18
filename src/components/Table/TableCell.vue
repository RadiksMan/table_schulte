<template>
  <!-- <transition name="cell-transition"> -->
    <div class="table-cell" :style="cell.stylePosition"></div>
  <!-- </transition> -->
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TableCell",
  props: ["cell"],
  data() {
    return {};
  },
  computed: {},
  methods: {
    ...mapActions({})
  }
};
</script>

<style scoped lang="scss">
.table-cell {
  outline: 1px solid green;
  position: absolute;
  width: 0;
  height: 0;
  left:50%;
  top:50%;
  transition:all ease 1s 1s;
}

// .cell-transition-enter,
// .cell-transition-leave-to {
//   // opacity: 0;
// }
// .cell-transition-enter-to,
// .cell-transition-leave {
//   //opacity: 1;
// }
// .cell-transition-enter-active,
// .cell-transition-leave-active {
//   transition: all .8s ease;
// }
</style>