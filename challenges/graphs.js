// Challenege: modify dijkstra's algorithm so it only returns so it only
//             returns a path from the starting vertex to another vertex you pass in

// Dijkstra's Algorithm
function dijkstra(graph, startingVertex, endVertex) {
    const distances = {};
    for (const vertex of Object.keys(graph)) {
        distances[vertex] = Infinity;
    }
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
    return distances[endVertex];
}

const graph1 = {
    "A": {"B": 2, "C": 6},
    "B": {"D": 5},
    "C": {"D": 8},
    "D": {},
}

console.log(dijkstra(graph1, "A", "C"));