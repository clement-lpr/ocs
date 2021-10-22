<script lang="ts">
import { Vue } from 'vue-class-component';

export default class PlayButton extends Vue {}
</script>

<template>
  <svg>
    <circle cx="41" cy="41" r="37" stroke="#fff" stroke-width="1"></circle>
    <polygon
      fill="none"
      stroke="#fff"
      stroke-width="1"
      points="32,25 32,58 60,42"></polygon>
  </svg>
</template>

<style lang="css" scoped>
.polygon {
  position: relative;
  width: 100%;
  height: 100%;
}
.polygon svg {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>
