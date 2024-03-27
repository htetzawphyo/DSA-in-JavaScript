class Graph {
    constructor(numVertices) {
        this.numVertices = numVertices;
        this.matrix = Array(numVertices)
            .fill(0)
            .map(() => Array(numVertices).fill(0));
    }
  
    addEdge(source, destination) {
        // Since it's an undirected graph, edges go both ways
        this.matrix[source][destination] = 1;
        this.matrix[destination][source] = 1;
    }
  
    removeEdge(source, destination) {
        // Removing edge from both directions
        this.matrix[source][destination] = 0;
        this.matrix[destination][source] = 0;
    }
  
    print() {
        for (let i = 0; i < this.numVertices; i++) {
            const connections = [];
                for (let j = 0; j < this.numVertices; j++) {
                    if (this.matrix[i][j] === 1) {
                        connections.push(j);
                    }
                }
            console.log(`${i} -> ${connections.join(', ')}`);
        }
    }
}
  
const graph = new Graph(5);
console.log(graph);
// graph.addEdge(0, 1);
// graph.addEdge(0, 4);
// graph.addEdge(1, 2);
// graph.addEdge(1, 3);
// graph.addEdge(1, 4);
// graph.addEdge(2, 3);
// graph.addEdge(3, 4);

// graph.print();