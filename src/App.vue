<template>
  <div class="container">
    <tree-group :tree-data="data" />
  </div>
</template>

<script>

import TreeGroup from '@/components/TreeGroup.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: { TreeGroup },
  computed: {
    ...mapState({ data: (state) => state.tree }),
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Kanit', sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
