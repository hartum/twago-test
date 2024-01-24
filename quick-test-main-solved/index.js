window.onload = (event) => {
  // Example usage
  drawContainer(310, 200, 4);
  // drawContainer(413, 42, 30);
  // drawContainer(200, 300, 2);
}
   
 function drawContainer(containerSize, childSize, numberOfChildren) {
    const container = document.getElementById("mainSquare");
    container.style.width = containerSize + 'px';
    container.style.height = containerSize + 'px';
   
    // Calculates the maximum number of children that can fit in a container,
    // and then limits the number of rendered children to the smaller of either the
    // total number of children or the maximum that can fit in the container.
    const maxChildren = Math.floor(containerSize / childSize) ** 2;
    const renderedChildren = Math.min(numberOfChildren, maxChildren);

    // Create square childrens and add them to the container
    for (let i = 0; i < renderedChildren; i++) {
      const child = createChilds(childSize);
      container.appendChild(child);
    }

    // Check if there are more children than can fit in the container and display message for user
    if (renderedChildren < numberOfChildren) {
      alert(`Could only fit ${renderedChildren} squares inside the container.`);
    }
  }

  // Creates and return a new child
  const createChilds = (childSize) => {
    const child = document.createElement('div');
    child.className = 'child-square';
    child.style.width = childSize + 'px';
    child.style.height = childSize + 'px';
    child.style.backgroundColor = getRandomColor();
    // Add hover event listeners
    child.addEventListener('mouseover', handleEnterChild);
    child.addEventListener('mouseout', handlLeaveChild);
    return child;
  }

  // Return a random color in hex
  const getRandomColor = () => {
    var color = Math.floor(Math.random()*16777215).toString(16);
    return "#" + color;
  }

  // Set the var to manage remove time
  let timeCounter;
  
  // Change child background color by a random one, and trigger the removal after two seconds
  const handleEnterChild = (e) => {
    e.target.style.backgroundColor = getRandomColor();
    timeCounter = setTimeout(() => { e.target.remove() }, 2000);
  }
  // Cancel the counter for child removal
  const handlLeaveChild = (e) => {
    clearTimeout(timeCounter);
  }
  