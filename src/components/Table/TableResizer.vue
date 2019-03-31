<template>
  <div style="border: 1px solid red; position: relative;" class="table-holder">

    <vue-draggable-resizable
      :w="tableDemensions.width"
      :h="tableDemensions.height"
      @dragging="onDrag"
      @resizing="onResize"
      @resizestop="onResizeStop"
      :parent="true"
    >
      <Table :isResizing="isResizing" />
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
      isResizing:false,
      x: 0,
      y: 0
    };
  },
  mounted(){
    console.log(this)
  },
  methods: {
    onResize: function(x, y, width, height) {
      this.isResizing = true;
      this.x = x;
      this.y = y;
      this.$store.dispatch('config/updateTableDimension',{width,height})
      // this.width = width;
      // this.height = height;
    },
    onResizeStop: function (x, y, width, height) {
      this.isResizing = false
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
    ...mapGetters({
      tableDemensions:"config/tableSize"
    })
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