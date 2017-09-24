const Node = require('./node');

class LinkedList {
    constructor(length=0) 
    {this.length=length;
        this._head=new Node();
        this._tail=new Node();}

    append(data) {
        if(this.length==0) {
            this._head.data=data;
            this._tail=this._head;
            this.length++;
        } else {
            this.t=new Node();
            this.t.data=data;
            this.t.prev=this._tail;
            this._tail.next=this.t;
            this._tail=this.t;
            this.length++;
        }
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        var k=0,h=this._head;
        while(k!=index) {
            h=h.next;
            k++;
        }
        return h.data;
    }

    insertAt(index, data) {
        if(this.length==0) {
            this._head.data=data;
            this._tail=this._head;
            return this;
        }
        var k=0,h=this._head;
        while(k!=index) {
            h=h.next;
            k++;
        }
        h.data=data;
        return this;
    }

    isEmpty() {
        if(this.length==0) return true; else return false;
    }

    clear() {
        this._head.data=this._head.next=this._head.prev=null;
        this._tail.data=this._tail.next=this._tail.prev=null;
        this.length=0;
        return this;
    }

    deleteAt(index) {
        if(this.length==1) {
            this._head.data=null;
            this._tail.data=null;
            this.length=0;
            return this;
        }
        var k=0,h=this._head;
        while(k!=index) {
            h=h.next;
            k++;
        }
        h.prev.next=h.next;
        h.next.prev=h.prev;
        h=null;
        this.length--;
        return this;
    }

    reverse() {
        if(this.length==1) {
            return this;
        }
        var k=0;
        this.t=this._tail;
        this.head1=new Node();
        this.head1.data=this._tail.data;
        this.h=this.head1;
        while(k<this.length-1) {
            this.h.next=new Node();
            this.h.next.prev=this.h;
            this.h.next.data=this.t.prev.data;
            this.h=this.h.next;
            this.t=this.t.prev;
            k++;
        }
        this._head=this.head1;
        this._tail=this.t;
        return this;
    }

    indexOf(data) {
        var k=0,h=this._head, b;
        while(k<this.length) {
            if(h.data==data) return k;
            h=h.next;
            k++;
        }
        return -1;
    }
}

module.exports = LinkedList;
