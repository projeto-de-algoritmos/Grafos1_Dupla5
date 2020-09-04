const Graph = require('./classes/graph');


function calcDistance(graph){    
    let keys = [ '_distance', '_time' ]; // key[0] = distance, key[1] = time
    let totalDistance = graph._nodes[0]._edges[0]._weight[keys[0]];
    let totalTime = graph._nodes[0]._edges[0]._weight[keys[1]];
}

const graph = new Graph();

graph.addNode("Taguatinga", 12, 46);
graph.addNode("Ceilandia", 15, 48);
graph.addNode("Samambaia", 15, 48);
graph.addNode("Vicente Pires", -10, -430);
graph.addNode("Aguas Claras", -10, -430);
graph.addNode("Cruzeiro Novo", -10, -430);
graph.addNode("Brazlandia", -10, -430);
graph.addNode("Nucleo Bandeirante", -10, -430);
graph.addNode("Riacho Fundo I", -10, -430);
graph.addNode("Riacho Fundo II", -10, -430);
graph.addNode("Arniqueiras", -10, -430);
graph.addNode("Guara", -10, -430);
graph.addNode("Candangolandia", -10, -430);
graph.addNode("Park Way", -10, -430);
graph.addNode("Recanto das Emas", -10, -430);
graph.addNode("Gama", -10, -430);
graph.addNode("Santa Maria", -10, -430);
graph.addNode("Sudoeste", -10, -430);
graph.addNode("Sia", -10, -430);
graph.addNode("Sobradinho", -10, -430);
graph.addNode("Asa Norte", -21, -43);
graph.addNode("Asa Sul", -10, -430);
graph.addNode("Eixo Monumental", -10, -430);
graph.addNode("Lago Paranoa", -10, -430);
graph.addNode("Jardim Botanico", -10, -430);
graph.addNode("Planaltina", -10, -430);
graph.addNode("Sol Nascente", -10, -430);

graph.addEdge("Taguatinga", "Aguas Claras", {_distance: 6.9, _time: 13});
graph.addEdge("Taguatinga", "Ceilandia", {_distance: 7, _time: 13});
graph.addEdge("Taguatinga", "Vicente Pires", {_distance: 6.4, _time: 13});
graph.addEdge("Taguatinga", "Riacho Fundo I", {_distance: 12, _time: 18});
graph.addEdge("Taguatinga", "Recanto das Emas", {_distance: 16, _time: 23});
graph.addEdge("Taguatinga", "Arniqueiras", {_distance: 13, _time: 18});
graph.addEdge("Taguatinga", "Brazlandia", {_distance: 31, _time: 33});
graph.addEdge("Taguatinga", "Samambaia", {_distance: 12, _time: 14});
graph.addEdge("Vicente Pires", "Guara", {_distance: 8.1, _time: 12});
graph.addEdge("Vicente Pires", "Aguas Claras", {_distance: 6, _time: 11});
graph.addEdge("Aguas Claras", "Arniqueiras", {_distance: 5.8, _time: 9});
graph.addEdge("Aguas Claras", "Guara", {_distance: 15, _time: 10});
graph.addEdge("Aguas Claras", "Nucleo Bandeirante", {_distance: 10, _time: 15});
graph.addEdge("Guara", "Sia", {_distance: 7.3, _time: 9});
graph.addEdge("Guara", "Asa Sul", {_distance: 13, _time: 13});
graph.addEdge("Guara", "Candangolandia", {_distance: 7.9, _time: 11});
graph.addEdge("Sia", "Cruzeiro Novo", {_distance: 4.1, _time: 6});
graph.addEdge("Cruzeiro Novo", "Sudoeste", {_distance: 3.1, _time: 7});
graph.addEdge("Riacho Fundo I", "Riacho Fundo II", {_distance: 5.9, _time: 10});
graph.addEdge("Riacho Fundo I", "Nucleo Bandeirante", {_distance: 6.4, _time: 9});
graph.addEdge("Riacho Fundo I", "Arniqueiras", {_distance: 5.8, _time: 12});
graph.addEdge("Ceilandia", "Samambaia", {_distance: 7.5, _time: 11});
graph.addEdge("Ceilandia", "Brazlandia", {_distance: 28, _time: 31});
graph.addEdge("Ceilandia", "Recanto das Emas", {_distance: 18, _time: 22});
graph.addEdge("Ceilandia", "Sol Nascente", {_distance: 3.5, _time: 8});
graph.addEdge("Recanto das Emas", "Riacho Fundo II", {_distance: 2.5, _time: 4});
graph.addEdge("Recanto das Emas", "Gama", {_distance: 17, _time: 19});
graph.addEdge("Gama", "Santa Maria", {_distance: 9.3, _time: 13});
graph.addEdge("Gama", "Park Way", {_distance: 19, _time: 17});
graph.addEdge("Park Way", "Candangolandia", {_distance: 4.5, _time: 5});
graph.addEdge("Candangolandia", "Asa Sul", {_distance: 12, _time: 12});
graph.addEdge("Candangolandia", "Nucleo Bandeirante", {_distance: 3.3, _time: 5});
graph.addEdge("Asa Norte", "Eixo Monumental", {_distance: 4.2, _time: 4});
graph.addEdge("Asa Norte", "Sobradinho", {_distance: 22, _time: 23});
graph.addEdge("Sobradinho", "Planaltina", {_distance: 23, _time: 24});
graph.addEdge("Asa Sul", "Eixo Monumental", {_distance: 3.8, _time: 4});
graph.addEdge("Eixo Monumental", "Lago Paranoa", {_distance: 9.7, _time: 15});
graph.addEdge("Lago Paranoa", "Jardim Botanico", {_distance: 14, _time: 24});


graph.showGraph();
calcDistance(graph);