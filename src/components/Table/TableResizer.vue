<template>
  <div style="border: 1px solid red; position: relative;" class="table-holder">

    <vue-draggable-resizable
      :w="500"
      :h="500"
      @dragging="onDrag"
      @resizing="onResize"
      :parent="true"
    >
      <Table/>
    </vue-draggable-resizable>

    <TableSizes/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import VueDraggableResizable from "vue-draggable-resizable";
import "vue-draggable-resizable/dist/VueDraggableResizable.css";

import Table from "./Table.vue";
import TableSizes from "./TableSizes.vue";

export default {
  name: "TableResizer",
  components: {
    "vue-draggable-resizable": VueDraggableResizable,
    Table,
    TableSizes,
  },
  data: function() {
    return {
      width: 0,
      height: 0,
      x: 0,
      y: 0
    };
  },
  methods: {
    onResize: function(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    }
  },
  beforeMount() {
    //console.log(this);
  },
  computed: {
    ...mapGetters({})
  }
  //   methods:{
  //     ...mapActions({

  //     })
  //   }
};
</script>

<style scoped>
.table-holder {
  width: 100%;
  height: 100%;
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>