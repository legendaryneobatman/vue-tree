<template>
    <ul class="tree">
      <tree-toolbar/>
      <tree-item
        v-for="item in treeData"
        :item="item"
        :key="item.id"
      />
    </ul>
</template>

<script>
import TreeItem from '@/components/TreeItem.vue';
import TreeToolbar from '@/components/TreeToolbar.vue';

export default {
  name: 'VueTreeGroup',
  components: {
    TreeToolbar,
    TreeItem,
  },
  props: {
    treeData: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.tree {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  padding: 0;
}
</style>
