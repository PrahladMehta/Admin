<template>
      <div class="products-container">
        <h2>All Products</h2>
        <div class="table-responsive">
          <table class="products-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in products" :key="product.id">
                <td>
                  <img :src="product.image" :alt="product.name" class="product-image">
                </td>
                <td>{{ product.name }}</td>
                <td>₹{{ product.price.toFixed(2) }}</td>
                <td>{{ product.stock }}</td>
                <td>
                  <button class="edit-btn" @click="openEditModal(product)">
                    <Edit2Icon size="18" />
                    Edit
                  </button>
                  <button class="delete-btn" @click="deleteProduct(product.id)">
                    <TrashIcon size="18" />
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
    
        <!-- Edit Product Modal -->
        <div v-if="showEditModal" class="modal-overlay" @click="closeEditModal">
          <div class="modal-content" @click.stop>
            <h3>Edit Product</h3>
            <form @submit.prevent="updateProduct">
              <div class="form-group">
                <label for="productName">Name:</label>
                <input type="text" id="productName" v-model="editingProduct.name" required>
              </div>
              <div class="form-group">
                <label for="productPrice">Price:</label>
                <input type="number" id="productPrice" v-model="editingProduct.price" step="0.01" required>
              </div>
              <div class="form-group">
                <label for="productStock">Stock:</label>
                <input type="number" id="productStock" v-model="editingProduct.stock" required>
              </div>
              <div class="form-group">
                <label for="productImage">Image URL:</label>
                <input type="url" id="productImage" v-model="editingProduct.image" required>
              </div>
              <div class="form-actions">
                <button type="submit" class="save-btn">Save Changes</button>
                <button type="button" class="cancel-btn" @click="closeEditModal">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </template>
       
    <script setup>
    import { ref } from 'vue';
    import { Edit2Icon, TrashIcon } from 'lucide-vue-next';
    
    const products = ref([
      { id: 1, name: 'Product 1', price: 199.99, stock: 50, image: 'https://via.placeholder.com/150' },  
      { id: 2, name: 'Product 2', price: 299.99, stock: 30, image: 'https://via.placeholder.com/150' },
      { id: 3, name: 'Product 3', price: 149.99, stock: 75, image: 'https://via.placeholder.com/150' },
      { id: 4, name: 'Product 4', price: 399.99, stock: 20, image: 'https://via.placeholder.com/150' },
      { id: 5, name: 'Product 5', price: 249.99, stock: 40, image: 'https://via.placeholder.com/150' },
      { id: 6, name: 'Product 6', price: 179.99, stock: 60, image: 'https://via.placeholder.com/150' },
    ]);
    
    const showEditModal = ref(false);
    const editingProduct = ref({});
    
    const openEditModal = (product) => {
      editingProduct.value = { ...product };
      showEditModal.value = true;
    };
    
    const closeEditModal = () => {
      showEditModal.value = false;
      editingProduct.value = {};
    };
    
    const updateProduct = () => {
      const index = products.value.findIndex(p => p.id === editingProduct.value.id);
      if (index !== -1) {
        products.value[index] = { ...editingProduct.value };
      }
      closeEditModal();
    };
    
    const deleteProduct = (id) => {
      if (confirm('Are you sure you want to delete this product?')) {
        products.value = products.value.filter(p => p.id !== id);
      }
    };
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');
    
    .products-container {
      padding: 2rem;
      color: var(--text-color);
      background-color: var(--bg-color);
      /* border-radius: 12px; */
      min-width:100vh;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    h2 {
      font-family: 'Nunito', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: var(--accent-color);
    }
    
    .table-responsive {
      overflow-x: auto;
    }
    
    .products-table {
      width: 100%;
      border-collapse: separate;
      border-spacing: 0;
      background-color: var(--card-bg-color);
      border-radius: 8px;
      overflow: hidden;
      margin:0 auto;
    }
    
    .products-table th,
    .products-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(236, 240, 241, 0.1);
    }
    
    .products-table th {
      background-color: var(--primary-color);
      font-family: 'Nunito', sans-serif;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      font-size: 0.9rem;
      color: var(--accent-color);
    }
    
    .products-table tbody tr:hover {
      background-color: rgba(52, 152, 219, 0.1);
    }
    
    .product-image {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 4px;
    }
    
    .edit-btn,
    .delete-btn,
    .save-btn,
    .cancel-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      font-size: 0.9rem;
      margin-right: 0.5rem;
    }
    
    .edit-btn {
      background-color: var(--accent-color);
      color: var(--text-color);
    }
    
    .edit-btn:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
    }
    
    .delete-btn {
      background-color: #e74c3c;
      color: var(--text-color);
    }
    
    .delete-btn:hover {
      background-color: #c0392b;
      transform: translateY(-2px);
    }
    
    .save-btn {
      background-color: #2ecc71;
      color: var(--text-color);
    }
    
    .save-btn:hover {
      background-color: #27ae60;
      transform: translateY(-2px);
    }
    
    .cancel-btn {
      background-color: #95a5a6;
      color: var(--text-color);
    }
    
    .cancel-btn:hover {
      background-color: #7f8c8d;
      transform: translateY(-2px);
    }
    
    .modal-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    
    .modal-content {
      background-color: var(--bg-color);
      padding: 2rem;
      border-radius: 8px;
      width: 90%;
      max-width: 500px;
    }
    
    .modal-content h3 {
      font-family: 'Nunito', sans-serif;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1.5rem;
      color: var(--accent-color);
    }
    
    .form-group {
      margin-bottom: 1rem;
    }
    
    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 600;
      color: var(--text-color);
    }
    
    .form-group input {
      width: 100%;
      padding: 0.5rem;
      border: 1px solid var(--secondary-color);
      border-radius: 4px;
      background-color: var(--card-bg-color);
      color: var(--text-color);
      font-family: 'Open Sans', sans-serif;
    }
    
    .form-actions {
      display: flex;
      justify-content: flex-end;
      gap: 1rem;
      margin-top: 1.5rem;
    }
    
    @media (max-width: 768px) {
      .products-container {
        padding: 1rem;
      }
    
      h2 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }
    
      .products-table th,
      .products-table td {
        padding: 0.75rem;
      }
    
      .edit-btn,
      .delete-btn,
      .save-btn,
      .cancel-btn {
        padding: 0.4rem 0.8rem;
        font-size: 0.8rem;
      }
    
      .modal-content {
        padding: 1.5rem;
      }
    
      .modal-content h3 {
        font-size: 1.2rem;
        margin-bottom: 1rem;
      }
    }
    </style>