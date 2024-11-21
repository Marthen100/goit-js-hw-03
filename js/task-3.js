function filterArray(numbers, value) {
    const filteredNumbers = [];
    for (let number of numbers) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    }
    return filteredNumbers;
  }
  
  // Test cases
  console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
  console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
  console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
  console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
  console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

 
  
 const task3ResultsDiv = document.getElementById('task-3-results');

 let result10 = filterArray([1, 2, 3, 4, 5], 3);
 let result11 = filterArray([1, 2, 3, 4, 5], 4);
 let result12 = filterArray([1, 2, 3, 4, 5], 5);
 let result13 = filterArray([12, 24, 8, 41, 76], 38);
 let result14 = filterArray([12, 24, 8, 41, 76], 20);

 // Wyświetlenie wyników w div
 task3ResultsDiv.innerHTML += `<p>${result10.join(', ')}</p>`;
 task3ResultsDiv.innerHTML += `<p>${result11.join(', ')}</p>`;
 task3ResultsDiv.innerHTML += `<p>${result12.join(', ')}</p>`;
 task3ResultsDiv.innerHTML += `<p>${result13.join(', ')}</p>`;
 task3ResultsDiv.innerHTML += `<p>${result14.join(', ')}</p>`;