<template>
  <div class="center" v-if="isLoading">
    <Spinner></Spinner>
  </div>
  <div v-else class="node--serie--presentation program">
    <player
      :license-server="licenseServer"
      :manifest-url="manifestUrl"
      :poster-url="posterUrl"
      @onPlayerClick="playerClick" />
    <div v-if="isOverlayDisplayed">
      <div class="overlay"></div>
      <div class="serie-over-pres">
        <div class="container">
          <h1>
            <span>{{ serieData.title }}</span>
          </h1>
          <ul>
            <li>
              <span>{{ pitch }} </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Contents, Detail } from '@/models/detail';
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { Serie } from '@/models/serie';
import { SerieData } from '@/models/serieData';
import DetailService from '@/services/detail/detailService';
import LocalStorageUtil from '@/utils/localStorage.util';
import Player from '@/components/player/player.vue';
import Spinner from '@/components/spinner/spinner.vue';

@Options({
  components: { Player, Spinner },
  data: () => {
    return {
      searchListData: Object as PropType<Serie>,
      licenseServer: 'https://widevine-proxy.appspot.com/proxy',
      manifestUrl:
        'https://bitmovin-a.akamaihd.net/content/MI201109210084_1/mpds/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.mpd',
      posterUrl: '',
      serieData: Object as PropType<SerieData>,
      pitch: '',
      isLoading: false,
      isOverlayDisplayed: true,
    };
  },
  methods: {
    playerClick() {
      this.isOverlayDisplayed = !this.isOverlayDisplayed;
    },

    getPitch(contents: Contents): string {
      let pitch = 'NO PITCH';
      if (contents.pitch) {
        pitch = contents.pitch;
      }
      if (contents.seasons) {
        pitch =
          contents.seasons.length > 0
            ? contents.seasons[0].pitch
            : 'NO PITCH FOR THIS SEASON';
      }
      return pitch;
    },
  },
  props: {
    detaillink: { required: true },
  },
  mounted() {
    const data: SerieData = LocalStorageUtil.getData('serieData');
    this.serieData = { ...data };
    this.isLoading = true;
    this.posterUrl = this.serieData.fullscreenimageurl;
    DetailService.getByDetaillink(
      this.detaillink.type,
      this.detaillink.value
    ).then((detail: Detail) => {
      this.pitch = this.getPitch(detail.contents);
      data.pitch = this.getPitch(detail.contents);
      this.isLoading = false;
      LocalStorageUtil.storeData(data, 'serieData');
    });
  },
})
export default class SerieDetail extends Vue {}
</script>
<style lang="css" scoped>
@import '../../style/card.css';
@import '../../style/center.css';

.node--serie--presentation {
  font-family: HelveticaNeueLTStd-Roman, sans-serif;
  position: relative;
  width: 100%;
  background-position: top;
  background-size: cover;
  color: #fff;
}

.node--serie--presentation .overlay {
  position: absolute;
  bottom: 0;
  width: 80%;
  height: 30%;
  background: linear-gradient(180deg, transparent, #000);
  margin-left: 10%;
}

.serie-over-pres {
  position: absolute;
  width: 100%;
  bottom: 10px;
}

.node--serie--presentation .serie-over-pres .container {
  width: 80%;
  margin: 0 auto;
  height: 40%;
}

.container h1 {
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 0;
  text-transform: uppercase;
  display: flex;
  padding-left: 1rem;
}

#app .card {
  max-width: 800px;
  margin: 12px;
}

.serie-over-pres {
  position: absolute;
  width: 100%;
  bottom: 10px;
}

.container ul li {
  margin-right: 50px;
  font-size: 1rem;
  font-weight: 400;
  text-align: start;
}

.container ul {
  padding-left: 1rem;
  list-style-type: none;
  display: flex;
}
</style>
