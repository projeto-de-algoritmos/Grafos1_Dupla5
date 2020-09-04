
// for every vertex s of G not explored yet
//    do Enqueue(S,s);
//    mark vertex s as visited
//    while S is not empty do
//        u ← Dequeue(S);
//        For each v in Adj[u] then
//            if v is unexplored then
//                mark edge (v,u) as tree edge
//                mark vertex v as visited
//                Enqueue(S,v)

function bfs(graph, root) {
    let nodesLen = {};
    
    //for (var i = 0; i < graph.length; i++) {
    //  nodesLen[i] = Infinity;
    //}
    nodesLen[root] = 0; 
    
    let queue = [root]; 
    let nodeIndex; 
    
    while (queue.length != 0) {
      
      nodeIndex = queue.shift();
      
      let currentNode = graph[nodeIndex];  // nós conectados com o nó corente
      let neighborIndex = []; 
      let index = currentNode.indexOf(1); 

      while (index != -1) {
        neighborIndex.push(index); 
        index = currentNode.indexOf(1, index + 1); 
      }
      
      for (let j = 0; j < neighborIndex.length; j++) {
        if (nodesLen[neighborIndex[j]] == Infinity) {
          nodesLen[neighborIndex[j]] = nodesLen[nodeIndex] + 1;
          queue.push(neighborIndex[j]); 
        }
      }
    }
    return nodesLen;
  };