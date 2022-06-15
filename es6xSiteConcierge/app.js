const result = document.getElementById('result');
const filter = document.getElementById('filter');
const letter = document.querySelector('.letter');
console.log(letter.innerText);
console.log(letter);

const deleteLetter = document.querySelector('.delete');
const listItems = [];

getData();

letter.addEventListener('click', (e) => filterData(e.target.innerText));

async function getData() {
  const res = await fetch('http://127.0.0.1/person/search');
  const data = await res.json();

  result.innerHTML = '';
  console.log(data);
  data.forEach((user) => {
    const li = document.createElement('li');
    listItems.push(li);

    li.innerHTML = `
    <i class="far fa-user fa-2x"> 
    <a  href="/x-sitec-concierge/idle/deliverPerson/1">${user.firstname} ${user.lastname}
    </a>
    `;

    result.appendChild(li);
  });
}

function filterData(searchTerm) {
  console.log('clicked');
  console.log(searchTerm);
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
