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




// ****** FUNCTIONS **********
function addItem(e){
e.preventDefault();
// console.log(grocery.value);
const value = grocery.value;
//just to add some id, use get time method to get certain number whcih will serve as id
const id = new Date().getTime().toString();
if (value !== '' && editFlag === false) {
  const element = document.createElement('article');
  element.classList.add('grocery-item');
  const attribute = document.createAttribute('data-id');
  attribute.value = id;
  element.setAttributeNode(attribute);
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
  displayAlert('item added to the list', 'success');
              //show container
  container.classList.add('show-container');
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
  //  removeFromLocalStorage(id);
}

function editItem(){
  const element = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibiling;
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
  // localStorage.removeItem('list');
}
function setBackToDefault(){
  grocery.value = '';
  editFlag = false;
  editID = '';
  submitBtn.textContent = 'submit';
}
// ****** LOCAL STORAGE **********

function addToLocalStorage(id, value) {
  console.log('added to local storage');
}

function removeFromLocalStorage(id){}
function editLocalStorage(id, value){}
// ****** SETUP ITEMS **********

//local storage API
//setItem
//getItem
//removeItem
//save as stings
