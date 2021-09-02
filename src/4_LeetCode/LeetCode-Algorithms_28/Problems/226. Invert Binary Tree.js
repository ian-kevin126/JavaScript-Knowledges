var invertTree = function(root) {
    if (root) {
      swap(root);
      invertTree(root.left);
      invertTree(root.right);
    }
    return root;
  };
  
  var swap = function (node) {
    let left = node.left;
    node.left = node.right;
    node.right = left;
  };