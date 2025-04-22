// Change Text Content
document.getElementById('change-text-btn').addEventListener('click', function() {
  const dynamicText = document.getElementById('dynamic-text');
  dynamicText.textContent = 'You just changed the text dynamically using JavaScript!';
  dynamicText.style.color = '#FF5733'; // Modifying CSS styles
});

// Add a New Element
document.getElementById('add-element-btn').addEventListener('click', function() {
  const container = document.getElementById('element-container');
  const newElement = document.createElement('p');
  newElement.textContent = 'This is a dynamically added element!';
  newElement.style.backgroundColor = '#F0F0F0';
  newElement.style.padding = '10px';
  newElement.style.border = '1px solid #ccc';
  container.appendChild(newElement);
});

// Remove the Last Element
document.getElementById('remove-element-btn').addEventListener('click', function() {
  const container = document.getElementById('element-container');
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  } else {
    alert('No elements to remove!');
  }
});
