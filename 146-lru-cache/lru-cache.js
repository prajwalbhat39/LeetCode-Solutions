/**
 * @param {number} capacity
 */

class Node {
    constructor(next, prev, key, val) {
        this.key = key;
        this.next = next;
        this.prev = prev;
        this.val = val;
    }
}

var LRUCache = function(capacity) {
    this.hashMap = new Map();
    this.capacity = capacity;
    this.length = 0;
    this.head = null;
    this.tail = null;
};

var deleteFromHashMap = function(key) {
    this.hashMap.delete(key);
};

var deleteFromList = function(node) {
    if (node === this.head) {
        this.head = node.next;
    }

    if (node === this.tail) {
        this.tail = node.prev;
    }

    if (node.prev) {
        node.prev.next = node.next;
    }

    if (node.next) {
        node.next.prev = node.prev;
    }

    node.next = null;
    node.prev = null;
};

var addToTail = function(node) {
    if (this.tail === null) {
        this.head = node;
        this.tail = node;
    } else {
        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.hashMap.has(key)) {
        return -1;
    }

    let node = this.hashMap.get(key);

    if (node !== this.tail) {
        deleteFromList.call(this, node);
        addToTail.call(this, node);
    }

    return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    if (this.hashMap.has(key)) {

        let node = this.hashMap.get(key);
        node.val = value;

        if (node !== this.tail) {
            deleteFromList.call(this, node);
            addToTail.call(this, node);
        }

        return;
    }

    let node = new Node(null, null, key, value);

    addToTail.call(this, node);
    this.hashMap.set(key, node);
    this.length++;

    if (this.length > this.capacity) {

        let oldNode = this.head;
        let oldKey = oldNode.key;

        deleteFromList.call(this, oldNode);
        deleteFromHashMap.call(this, oldKey);

        this.length--;
    }
};