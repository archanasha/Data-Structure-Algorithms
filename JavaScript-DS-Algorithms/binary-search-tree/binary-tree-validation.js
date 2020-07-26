// // Given a binary tree, determine if it is a valid binary search tree (BST).

// // Assume a BST is defined as follows:

// // The left subtree of a node contains only nodes with keys less than the node's key.
// // The right subtree of a node contains only nodes with keys greater than the node's key.
// // Both the left and right subtrees must also be binary search trees.

// Example 1:
//     2
//    / \
//   1   3

// Input: [2,1,3]
// Output: true


// Example 2:
//     5
//    / \
//   1   4
//      / \
//     3   6

// Input: [5,1,4,null,null,3,6]
// Output: false
// Explanation: The root node's value is 5 but its right child's value is 4.


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
}
//     5
//    /  \
//   1    4
//  / \  / \
// 2   7 3   6

//     9
//  4     20
//1  6  15  170
// [5,1,4,null,null,3,6]
const binaryTree = new BinaryTree();
binaryTree.insert(5);
binaryTree.insert(1)
binaryTree.insert(null)
binaryTree.insert(4)
binaryTree.insert(null)
// binaryTree.insert(6)
// binaryTree.insert(3)
// binaryTree.insert(2)

// binaryTree.insert(9);
// binaryTree.insert(4)
// binaryTree.insert(6)
// binaryTree.insert(20)
// binaryTree.insert(170)
// binaryTree.insert(15)
// binaryTree.insert(1)

console.log("binaryTree:: ", binaryTree);

var isValidBST = function (root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }

        if ((min && root.val <= min) || (max && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }

        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }

    return helper(root, null, null);
};

// this.isValidBST()