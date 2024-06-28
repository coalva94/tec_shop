
async function loadProducts() {
    try {
      const respuesta = await fetch("/data/data.json");
      const data = await respuesta.json();
      const productos = data.productos;
      printProducts(productos);
    } catch (error) {
      console.error("Error fetching productos:", error);
    }
  }
  
  function printProducts(arrayOfProducts) {
    const productContainer = document.querySelector("#product-container");
    let template = ``;
    arrayOfProducts.forEach(item => {
      template += `
        <a href="#">
          <img src="${item.images[0]}" alt="${item.title}">
          <div>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          </div>
        </a>`;
    });
    productContainer.innerHTML = template;
  }
  
  loadProducts();
  