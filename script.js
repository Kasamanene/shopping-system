window.onload = function() { 
    fetch("http://localhost:5000/products")
      .then(response => response.json())
      .then(data => {
        const productList = document.getElementById("product-list");
        data.forEach(product => {
          productList.innerHTML += `
            <div class="product">
              <img src="FashionShopimages/${product.image}" alt="${product.name}">
              <h3>${product.name}</h3>
              <p>${product.price} บาท</p>
              <button onclick="addToCart(${product.id})">เพิ่มใส่ตะกร้า</button>
              <button onclick="viewProductDetails(${product.id})">ดูรายละเอียด</button>
            </div>
          `;
        });
      })
      .catch(error => console.error('Error fetching products:', error));
  };