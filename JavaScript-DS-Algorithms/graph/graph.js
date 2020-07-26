
class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacentList = {};
    }

    addNodesOrVertex(node) {
        this.adjacentList[node] = [];
        this.numberOfNodes++;
    }

    addEdges(node1, node2) {
        this.adjacentList[node1].push(node2);
        this.adjacentList[node2].push(node1);
    }

}


const customGraph = new Graph();
customGraph.addNodesOrVertex('0');
customGraph.addNodesOrVertex('1');
customGraph.addNodesOrVertex('2');
customGraph.addNodesOrVertex('3');
customGraph.addNodesOrVertex('4');
customGraph.addNodesOrVertex('5');
customGraph.addNodesOrVertex('6');
customGraph.addEdges('0', '2');
customGraph.addEdges('1', '0');
customGraph.addEdges('1', '2');
customGraph.addEdges('3', '1');
customGraph.addEdges('3', '4');
customGraph.addEdges('4', '2');
customGraph.addEdges('4', '5');
customGraph.addEdges('6', '5');


console.log('graph before: ', customGraph);


