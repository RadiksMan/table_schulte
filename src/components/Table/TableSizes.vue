<template>
    <ul class="table-size-holder">
        <li
            v-for="(size, index) in tableSizes"
            :key="index"
            :class="size === tableSelectedSize ? 'active' : ''"
            class="table-size-item"
        >
            <span @click="updateTableSize(size)">{{size}}x{{size}}</span>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions  } from 'vuex';

export default {
  name: 'TableSizes',
  computed: {
    ...mapGetters({
      tableSelectedSize: 'config/tableSelectedSize',
      tableSizes: 'config/tableSizes',
    })
  },
  methods: {
    ...mapActions({
      updateTableSize: 'config/updateTableSize'
    })
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
    .table-size-holder{list-style-type: none;padding:0;margin:0;display: flex;justify-content: center;}
    .table-size-item{margin:0 5px;cursor:pointer;
        &.active{font-weight: bold;}
    }
</style>