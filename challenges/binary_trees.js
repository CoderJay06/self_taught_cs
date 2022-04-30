/*
    Challenege:
        1. add a method hasLeafNodes to binary tree. It should return 
           true if has no leaf nodes and false if not.
        2. Invert a binary tree using depth first traversal
*/

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

    // invert a binary tree using depth first traversal
    invert() {
        return this._depthFirstInvert();
    }

    _depthFirstInvert() {
        if (this.leftChild) {
            this.leftChild._depthFirstInvert();
        }

        // invert (swap nodes)
        const tempNode = this.leftChild;
        this.leftChild = this.rightChild;
        this.rightChild = tempNode;

        if (this.rightChild) {
            this.rightChild._depthFirstInvert();
        }
    }

    hasLeafNodes() {
        let current = [this];
        let next = [];
        while (current.length) {
            let leaf = true;
            for (const node of current) {
                if (node.leftChild) {
                    next.push(node.leftChild);
                    leaf = true;
                }
                if (node.rightChild) {
                    next.push(node.rightChild);
                    leaf = true;
                }
            }
            if (leaf) {
                return  true;
            }
            current = next;
            next = [];
        }
        return false;
    }
}

const binaryTree = new BinaryTree(1);
binaryTree.insertLeft(2);
binaryTree.insertRight(3);
binaryTree.insertLeft(4);
binaryTree.leftChild.insertRight(6);
binaryTree.insertRight(5);
console.log(binaryTree);

console.log('Hash leaf nodes: ', binaryTree.hasLeafNodes());

binaryTree.invert();
console.log('After depth first invert:');
console.log(binaryTree);