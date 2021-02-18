class Node {
    constructor(i, j, g, h, parent) {
        this.i = i;
        this.j = j;
        this.f = g + h;
        this.g = g;
        this.h = h;
        this.parent = parent;
    }
}

export default Node;