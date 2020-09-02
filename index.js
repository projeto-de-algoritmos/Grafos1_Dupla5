const Graph = require('./classes/graph');

const graph = new Graph();
graph.addNode("Brasilia", -21, -43);
graph.addNode("Ceilandia", -22, -43);
graph.addNode("Tagua", -21, -44);
graph.addNode("Samamba", -20, -44);
graph.addNode("Gama", -10, -430);

graph.addEdge("Brasilia", "Ceilandia", 25);
graph.addEdge("Brasilia", "Tagua", 20);
graph.addEdge("Brasilia", "Gama", 26);
graph.addEdge("Ceilandia", "Tagua", 5);
graph.addEdge("Samamba", "Tagua", 10);

console.log(JSON.stringify(graph));
