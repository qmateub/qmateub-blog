export default function(posts) {
  return posts.reduce((acc, node) => {
    return {
      ...acc,
      [node.node.slug]: acc[node.node.slug]
        ? {
          ...acc[node.node.slug],
          [node.node['node_locale']]: node.node,
        }
        : { [node.node['node_locale']]: node.node },
    };
  }, {});
}
