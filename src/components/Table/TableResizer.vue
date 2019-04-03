<template>
  <div style="border: 1px solid red; position: relative;" class="table-holder">

    <vue-draggable-resizable
      :w="tableDemensions.width"
      :h="tableDemensions.height"
      :x="x"
      :y="y"
      @dragging="onDrag"
      @resizing="onResize"
      @resizestop="onResizeStop"
      :parent="true"
      :min-width="tableVariabilitySizes.minWidth"
      :min-height="tableVariabilitySizes.minHeight"
      :max-width="tableVariabilitySizes.maxWidth"
      :max-height="tableVariabilitySizes.maxHeight"
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
//import {centerTable} from "../../services/helpers"

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
  created: function () {
    this.centerTable();
    window.addEventListener('resize', this.handleResize)
  },
  beforeDestroy: function () {
    window.removeEventListener('resize', this.handleResize)
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
    },
    onResizeStop: function (x, y, width, height) {
      this.isResizing = false;
    },
    onDrag: function(x, y) {
      this.x = x;
      this.y = y;
    },
    centerTable(){
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const {height:tableHeight,width:tableWidth} = this.tableDemensions;
      const positionLeft = (windowWidth - tableWidth)/2;
      const positionTop = (windowHeight - tableHeight)/2;
      this.x = positionLeft;
      this.y = positionTop;
    },
    handleResize (event) {
      this.centerTable();
    }
  },
  beforeMount() {
    //console.log(this);
  },
  computed: {
    ...mapGetters({
      tableDemensions:"config/tableSize",
      tableVariabilitySizes:"config/tableVariabilitySizes",
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