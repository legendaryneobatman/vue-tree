<template>
<div class="button-group">
  <button
    v-for="({handler, iconPath, id}) in buttonData"
    :key="id"
    class="button-group__button"
    @click="handler"
  >
    <img class="button-group__img" :src="iconPath" alt=""/>
  </button>
</div>
</template>

<script>
export default {
  name: 'UiButtonGroup',
  props: {
    buttonData: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
  .button-group {
    display: flex;
    align-items: center;
    margin: 0 24px 0 auto;

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

    &__img {
      width: 20px;
      height: 20px;
    }
  }
</style>
