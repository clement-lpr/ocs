<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import PlayButton from '@/components/playButton/playButton.vue';
import ShakaUtil from '@/utils/shaka.util';

@Options({
  props: {
    manifestUrl: {
      type: String,
      required: true,
    },
    licenseServer: {
      type: String,
      required: true,
    },
    posterUrl: {
      type: String,
      required: false,
      default: '',
    },
  },
  components: {
    PlayButton,
  },
  data() {
    return {
      isVideoDisplayed: false,
    };
  },
  emits: ['onPlayerClick'],
  methods: {
    onPlayClick(
      videoContainer: HTMLElement,
      videoPlayer: HTMLElement,
      licenseServer: string,
      manifestUrl: string
    ) {
      ShakaUtil.loadPlayer(
        videoContainer,
        videoPlayer,
        licenseServer,
        manifestUrl
      );
      this.isVideoDisplayed = true;
      this.$emit('onPlayerClick', false);
    },
  },
})
export default class Player extends Vue {}
</script>

<template>
  <div class="contrainer" v-show="!isVideoDisplayed">
    <img class="fitImg" :src="posterUrl" alt="" />
    <div class="centerButton">
      <PlayButton
        id="playButton"
        @click="
          onPlayClick(
            $refs.videoContainer,
            $refs.player,
            licenseServer,
            manifestUrl
          )
        "></PlayButton>
    </div>
  </div>
  <div v-show="isVideoDisplayed">
    <div ref="videoContainer" class="fitShakkaContainer">
      <video
        style="width: 100%"
        id="posterImage"
        ref="player"
        :poster="posterUrl"
        autoplay></video>
    </div>
  </div>
</template>

<style lang="css" scoped>
@import '../../../node_modules/shaka-player/dist/controls.css';

.fitImg {
  width: 80%;
}

.fitShakkaContainer {
  width: 80%;
  margin-left: 10%;
}

.contrainer {
  position: relative;
}

.centerButton {
  position: absolute;
  cursor: pointer;
  top: calc(50% - (74px / 2));
  left: calc(50% - (74px / 2));
}
</style>
