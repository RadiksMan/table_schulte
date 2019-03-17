<template>
  <transition name="cell-transition">
    <div class="table-cell" :style="cell.stylePosition"></div>
  </transition>
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

<style scoped>
.table-cell {
  outline: 1px solid green;
  position: absolute;
  /* transition: all ease 1s 3s; */
  width: 0;
  height: 0;
}
.cell-transition-enter-active {
  transition: all .3s ease;
}
.cell-transition-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
</style>