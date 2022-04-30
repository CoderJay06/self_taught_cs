// Creating a Graph

class Vertex {
    constructor(key) {
        this.key = key;
        this.connections = {};
    }

    addAdj(vertex, weight = 0) {
        this.connections[vertex] = weight;
    }

    getConnections() {
        return Object.keys(this.connections);
    }

    getWeight(vertex) {
        return this.connections[vertex];
    }
}

class Graph {
    constructor() {
        this.vertices = {};
    }

    addVertex(key) {
        const newVertex = new Vertex(key);
        this.vertices[key] = newVertex;
    }

    getVertex(key) {
        if (key in this.vertices) {
            return this.vertices[key];
        }
        return null;
    }

    addEdge(f, t, weight = 0) {
        if (!this.vertices[f]) {
            this.addVertex(f);
        }
        if (!this.vertices[t]) {
            this.addVertex(t);
        }
        this.vertices[f].addAdj(this.vertices[t], weight);
    }
}

// const graph = new Graph();
// graph.addVertex("A");
// graph.addVertex("B");
// graph.addVertex("C");
// graph.addEdge("A", "B", 1);
// graph.addEdge("B", "C", 10);
// console.log("Graph: ", graph);
// const vertexA = graph.getVertex("A");
// const vertexB = graph.getVertex("B");
// const vertexC = graph.getVertex("C");
// console.log("Vertex A: ", vertexA);
// console.log("Vertex B: ", vertexB);

// console.log("Vertex A connections: ", vertexA.getConnections());
// console.log("Vertex B connections: ", vertexB.getConnections());

// console.log("Vertex A to Vertex B weight: ", vertexA.getWeight(vertexB));
// console.log("Vertex B to Vertex C weight: ", vertexB.getWeight(vertexC));

// Dijkstra's Algorithm
function dijkstra(graph, startingVertex) {
    const distances = {};
    for (const vertex of Object.keys(graph)) distances[vertex] = Infinity;
    distances[startingVertex] = 0;
    const pq = [[0, startingVertex]];
    while (pq.length > 0) {
        const item = pq.pop();
        const currentDistance = item[0];
        const currentVertex = item[1];
        if (currentDistance > distances[currentVertex]) {
            continue;
        }

        for (const neighbor in graph[currentVertex]) {
            const weight = graph[currentVertex][neighbor];
            const distance = currentDistance + weight;
            if (distance < distances[neighbor]) {
                distances[neighbor] = distance;
                pq.push([distance, neighbor]);
            }
        }
    }
    return distances;
}

const graph1 = {
    "A": {"B": 2, "C": 6},
    "B": {"D": 5},
    "C": {"D": 8},
    "D": {},
}

console.log(dijkstra(graph1, "A"));