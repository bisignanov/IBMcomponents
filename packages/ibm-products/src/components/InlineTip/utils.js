export const getComponentText = (reactNode) => {
  const tmpChildren = reactNode?.props?.children || undefined;

  if (Array.isArray(reactNode)) {
    let joinedNodes = [];
    reactNode.forEach((node) => {
      if (typeof node === 'object') {
        joinedNodes.push(getComponentText(node));
      } else if (typeof node === 'string') {
        joinedNodes.push(node);
      }
    });
    return joinedNodes.join(' ');
  }
  if (tmpChildren === undefined) {
    if (typeof reactNode === 'string') {
      return reactNode;
    } else {
      return ' ';
    }
  }
  if (typeof tmpChildren === 'object') {
    return getComponentText(reactNode.props.children);
  }
  if (typeof tmpChildren === 'string') {
    return reactNode.props.children;
  }
};
