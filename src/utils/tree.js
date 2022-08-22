export const getTargetItem = (initialTree, targetId, payload) => {
  const tree = JSON.parse(JSON.stringify(initialTree));

  const handleTreeItem = (item) => {
    item.forEach((el) => {
      if (el.id === targetId) {
        if ('children' in el) {
          el.children.push(payload);
        } else {
          el.children = [payload];
        }
      } else if (el.children) {
        handleTreeItem(el.children, targetId, payload);
      }
    });
  };

  handleTreeItem(tree, targetId, payload);

  return tree;
};

export const replaceItemInTree = (initialTree, targetId, payload) => {
  const tree = JSON.parse(JSON.stringify(initialTree));

  const handleTreeItem = (item) => {
    item.forEach((el) => {
      if (el.id === targetId) {
        item = { ...item, label: payload.label };
      } else {
        handleTreeItem(el.children, targetId, payload);
      }
    });
  };

  handleTreeItem(tree, targetId, payload);

  return tree;
};
