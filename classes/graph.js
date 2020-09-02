const Node = require('./node');
const Edge = require('./edge');

class Graph {
    constructor(){
        this._nodes = [];
    }

    addNode(label, latitude, longitude){
        this._nodes.push(new Node({label, latitude, longitude}))
    }

    addEdge(origin, destination, weight){
        const [originNode] = this._nodes.filter((x) =>  x._label === origin );
        const [destNode] = this._nodes.filter((x) => x._label === destination );
        console.log(originNode);
        originNode._edges.push(new Edge({
            weight,
            destination: destNode,
        }));
    }
}

module.exports = Graph;