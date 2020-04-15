
// 1) make add button add when clicked

//write function for add button click event
const addNewItem = () => {
  //capture input text in variable
  let newItem = document.getElementById('new-item').value;
  //if statement to validate the input
  if(newItem.length > 0) {
    //create new li element
    let newLi = document.createElement('li');
    //add classes
    newLi.classList.add('list-item', 'flex-con');
    //create text node
    let newText = document.createTextNode(newItem);
    //append text of newItem to li
    newLi.appendChild(newText);
    //create new delete button
    let newDelete = document.createElement('div');
    //insert x
    newDelete.innerHTML = 'x';
    //add class of delete button
    newDelete.classList.add('delete-button');
    //append delete button to li
    newLi.appendChild(newDelete);
    //append li to ul
    document.getElementById('list').appendChild(newLi);
  };
};

//store add button in a variable
const addButton = document.getElementById('add-button');
//add event listener
addButton.addEventListener('click', addNewItem);



// 2) make delete buttons work

// write function for delete button click event
const deleteItem = () => {
  //if statement to only delete if clicked element is a delete button
  if(event.target.classList.contains('delete-button')) {
    // capture the clicked delete's li in a variable
    let doomedLi = event.target.parentElement;
    // remove child (doomedLi) of ul
    document.getElementById('list').removeChild(doomedLi);
  };
};

// store ul in variable
const itemList = document.getElementById('list');
// add event listner
itemList.addEventListener('click', deleteItem);

