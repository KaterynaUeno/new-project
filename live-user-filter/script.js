const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];

getData()

filter.addEventListener('input', (event) => filterData(event.target.value));

async function getData() {
  const response = await fetch('https://randomuser.me/api?results=50');

  const data = await response.json();

// console.log(data);

result.innerHTML = '';

data.results.forEach(user => {
  // console.log(user);
  const li = document.createElement('li');


  listItems.push(li);

  li.innerHTML = `
  <img src = "${user.picture.medium}" alt="${user.name.first}">
  <div clas="user-info">
  <h4>${user.name.first} ${user.name.last}</h4>
  <p> ${user.location.city}, ${user.location.country}</p>
  </div>`
  result.appendChild(li)
})
}

function filterData(searchTerm) {
  // console.log(searchTerm)
  listItems.forEach(item => {
    if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove('hide')
    } else {
      item.classList.add('hide')
    }
  })
}
