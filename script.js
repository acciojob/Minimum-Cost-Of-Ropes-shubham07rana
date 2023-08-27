
  //your code here
   function calculateMinimumCost() {
            const ropesInput = document.getElementById("ropesInput").value;
            const ropeLengths = ropesInput.split(",").map(Number);

            const minCost = findMinimumCost(ropeLengths);
            
            const resultDiv = document.getElementById("result");
            resultDiv.textContent = "Minimum cost: " + minCost;
        }

        function findMinimumCost(ropes) {
            // Using a min heap (priority queue) to keep track of the minimum lengths
            const PriorityQueue = require("priorityqueuejs");
            const pq = new PriorityQueue(function(a, b) {
                return a - b;
            });

            // Adding rope lengths to the priority queue
            ropes.forEach(length => {
                pq.enq(length);
            });

            let totalCost = 0;

            // Combine ropes until only one rope remains in the queue
            while (pq.size() > 1) {
                const firstRope = pq.deq();
                const secondRope = pq.deq();

                const combinedCost = firstRope + secondRope;
                totalCost += combinedCost;

                pq.enq(combinedCost);
            }

            return totalCost;
        }





  
  
