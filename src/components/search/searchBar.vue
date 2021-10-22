<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { Serie } from '@/models/serie';
import SerieService from '@/services/serie/serieService';

@Options({
  data() {
    return {
      search: '',
    };
  },
  watch: {
    search(value: string) {
      if (value.length > 1) {
        this.$emit('searchChange', '', true);
        SerieService.getByName(value).then((series: Serie) => {
          this.$emit('searchChange', series, false);
        });
      } else {
        this.$emit('searchChange', '', false);
      }
    },
  },
})
export default class SearchBar extends Vue {}
</script>
<template>
  <div id="app">
    <div class="search-wrapper">
      <input
        id="search"
        name="search"
        type="text"
        v-model="search"
        placeholder="Rechercher un contenu" />
    </div>
  </div>
</template>
<style lang="css" scoped>
#app .search-wrapper {
  position: relative;
}

#app .search-wrapper label {
  position: absolute;
  font-size: 12px;
  color: rgba(0, 0, 0, 0.5);
  top: 8px;
  left: 12px;
  z-index: -1;
  transition: 0.15s all ease-in-out;
}

#app .search-wrapper input {
  border-radius: 50px;
  border: 1px solid #d9d8d8;
  height: 30px;
  line-height: 30px;
  width: 260px;
  padding-left: 15px;
  color: #9b9b9b;
}

#app .search-wrapper input:focus {
  outline: none;
  transform: scale(1.05);
}
</style>
