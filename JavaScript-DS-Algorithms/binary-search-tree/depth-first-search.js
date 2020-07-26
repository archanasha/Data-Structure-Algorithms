class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new TreeNode(value);
        // if the root node is empty then add the new node directly to root
        if (!this.root) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    //left
                    if (!currentNode.left) {
                        // if no elements on the left
                        currentNode.left = newNode;
                        return this;
                    }
                    // if elements on left and continue 
                    currentNode = currentNode.left
                } else {
                    // right
                    if (!currentNode.right) {
                        // if no elements on the right
                        currentNode.right = newNode;
                        return this;
                    }
                    // if elements on right and continue 
                    currentNode = currentNode.right;
                }
            }
        }
    }

    loookup(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (value < currentNode.value) {
                return currentNode.left;
            } else if (value > currentNode.value) {
                return currentNode.right;
            } else if (value === currentNode.value) {
                return currentNode;
            }
        }
        return false;
    }

    remove(value) {
        if (!this.root) {
            return false;
        }
        let currentNode = this.root;
        let parentNode = null;
        while (currentNode) {
            if (value < currentNode.value) {
                parentNode = currentNode;
                return currentNode.left;
            } else if (value > currentNode.value) {
                parentNode = currentNode;
                return currentNode.right;
            } else if (value === currentNode.value) {
                // match found

                // 1.check if no right child
                if (currentNode.right === null) {

                    if (parentNode === null) {
                        this.root = currentNode.left;
                    } else {
                        //if parent > current value, make current left child a child of parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.left;

                            //if parent < current value, make left child a right child of parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.left;
                        }
                    }

                    // 2.Right child which doesnt have a left child
                } else if (currentNode.right.left === null) {
                    currentNode.right.left = currentNode.left;
                    if (parentNode === null) {
                        this.root = currentNode.right;
                    } else {

                        //if parent > current, make right child of the left the parent
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = currentNode.right;

                            //if parent < current, make right child a right child of the parent
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = currentNode.right;
                        }
                    }
                    // 3.Right child that has a left child
                } else {
                    //find the Right child's left most child
                    let leftmost = currentNode.right.left;
                    let leftmostParent = currentNode.right;
                    while (leftmost.left !== null) {
                        leftmostParent = leftmost;
                        leftmost = leftmost.left;
                    }

                    //Parent's left subtree is now leftmost's right subtree
                    leftmostParent.left = leftmost.right;
                    leftmost.left = currentNode.left;
                    leftmost.right = currentNode.right;

                    if (parentNode === null) {
                        this.root = leftmost;
                    } else {
                        if (currentNode.value < parentNode.value) {
                            parentNode.left = leftmost;
                        } else if (currentNode.value > parentNode.value) {
                            parentNode.right = leftmost;
                        }
                    }
                }
                return true;
            }
        }
    }

    //     9
    //  4     20
    //1  6  15  170
    // Breadth First Search: traversal - [9, 4, 20, 1, 6, 15, 170];
    breadthFirstSearch(value) {
        let currentNode = this.root;
        let list = [];
        let queue = [];
        queue.push(currentNode);

        while (queue.length > 0) {
            currentNode = queue.shift();
            list.push(currentNode.value);
            if (currentNode.left) {
                queue.push(currentNode.left);
            }
            if (currentNode.right) {
                queue.push(currentNode.right);
            }
        }

        return list;
    }

    breadthFirstSearchRecurrsive(queue, list) {
        if (!queue.length) {
            return list;
        }

        let currentNode = queue.shift();
        list.push(currentNode.value);
        if (currentNode.left) {
            queue.push(currentNode.left);
        }
        if (currentNode.right) {
            queue.push(currentNode.right);
        }
        return this.breadthFirstSearchRecurrsive(queue, list);
    }

    DFTPreOrder(currentNode, list) {
        return traversePreOrder(this.root, []);
    }
    DFTPostOrder() {
        return traversePostOrder(this.root, []);
    }
    DFTInOrder() {
        return traverseInOrder(this.root, []);
    }
}

//     9
//  4     20
//1  6  15  170

// DFSin [ 1, 4, 6, 9, 15, 20, 170 ]
function traverseInOrder(node, list) {
    if (node.left) {
        traverseInOrder(node.left, list);
    }
    list.push(node.value);
    if (node.right) {
        traverseInOrder(node.right, list);
    }
    return list;
}

// DFSpre [ 9, 4, 1, 6, 20, 15, 170 ]
function traversePreOrder(node, list) {
    list.push(node.value);
    if (node.left) {
        traversePreOrder(node.left, list);
    }
    if (node.right) {
        traversePreOrder(node.right, list);
    }
    return list;
}

// DFSpost [ 1, 6, 4, 15, 170, 20, 9 ]
function traversePostOrder(node, list) {
    if (node.left) {
        traversePostOrder(node.left, list);
    }
    if (node.right) {
        traversePostOrder(node.right, list);
    }
    list.push(node.value);
    return list;
}

const binaryTree = new BinaryTree();
binaryTree.insert(9);
binaryTree.insert(4)
binaryTree.insert(6)
binaryTree.insert(20)
binaryTree.insert(170)
binaryTree.insert(15)
binaryTree.insert(1)
// binaryTree.breadthFirstSearch(9);
console.log("binaryTree:: ", binaryTree);

// console.log("binaryTree lookup:: ", binaryTree.loookup(9));
// console.log("binaryTree lookup:: ", binaryTree.loookup(6));
// console.log("binaryTree lookup:: ", binaryTree.loookup(170));
console.log('DFSpre', binaryTree.DFTPreOrder());
console.log('DFSin', binaryTree.DFTInOrder());
console.log('DFSpost', binaryTree.DFTPostOrder());



  //     9
  //  4     20
  //1  6  15  170
  // Breadth First Search: traversal - [9, 4, 20, 1, 6, 15, 170];
  // Depth First Search: traversal - [9, 4, 1, 6, 20, 15, 170];
