<template>
  <transition :name="'transition-'+answerIsCorrect" >
    <div
      class="table-cell"
      :class="[isResizing ? 'resizing' : '',]"
      :style="cell.stylePosition"
      @click="userChoiseValue(cell)"
      :key="timeStamp"
    >
      <div class="table-cell-wrap">
        {{cell.value}}
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "TableCell",
  props: ["cell","userAnswerAction","isResizing"],
  data() {
    return {
      answerIsCorrect:null,
      timeStamp:null,
    };
  },
  watch: {
    userAnswerAction(answer, oldAnswer) {
      if(this.cell.value === answer.value){
        this.answerIsCorrect = answer.answerIsCorrect;
        this.timeStamp = answer.timeStamp;
      }
    },
  },
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    ...mapActions({
      userChoiseValue:"game/userChoiseValue"
    })
  }
};
</script>

<style scoped lang="scss">
.table-cell {
  position: absolute;
  font-size: 2.5vw;
  transition:left ease 1s,top ease 1s;
  backface-visibility: hidden;
  &.resizing{
    transition:none;
    will-change: position,width,height;
  }
}
.table-cell-wrap{
  flex:1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background:white;
  border:1px solid green;
  padding: 1px;
  transition:background ease .3s;
}

.transition-true-enter,
.transition-true-leave-to {
  .table-cell-wrap{
    background:white;
  }
}
.transition-true-enter-to,
.transition-true-leave {
  .table-cell-wrap{
    background:greenyellow;
  }
}
.transition-false-enter,
.transition-false-leave-to {
  animation: shake .82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  z-index: 12;
}
.transition-false-enter-to,
.transition-false-leave {
    animation: shake .82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  z-index: 12;
}
// .transition-true-enter-active,
// .transition-true-leave-active {
//   transition: background .8s ease;
// }
@keyframes shake {
  10%, 90% {
    transform: translate3d(-2px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(3px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-5px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(5px, 0, 0);
  }
}
</style>