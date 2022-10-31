const API_URL = "https://randomuser.me/api/";

const cardContainer = document.querySelector(".api-user-import");
const button = document.querySelector('.button');


button.addEventListener('click', () => {
  
  cardContainer.innerHTML = ""


  fetch(`${API_URL}`)
  .then((response) => response.json())
  .then((json) => {
    json.results.map((us) => {
      const html = `<div class="card">
      <div class="card-picture">
        <img src="${us.picture.large}" alt="">
      </div>
      <div class="card-content">
        <div class="card-content-name">
          <h3>${us.name.first} ${us.name.last}</h3>
        </div>
        <p>age: ${us.dob.age}</p>
        <p>gender: ${us.gender}</p>
        <p>born location: ${us.location.city},${us.location.state}</p>
        <p>phone: ${us.phone}</p>
        <p>email: ${us.email}</p> 
        <p>id: ${us.id.name}</p>
        <p>id value: ${us.id.value}</p>
        <p>serial number: ${us.login.md5}</p>
        <p>timezone: ${us.location.timezone.offset}</p>
      </div>
    </div>`;

      cardContainer.insertAdjacentHTML("afterbegin", html);
    });
  });
})

