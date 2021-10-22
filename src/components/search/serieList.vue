<script lang="ts">
import { Content } from '@/models/content';
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { Serie } from '@/models/serie';
import { SerieData } from '@/models/serieData';
import { Title } from '@/models/title';
import ImgUtil from '@/utils/img.util';
import LocalStorageUtil from '@/utils/localStorage.util';
import Spinner from '@/components/spinner/spinner.vue';
import UrlParserUtil from '@/utils/urlParser.util';

@Options({
  components: {
    Spinner,
  },
  data: () => {
    return { list: Array as PropType<Content[]> };
  },
  props: {
    searchList: {
      default: [],
    },
    isLoading: Boolean,
  },
  watch: {
    searchList: {
      handler(series: Serie) {
        if (series.contents && series.contents.length > 0) {
          const contents = series.contents;
          this.list = contents?.length > 0 ? contents : [];
        } else {
          this.list = [];
        }
      },
    },
  },
  mounted() {
    LocalStorageUtil.removeData('serieData');
  },
  methods: {
    getImgUrl(baseUrl: string) {
      return ImgUtil.getImgUrl(baseUrl);
    },
    onListClick(content: Content) {
      const title: Title = {
        type: UrlParserUtil.getUrlElementByIndex(content.detaillink, 4),
        value: UrlParserUtil.getUrlElementByIndex(content.detaillink, 5),
      };

      const data: SerieData = {
        title: content.title.length === 1 ? content.title[0].value : 'NO TITLE',
        subtitle: content.subtitle,
        fullscreenimageurl: this.getImgUrl(content.fullscreenimageurl),
        detaillink: content.detaillink,
        pitch: '',
      };
      // pass persisted data to the serie detail component
      LocalStorageUtil.storeData(data, 'serieData');
      this.$router.push({
        name: 'Details',
        params: { type: title.type, value: title.value },
      });
    },
  },
})
export default class SerieList extends Vue {}
</script>
<template>
  <section class="content">
    <div class="wrapper" v-if="list" id="table">
      <div class="center" v-if="isLoading">
        <Spinner></Spinner>
      </div>
      <div
        v-else
        class="card"
        v-for="content in list"
        :id="content.id"
        :key="content.id">
        <div
          class="thumb"
          role="article"
          about="/programme/pssuccessiow0139609"
          @click="onListClick(content)">
          <div class="image background-img">
            <picture>
              <source
                :srcset="getImgUrl(content.imageurl)"
                onerror='this.style.display = "none"'
                type="image/jpeg" />
              <img
                loading="lazy"
                :src="getImgUrl(content.imageurl)"
                width="250"
                height="150"
                alt=""
                typeof="foaf:Image" />
            </picture>

            <div class="type">{{ content.subtitle }}</div>
            <h3>
              <span>
                <div v-for="title in content.title" :key="title.value">
                  {{ title.value }}
                </div>
              </span>
            </h3>
          </div>

          <div class="info">
            <h3>
              <span>
                <div v-for="title in content.title" :key="title.value">
                  <small
                    ><strong>{{ title.value }}</strong></small
                  >
                </div>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="css" scoped>
@import '../../style/card.css';
@import '../../style/center.css';
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@200&display=swap');

.image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background-position: 50%;
  background-size: cover;
}

.image:after {
  content: '';
  display: block;
  height: 65px;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(0, 0, 0, 0.43) 42.9%,
    #000
  );
  position: absolute;
  bottom: 0;
  width: 100%;
}

.info {
  position: revert;
  top: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 99999;
  opacity: 0;
  transition: opacity 0.8s;
  text-align: center;
}

h3 {
  font-family: Oswald, sans-serif;
  font-weight: 300;
  color: #fff;
  text-transform: uppercase;
  font-size: 1rem;
  padding: 5px 15px 9px;
  margin: 0;
  z-index: 2;
}

.type {
  color: #fff;
  text-transform: capitalize;
  padding-left: 15px;
  font-size: 0.9rem;
  z-index: 2;
}

.background-img img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  font-family: 'object-fit: cover; object-position: center;';
}
</style>
