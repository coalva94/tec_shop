 const getProducts = async () => {
  try {
    const response = await fetch("https://applejson.net/api/products");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const displayProducts = async () => {
  try {
    const products = await getProducts();
    const productListElement = document.getElementById("productList");
    if (products.length === 0) {
      productListElement.innerHTML = "<p>No products found.</p>";
      return;
    }
    let productsHTML = "";
    for (let i = 0; i < products.length; i++) {
      // Comprobación condicional para asegurar que processor está definido
      const processor = products[i].processor;
      const processorInfo = processor
        ? `
        CPU: ${processor.cpu || "N/A"}<br>
        GPU: ${processor.gpu || "N/A"}`
        : "";

      productsHTML += `
        <div class="col-md-6 col-lg-3 mb-4 ">
          <div class="card h-100"><i class="fa fa-apple ms-2 mt-2"></i>
            <div class="card-img-top text-center">
              <img src=${products[i].thumb} style="width: 200px; height: 200px; object-fit: contain;" alt=${products[i].title}>
              <div class="container m-2 mt-4">
                <h6 class="card-title"> ${products[i].title}</h6>
              </div>
              <div class="card-body">
                <p class="card-text">${processorInfo}</p>
              </div>
              <div class="row row-cols-2">
              <div class="card-body">
                <p class="card-text"><strong>$${products[i].price}</strong></p>
              </div>
              <div class="card-body">
                <button type="button" class="btn btn-light"><i class="fa-solid fa-cart-shopping"></i>  Buy Now</button>
              </div>
              </div>
            </div>
          </div>
        </div>`;
    }
    productListElement.innerHTML = `<div class="row">${productsHTML}</div>`;
  } catch (error) {
    console.error("Error displaying products:", error);
  }
};

displayProducts();
``;
