import { createStore } from 'vuex';
import { v4 as uuidv4 } from 'uuid';
import { getTargetItem, replaceItemInTree } from '@/utils/tree';

const storeState = {
  tree: [
    {
      id: uuidv4(),
      label: 'folder level 1 1',
      isSubItemsVisible: true,
      children: [
        {
          id: uuidv4(),
          label: 'folder level 2',
          isSubItemsVisible: true,
          children: [
            { id: uuidv4(), label: 'file level 3' },
            { id: uuidv4(), label: 'file level 3' },
          ],
        },
        {
          id: uuidv4(),
          label: 'file level 2 1',
          isSubItemsVisible: true,
        },
      ],
    },
  ],
};

const mutations = {
  ADD_TREE_FOLDER(state, payload) {
    const emptyFolder = {
      id: uuidv4(),
      label: 'new folder',
      isSubItemsVisible: true,
      children: [],
    };
    state.tree = getTargetItem(state.tree, payload, emptyFolder);
  },
  ADD_TREE_FILE(state, payload) {
    const emptyFile = {
      id: uuidv4(),
      label: 'new file',
      isSubItemsVisible: true,
    };

    state.tree = getTargetItem(state.tree, payload, emptyFile);
  },
  RENAME_TREE_ITEM(state, { itemId, label }) {
    // eslint-disable-next-line no-unused-vars
    const getMembers = (members) => {
      let children = [];

      return members.map((m) => {
        if (m.children && m.children.length) {
          children = [...children, ...m.children];
        }
        return m;
      }).concat(children.length ? getMembers(children) : children);
    };

    const targetItem = {
      ...getMembers(state.tree)
        .find((el) => el.id === itemId),
      label,
    };

    state.tree = replaceItemInTree(state.tree, itemId, targetItem);
  },
};

const actions = {
  addFolder(context, itemId) {
    context.commit('ADD_TREE_FOLDER', itemId);
  },
  addFile(context, itemId) {
    context.commit('ADD_TREE_FILE', itemId);
  },

  renameItem(context, payload) {
    context.commit('RENAME_TREE_ITEM', payload);
  },
};

export default createStore({
  state: storeState,
  mutations,
  actions,
});
