<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { PropType } from 'vue';
import { Serie } from '@/models/serie';
import SearchBar from '@/components/search/searchBar.vue';
import SerieList from '@/components/search/serieList.vue';

@Options({
  components: {
    SerieList,
    SearchBar,
  },
  data: () => {
    return {
      searchListData: Object as PropType<Serie>,
      isLoading: Boolean(false),
    };
  },
  methods: {
    onSearchChange(series: Serie, isLoading: boolean) {
      this.searchListData = series;
      (this.isLoading as boolean) = isLoading;
    },
  },
})
export default class Search extends Vue {}
</script>
<template>
  <SearchBar @searchChange="onSearchChange"></SearchBar>
  <SerieList :searchList="searchListData" :isLoading="isLoading"></SerieList>
</template>
