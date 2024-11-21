function slugify(title) {
    return title.toLowerCase().split(' ').join('-');
  }
  
  // Test cases
  console.log(slugify("Arrays for beginners")); // "arrays-for-beginners"
  console.log(slugify("English for developer")); // "english-for-developer"
  console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
  console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); 
  // "how-to-become-a-junior-developer-in-two-weeks"
  
  
  
  const task1ResultsDiv = document.getElementById('task-1-results');

  let result1 = slugify("Arrays for beginners"); // "arrays-for-beginners"
  let result2 = slugify("English for developer"); // "english-for-developer"
  let result3 = slugify("Ten secrets of JavaScript"); // "ten-secrets-of-javascript"
  let result4 = slugify("How to become a JUNIOR developer in TWO WEEKS"); 
  // "how-to-become-a-junior-developer-in-two-weeks"
  
  // Wyświetlenie wyników w div
  task1ResultsDiv.innerHTML += `<p>${result1}</p>`;
  task1ResultsDiv.innerHTML += `<p>${result2}</p>`;
  task1ResultsDiv.innerHTML += `<p>${result3}</p>`;
  task1ResultsDiv.innerHTML += `<p>${result4}</p>`;  