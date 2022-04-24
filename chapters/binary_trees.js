
class BinaryTree {
    constructor(value) {
        this.key = value;
        this.leftChild = null;
        this.rightChild = null;
    }

    insertLeft(value) {
        if (!this.leftChild) {
            this.leftChild = new BinaryTree(value);
        } else {
            const binTree = new BinaryTree(value);
            binTree.leftChild = this.leftChild;
            this.leftChild = binTree;
        }
    }

    insertRight(value) {
        if (!this.rightChild) {
            this.rightChild = new BinaryTree(value);
        } else {
            const binTree = new BinaryTree(value);
            binTree.rightChild = this.rightChild;
            this.rightChild = binTree;
        }
    }

    breadthFirstSearch(n) {
        let current = [this];
        let next = [];
        while (current) {
            for (const node of current) {
                if (node.key === n) {
                    return true;
                }
                if (node.leftChild) {
                    next.push(node.leftChild);
                }
                if (node.rightChild) {
                    next.push(node.rightChild);
                }
            }
            current = next;
            next = [];
        }
        return false;
    }

    // invert a binary tree - swap left nodes with right nodes
    invert() {
        let current = [this];
        let next = [];
        while (current) {
            for (const node of current) {
                if (node.leftChild) {
                    next.push(node.leftChild);
                }
                if (node.rightChild) {
                    next.push(node.rightChild);
                }
                let temp = node.leftChild;
                node.leftChild = node.rightChild;
                node.rightChild = temp;
            }
            current = next;
            next = [];
        }
    }
}

const binaryTree = new BinaryTree(1);
binaryTree.insertLeft(2);
binaryTree.insertRight(3);
binaryTree.insertLeft(4);
binaryTree.leftChild.insertRight(6);
binaryTree.insertRight(5);
console.log(binaryTree)

// depth first search (preorder, postorder, inorder)
function preorder(tree) {
    if (tree) {
        console.log(tree.key);
        preorder(tree.leftChild);
        preorder(tree.rightChild);
    }
}

function postorder(tree) {
    if (tree) {
        postorder(tree.leftChild);
        postorder(tree.rightChild);
        console.log(tree.key);
    }
}

function inorder(tree) {
    if (tree) {
        inorder(tree.leftChild);
        console.log(tree.key);
        inorder(tree.rightChild);
    }
}


preorder(binaryTree);