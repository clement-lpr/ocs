<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { Title } from '@/models/title';
import SerieDetail from '@/components/details/serieDetail.vue';

@Options({
  components: {
    SerieDetail,
  },
  data: () => {
    return { title: Object as PropType<Title> };
  },
  created() {
    const title: Title = {
      type: this.$route.params.type,
      value: this.$route.params.value,
    };
    this.title = { ...title };
  },
})
export default class Details extends Vue {}
</script>
<template>
  <SerieDetail :detaillink="title"></SerieDetail>
</template>
