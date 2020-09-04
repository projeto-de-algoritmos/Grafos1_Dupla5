const Graph = require('./classes/graph');



function calcDistance(graph){    
    let keys = [ '_distance', '_time' ]; // key[0] = distance, key[1] = time
    let totalDistance = graph._nodes[0]._edges[0]._weight[keys[0]];
    let totalTime = graph._nodes[0]._edges[0]._weight[keys[1]];
}

const graph = new Graph();

graph.addNode("Taguatinga", -21, -44);
graph.addNode("Ceilandia", -22, -43);
graph.addNode("Samambaia", -20, -44);
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

graph.addEdge("Taguatinga", "Aguas Claras", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Ceilandia", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Vicente Pires", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Riacho Fundo I", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Recanto das Emas", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Arniqueiras", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Brazlandia", {_distance: 25, _time: 50});
graph.addEdge("Taguatinga", "Samambaia", {_distance: 25, _time: 50});
graph.addEdge("Vicente Pires", "Guara", {_distance: 25, _time: 50});
graph.addEdge("Vicente Pires", "Aguas Claras", {_distance: 25, _time: 50});
graph.addEdge("Aguas Claras", "Arniqueiras", {_distance: 30, _time: 60});
graph.addEdge("Aguas Claras", "Guara", {_distance: 25, _time: 50});
graph.addEdge("Aguas Claras", "Nucleo Bandeirante", {_distance: 25, _time: 50});
graph.addEdge("Guara", "Sia", {_distance: 25, _time: 50});
graph.addEdge("Guara", "Asa Sul", {_distance: 25, _time: 50});
graph.addEdge("Guara", "Candangolandia", {_distance: 25, _time: 50});
graph.addEdge("Sia", "Cruzeiro Novo", {_distance: 25, _time: 50});
graph.addEdge("Cruzeiro Novo", "Sudoeste", {_distance: 25, _time: 50});
graph.addEdge("Riacho Fundo I", "Riacho Fundo II", {_distance: 25, _time: 50});
graph.addEdge("Riacho Fundo I", "Nucleo Bandeirante", {_distance: 25, _time: 50});
graph.addEdge("Riacho Fundo I", "Arniqueiras", {_distance: 25, _time: 50});
graph.addEdge("Ceilandia", "Samambaia", {_distance: 10, _time: 20});
graph.addEdge("Ceilandia", "Brazlandia", {_distance: 10, _time: 20});
graph.addEdge("Ceilandia", "Recanto das Emas", {_distance: 10, _time: 20});
graph.addEdge("Ceilandia", "Sol Nascente", {_distance: 10, _time: 20});
graph.addEdge("Recanto das Emas", "Riacho Fundo II", {_distance: 10, _time: 20});
graph.addEdge("Recanto das Emas", "Gama", {_distance: 10, _time: 20});
graph.addEdge("Gama", "Santa Maria", {_distance: 10, _time: 20});
graph.addEdge("Gama", "Park Way", {_distance: 10, _time: 20});
graph.addEdge("Park Way", "Candangolandia", {_distance: 10, _time: 20});
graph.addEdge("Candangolandia", "Asa Sul", {_distance: 10, _time: 20});
graph.addEdge("Candangolandia", "Nucleo Bandeirante", {_distance: 10, _time: 20});
graph.addEdge("Asa Norte", "Eixo Monumental", {_distance: 10, _time: 20});
graph.addEdge("Asa Norte", "Sobradinho", {_distance: 10, _time: 20});
graph.addEdge("Sobradinho", "Planaltina", {_distance: 10, _time: 20});
graph.addEdge("Asa Sul", "Eixo Monumental", {_distance: 10, _time: 20});
graph.addEdge("Eixo Monumental", "Lago Paranoa", {_distance: 10, _time: 20});
graph.addEdge("Eixo Monumental", "Asa Norte", {_distance: 10, _time: 20});
graph.addEdge("Lago Paranoa", "Jardim Botanico", {_distance: 10, _time: 20});



graph.showGraph();
calcDistance(graph);