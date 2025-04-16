const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('FashionShopimages')); // ให้บริการไฟล์ในโฟลเดอร์ 'FashionShopimages'

// Products API
app.get('/products', (req, res) => {
  const products = [
    { id: 1, name: "Oversized Shirt", price: 299, image: "เสื้อโอเวอร์ไซน์.png" },
    { id: 2, name: "Jeans", price: 599, image: "ยีนส์.jpg" },
    { id: 3, name: "Hoodie", price: 1000, image: "เสื้อฮูด.png" },
    { id: 4, name: "Jacket", price: 899, image: "แจกเกต.jpg" },
    { id: 5, name: "Yeti Tumbler", price: 999, image: "แก้วเยติ.png" },
    { id: 6, name: "Bag", price: 499, image: "กระเป๋า.png" },
    { id: 7, name: "Hat", price: 199, image: "หมวก.png" },
    { id: 8, name: "Short Dress", price: 699, image: "เดรสสั้น.png" },
    { id: 9, name: "Shirt", price: 399, image: "เสื้อ.png" },
    { id: 10, name: "Long Dress", price: 299, image: "เดรสยาว.png" }
  ];

  // ส่งข้อมูลสินค้ากลับไป
  res.json(products);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});