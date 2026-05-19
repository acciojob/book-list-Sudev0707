// Get DOM elements
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const isbnInput = document.getElementById('isbn');
const submitBtn = document.getElementById('submit');
const bookListBody = document.getElementById('book-list');

// Function to add a new book
function addBook() {
    // Get input values
    const title = titleInput.value.trim();
    const author = authorInput.value.trim();
    const isbn = isbnInput.value.trim();
    
    // Validate inputs - check if any field is empty
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Create a new row
    const row = bookListBody.insertRow();
    
    // Add cells for Title, Author, ISBN
    const titleCell = row.insertCell(0);
    const authorCell = row.insertCell(1);
    const isbnCell = row.insertCell(2);
    const actionCell = row.insertCell(3);
    
    // Set the cell values
    titleCell.textContent = title;
    authorCell.textContent = author;
    isbnCell.textContent = isbn;
    
    // Create and add the delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Clear';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function() {
        row.remove();
    };
    actionCell.appendChild(deleteBtn);
    
    // Clear input fields
    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    
    // Focus on title input for next entry
    titleInput.focus();
}

// Add click event listener to submit button
submitBtn.addEventListener('click', addBook);

// Add keyboard event listeners for Enter key
titleInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addBook();
    }
});

authorInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addBook();
    }
});

isbnInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        addBook();
    }
});