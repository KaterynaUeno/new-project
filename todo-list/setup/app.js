// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');

// edit option
let editElement;
let editFlag = false;
let editID = "";


// ****** EVENT LISTENERS **********
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setUpItems);



// ****** FUNCTIONS **********
function addItem(e){
e.preventDefault();
// console.log(grocery.value);
const value = grocery.value;
//just to add some id, use get time method to get certain number whcih will serve as id
const id = new Date().getTime().toString();
if (value !== '' && editFlag === false) {
  createListItem(id, value);
  displayAlert('item added to the list', 'success');
              //show container
  container.classList.add('show-container');
  addToLocalStorage(id, value);
  setBackToDefault();
}
else if (value !== '' && editFlag === true) {
  editElement.innerHTML = value;
  editLocalStorage(editID, value);
  setBackToDefault();
} else {
  displayAlert('please enter item', 'danger');
  }
  setBackToDefault();
}


function deleteItem(e){
   const element = e.currentTarget.parentElement.parentElement;
   const id = element.dataset.id;
   list.removeChild(element);
   if (list.children.length === 0){
     container.classList.remove('show-container');
   }
   setBackToDefault();
   removeFromLocalStorage(id);
}

function editItem(e){
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editID = element.dataset.id;
  submitBtn.textContent = 'edit';
}

function displayAlert(text, action){
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  setTimeout(function() {
    alert.textContent = '';
    alert.classList.remove(`alert-${action}`);
  }, 1500);
}

function clearItems(){
  const items = document.querySelectorAll('.grocery-item');

  if (items.length > 0) {
    items.forEach(function(item){
      list.removeChild(item);
    });
  }
  container.classList.remove('show-container');
  displayAlert('items deleted', 'success');
  setBackToDefault();
  localStorage.removeItem('list');
}
function setBackToDefault(){
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}
// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  // console.log('added to local storage');
  const grocery = { id, value };
  // console.log(groceryItem);
  let items = getLocalStorage();
  // console.log(items);
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

function removeFromLocalStorage(id){
  let items = getLocalStorage();
  items = items.filter(function(item){
    if (item.id !== id){
      return item;
    }
  });
  localStorage.setItem('list', JSON.stringify(items));
}
function editLocalStorage(id, value){
  let items = getLocalStorage();
  items = items.map(function(item){
    if (item.id === id){
      item.value = value;
    }
    return item;
  });
  localStorage.setItem('list', JSON.stringify(items));
}


function getLocalStorage(){
  return localStorage.getItem('list')
  ? JSON.parse(localStorage.getItem('list')) : [];
}
// ****** SETUP ITEMS **********


function setUpItems(){
  let items = getLocalStorage();
  if (items.length > 0){
    items.forEach(function(item){
      createListItem(item.id, item.value);
    });
    container.classList.add('show-container')
  }
}

function createListItem(id, value){
  const element = document.createElement('article');
  const attribute = document.createAttribute('data-id');
  attribute.value = id;
  element.setAttributeNode(attribute);
  element.classList.add('grocery-item');
  element.innerHTML = `<p class="title">${value}</p>
              <div class="btn-container">
                <button type="button" class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>
                <button type="button" class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button>
              </div>`;
  const deleteBtn = element.querySelector('.delete-btn');
  const editBtn = element.querySelector('.edit-btn');

  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);

  //append child
  list.appendChild(element);
}
//local storage API
//setItem
//getItem
//removeItem
//save as stings
