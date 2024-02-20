class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        this.root = this._insertNode(this.root, value);
    }

    _insertNode(root, value) {
        if (!root) {
            return new Node(value);
        }

        if (value <= root.value) {
            root.left = this._insertNode(root.left, value);
        } else {
            root.right = this._insertNode(root.right, value);
        }

        return root;
    }

    preOrder(root) {
        if (!root) {
            return;
        }
        console.log(root.value);
        this.preOrder(root.left);
        this.preOrder(root.right);
    }

    inOrder(root) {
        if (!root) {
            return;
        }
        this.inOrder(root.left);
        console.log(root.value);
        this.inOrder(root.right);
    }

    postOrder(root) {
        if (!root) {
            return;
        }
        this.postOrder(root.left);
        this.postOrder(root.right);
        console.log(root.value);
    }
}

const tree = new Tree();
tree.insert(8);
tree.insert(3);
tree.insert(10);
tree.insert(1);
tree.insert(6);
tree.insert(14);
tree.insert(4);
tree.insert(7);
tree.insert(13);

tree.postOrder(tree.root);
