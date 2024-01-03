function BluePassScroll(){

    alert ('!');
    var parent = document.getElementById('#ship-a');

  };

  object.addEventListener("#bluepass", alert('!'););

// Create the observer like the examples above
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('square-animation');
        return;
      }
  
      entry.target.classList.remove('square-animation');
    });
  });
  
  // Get multiple elements instead of a single one using "querySelectorAll"
  const squares = document.querySelectorAll('#ship-1');
  
  // Loop over the elements and add each one to the observer
  squares.forEach((element) => observer.observe(element));


