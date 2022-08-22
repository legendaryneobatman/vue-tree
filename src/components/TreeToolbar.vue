<template>
  <div class="tree-toolbar">
    <div class="tree-toolbar__label">Название</div>
    <div class="tree-toolbar__buttons">
      <ui-button-group :button-data="buttonData"/>
    </div>
  </div>
</template>

<script>
import UiButtonGroup from '@/components/UiButtonGroup.vue';
import addFolder from '@/assets/add-folder.svg';
import addFile from '@/assets/add-file.svg';

export default {
  name: 'TreeToolbar',
  components: { UiButtonGroup },
  data() {
    return {
      buttonData: [
        {
          id: 1,
          iconPath: addFolder,
          handler: this.addFolder,
        },
        {
          id: 2,
          iconPath: addFile,
          handler: this.addFolder,
        },
      ],
    };
  },
  methods: {
    addFolder() {
      console.log('add folder');
    },
    addFile() {
      console.log('add file');
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid black;
}
</style>
