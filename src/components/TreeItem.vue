<template>
  <li class="tree-item">
    <div class="tree-item__wrapper">
      <div class="tree-item__content"
      >
        <img
          @click="handleItemClick"
          :src="`${itemImage(item)}`"
          class="tree-item__icon"
          alt=""
        />
        <div v-show="!isEdit" class="tree-item__label">{{ item.label }}</div>
        <input
          v-show="isEdit"
          class="tree-item__input"
          :value="inputValue || item.label"
          @input="updateInputValue($event.target.value)"
        />
      </div>
      <div class="tree-item__buttons">
        <button v-show="item.children" class="tree-item__button" @click="addFolder(item.id)">
          <img src="../assets/add-folder.svg" alt="">
        </button>
        <button v-show="item.children" class="tree-item__button" @click="addFile(item.id)">
          <img src="../assets/add-file.svg" alt="">
        </button>
        <button class="tree-item__button" @click="editItem(item.id, $event)">
          <img :src="editIcon()" alt="">
        </button>
      </div>
    </div>
  </li>
  <div v-show="isSubItemsVisible" class="tree-item__group">
    <Transition>
      <ul class="tree-item__subtree">
        <tree-item
          v-for="item in item.children"
          :item="item"
          :key="item.id"
        />
      </ul>
    </Transition>
  </div>
</template>

<script>
import editFile from '@/assets/edit.svg';
import save from '@/assets/save.svg';

export default {
  name: 'TreeItem',
  props: {
    item: {
      type: Object,
    },
  },
  data: () => ({
    isSubItemsVisible: true,
    isEdit: false,
    inputValue: '',
  }),
  methods: {
    handleItemClick() {
      this.isSubItemsVisible = !this.isSubItemsVisible;
    },
    addFolder(folderId) {
      this.$store.dispatch('addFolder', folderId);
    },
    addFile(folderId) {
      this.$store.dispatch('addFile', folderId);
    },
    editItem(itemId) {
      this.renameItem(itemId, this.inputValue);
      this.isEdit = !this.isEdit;
    },
    renameItem(itemId, label) {
      this.$store.dispatch('renameItem', { itemId, label });
    },
    updateInputValue(value) {
      this.inputValue = value;
    },
    itemImage(item) {
      let iconName = '';
      if (item?.children && !this.isSubItemsVisible) {
        iconName = 'folder';
      }
      if (item?.children && this.isSubItemsVisible) {
        iconName = 'open-folder';
      }
      if (!item?.children) {
        iconName = 'file';
      }
      return require(`../assets/${iconName}.svg`);
    },
    editIcon() {
      if (this.isEdit) {
        return save;
      }
      return editFile;
    },
  },
};
</script>

<style lang="scss" scoped>
.tree-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  width: 100%;
  padding-left: 20px;
  outline: 0;

  &:hover {
    background-color: rgba(162, 36, 36, 0.08);
  }

  &__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  &__content {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  &__children {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 600px;
    padding: 0;
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 20px 0 auto;

  }

  img {
    width: 20px;
    height: 20px;
  }

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    padding: 0;
    background: none;
    width: 24px;
    height: 24px;
    transition: all 0.25s ease-in-out;

    &:hover {
      border: 2px solid #c4c4c4;
      border-radius: 4px;
      transform: scale(110%);
    }

    &:active {
      border-radius: 50%;
      background-color: #a5a5a5;
    }
  }

  &__input {
    background-color: inherit;
    border: none;
    outline: none;
    padding: 2px;
    font-family: inherit;
    font-size: inherit;
    border-bottom: 1px solid #c4c4c4;

    &:focus-visible {
    }
  }

  &__label {
    display: flex;
    width: 100%;
  }

  &__icon {
    width: 20px;
  }
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  padding-bottom: 20px;
  transition: all 0.5s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  padding-bottom: 0;
}
</style>
