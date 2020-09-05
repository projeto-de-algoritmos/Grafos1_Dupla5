const Graph = require('./classes/graph');
const cities = require('./data/cities');
const routes = require('./data/citiesRoutes');
const BFS = require('./searchs/BFS');


function calcDistance(graph){    
    let keys = [ '_distance', '_time' ]; // key[0] = distance, key[1] = time
    let totalDistance = graph._nodes[0]._edges[0]._weight[keys[0]];
    let totalTime = graph._nodes[0]._edges[0]._weight[keys[1]];
}

const graph = new Graph();

cities.forEach(city => {
    graph.addNode(city[0], city[1], city[2]);
});
routes.forEach(route => {
    graph.addEdge(route[0], route[1], route[2]);
});


let taguaGraph = BFS(graph, 'Taguatinga');
// graph.showGraph();
// taguaGraph.showGraph();
calcDistance(graph);