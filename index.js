const Graph = require('./classes/graph');



function calcDistance(graph){    
    let keys = [ '_distance', '_time' ]; // key[0] = distance, key[1] = time
    let totalDistance = graph._nodes[0]._edges[0]._weight[keys[0]];
    let totalTime = graph._nodes[0]._edges[0]._weight[keys[1]];
}

const graph = new Graph();
graph.addNode("Brasilia", -21, -43);
graph.addNode("Ceilandia", -22, -43);
graph.addNode("Tagua", -21, -44);
graph.addNode("Samamba", -20, -44);
graph.addNode("Gama", -10, -430);

graph.addEdge("Brasilia", "Tagua", {_distance: 25, _time: 50});
graph.addEdge("Brasilia", "Gama", {_distance: 30, _time: 60});
graph.addEdge("Ceilandia", "Tagua", {_distance: 5, _time: 10});
graph.addEdge("Samamba", "Tagua", {_distance: 10, _time: 20});

graph.showGraph();
calcDistance(graph);