function Pizza(nombre, ingredientes, precio) {
  this.nombre = nombre;
  this.ingredientes = ingredientes;
  this.precio = precio;
}

let muzzarella = new Pizza('muzzarella', ['queso'], 600);
let napolitana = new Pizza('napolitana', ['queso', 'tomate', 'albahaca'], 780);
let hawaiana = new Pizza('hawaiana', ['queso', 'ananá'], 850);
let pepperoni = new Pizza('pepperoni', ['queso', 'peperoni'], 800);
let champiñones = new Pizza('champiñones', ['queso', 'champiñones'], 970);
let fugazza = new Pizza('fugazza', ['queso', 'cebolla'], 750);
let pizzas = [muzzarella, napolitana, hawaiana, pepperoni, champiñones, fugazza];

let cardsContainer = document.querySelector('.cards-container');
let superContainer = document.querySelector('.super-container');
let searchInput = document.getElementById('searchInput');
let buscarBtn = document.getElementById('buscarBtn');

pizzas.forEach(pizza => {
    const div = document.createElement('div');
    div.classList.add("card-container");
    cardsContainer.append(div);
    div.innerHTML = `
    <img class="card-pizza-img" src="./img/${pizza.nombre}.jpg" alt="muzzarella">
    <h2 class="card-pizza-name text">${pizza.nombre}</h2>
    <ul class="card-pizza-ingredients">
    
    </ul>
    <div class="card-bottom-container">
        <input class="input" type="button" id="comprarBtn" value="Comprar">
        <p class="text">$${pizza.precio}</p>
    </div>`

    const LastIngrContainer = Array.from( document.querySelectorAll('.card-pizza-ingredients') ).pop()
    for (let i = 0; i < pizza.ingredientes.length; i++) {
      console.log(pizza.ingredientes[i])
      const li = document.createElement('li');
      li.classList.add('ingredients-item');
      LastIngrContainer.append(li);
      li.innerHTML = pizza.ingredientes[i];
    }
  }
);

buscarBtn.addEventListener('click', imprimirResultado);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') { imprimirResultado() }})

function imprimirResultado() {
  let searchInput = document.getElementById('searchInput').value;
  let pizza_encontrada = false;

  pizzas.forEach(pizza => {
    if (pizza.nombre == searchInput.toLocaleLowerCase()) {
      pizzas.forEach(pizza => {
        const element = document.querySelector('.card-container');
        if (element != null) {
          element.remove();
        }
      })
      pizza_encontrada = true;
      const div = document.createElement('div');
      div.classList.add("card-container");
      cardsContainer.append(div);
      div.innerHTML = `
      <img class="card-pizza-img" src="./img/${pizza.nombre}.jpg" alt="muzzarella">
      <h2 class="card-pizza-name text">${pizza.nombre}</h2>
      <ul class="card-pizza-ingredients">
      
      </ul>
      <div class="card-bottom-container">
          <input class="input" type="button" id="comprarBtn" value="Comprar">
          <p class="text">$${pizza.precio}</p>
      </div>`

      const LastIngrContainer = Array.from( document.querySelectorAll('.card-pizza-ingredients') ).pop()
      for (let i = 0; i < pizza.ingredientes.length; i++) {
        console.log(pizza.ingredientes[i])
        const li = document.createElement('li');
        li.classList.add('ingredients-item');
        LastIngrContainer.append(li);
        li.innerHTML = pizza.ingredientes[i];
      }
    }
  });

  if (searchInput === "") {
    const p = document.createElement('p');
    p.classList.add('error');
    superContainer.append(p);
    p.innerHTML = 'ERROR: Campo vacío'
    setTimeout(() => { p.remove() }, 1500)
  } else {
    if (!pizza_encontrada) {
      const p = document.createElement('p');
      p.classList.add('error');
      superContainer.append(p);
      p.innerHTML = 'ERROR: Pizza no encontrada'
      setTimeout(() => { p.remove() }, 1500)
    }
  }
}




