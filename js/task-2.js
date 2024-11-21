function makeArray(firstArray, secondArray, maxLength) {
    const combinedArray = firstArray.concat(secondArray);
    if (combinedArray.length > maxLength) {
      return combinedArray.slice(0, maxLength);
    }
    return combinedArray;
  }
  
  // Test cases
  console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); 
  // ["Mango", "Poly", "Ajax"]
  console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); 
  // ["Mango", "Poly", "Houston", "Ajax"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
  // ["Earth", "Jupiter"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
  // ["Earth", "Jupiter", "Neptune", "Uranus"]
  console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); 
  // []

  

 const task2ResultsDiv = document.getElementById('task-2-results');

 let result5 = makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3);
 let result6 = makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4);
 let result7 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2);
 let result8 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4);
 let result9 = makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);

 // Wyświetlenie wyników w div
 task2ResultsDiv.innerHTML += `<p>${result5.join(', ')}</p>`;
 task2ResultsDiv.innerHTML += `<p>${result6.join(', ')}</p>`;
 task2ResultsDiv.innerHTML += `<p>${result7.join(', ')}</p>`;
 task2ResultsDiv.innerHTML += `<p>${result8.join(', ')}</p>`;
 task2ResultsDiv.innerHTML += `<p>${result9.join(', ')}</p>`;