<template>
     


    
        <div class="home-container">
          <section class="hero">
            <div class="hero-content">
              <h1>Welcome to AdminDash</h1>
              <p>Your all-in-one e-commerce management solution</p>
            </div>
            <div class="hero-graph">
              <canvas ref="salesChart"></canvas>
            </div>
          </section>
    
          <div class="stats-grid">
            <div class="stat-card">
              <h3>Total Products</h3>
              <p>{{ totalProducts }}</p>
            </div>
            <div class="stat-card">
              <h3>Total Sales</h3>
              <p>₹{{ totalSales.toFixed(2) }}</p>
            </div>
            <div class="stat-card">
              <h3>Total Users</h3>
              <p>{{ totalUsers }}</p>
            </div>
            <div class="stat-card">
              <h3>New Orders</h3>
              <p>{{ newOrders }}</p>
            </div>
          </div>
    
          <!-- <section class="quick-actions">
            <h2>Quick Actions</h2>
            <div class="action-buttons">
              <button class="action-btn">Add New Product</button>
              <button class="action-btn">View Recent Orders</button>
              <button class="action-btn">Manage Users</button>
            </div>
          </section> -->
        </div>
    
        <footer class="footer">
          <p>&copy; 2023 AdminDash. All rights reserved.</p>
          <div class="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Support</a>
          </div>
        </footer>
 
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import Chart from 'chart.js/auto';
    
    const totalProducts = ref(150);
    const totalSales = ref(50000);
    const totalUsers = ref(500);
    const newOrders = ref(25);
    
    const salesChart = ref(null);
    
    onMounted(() => {
      const ctx = salesChart.value.getContext('2d');
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Monthly Sales',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              grid: {
                color: 'rgba(236, 240, 241, 0.1)'
              },
              ticks: {
                color: '#ecf0f1'
              }
            },
            x: {
              grid: {
                color: 'rgba(236, 240, 241, 0.1)'
              },
              ticks: {
                color: '#ecf0f1'
              }
            }
          },
          plugins: {
            legend: {
              labels: {
                color: '#ecf0f1',
                font: {
                  family: "'Nunito', sans-serif",
                  size: 12
                }
              }
            }
          }
        }
      });
    });
    </script>
    
    <style >
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');
    
    :root {
      --primary-color: #1a2a3a;
      --secondary-color: #2c3e50;
      --accent-color: #3498db;
      --text-color: #ecf0f1;
      --bg-color: #0f1a2a;
      --card-bg-color: #1c2b3a;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: 'Open Sans', sans-serif;
      line-height: 1.6;
      font-size: 16px;
    }
    
    h1, h2, h3, .navbar-brand {
      font-family: 'Nunito', sans-serif;
    }
    
    .admin-layout {
      display: flex;
      flex-direction: column;
  
      background-color: var(--bg-color);
      color: var(--text-color);
    }
    
    .navbar {
      background-color: var(--primary-color);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .navbar-brand {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--accent-color);
      letter-spacing: 0.5px;
    }
    
    .navbar-menu {
      display: flex;
      list-style-type: none;
      gap: 2rem;
    }
    
    .navbar-menu a {
      color: var(--text-color);
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s ease;
      padding: 0.5rem 0;
      font-size: 1rem;
    }
    
    .navbar-menu a:hover, .navbar-menu a.active {
      color: var(--accent-color);
    }
    
    .navbar-user {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .user-avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      object-fit: cover;
    }
    
    .user-name {
      font-weight: 600;
      font-size: 0.9rem;
    }
    
    .home-container {
      flex-grow: 1;
      padding: 2rem;
      width: 100%;
      margin: 0 ;
      width: 100%;
      background-color: var(--bg-color);

    }
    
    .hero {
      background-color: var(--secondary-color);
      border-radius: 12px;
      padding: 3rem 2rem;
      margin-bottom: 3rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    
    .hero-content {
      flex: 1;
    }
    
    .hero h1 {
      font-size: 2.8rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 1rem;
      line-height: 1.2;
    }
    
    .hero p {
      font-size: 1.2rem;
      max-width: 600px;
      font-weight: 300;
      line-height: 1.5;
    }
    
    .hero-graph {
      flex: 1;
      height: 300px;
    }
    
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    
    .stat-card {
      background-color: var(--card-bg-color);
      border-radius: 12px;
      padding: 2rem;
      text-align: center;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      color:white;
    }
    
    .stat-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .stat-card h3 {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 0.75rem;
      color: var(--accent-color);
    }
    
    .stat-card p {
      font-size: 2.2rem;
      font-weight: 700;
    }
    
    .quick-actions {
      background-color: var(--card-bg-color);
      border-radius: 12px;
      padding: 2.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .quick-actions h2 {
      font-size: 1.8rem;
      font-weight: 700;
      color: var(--accent-color);
      margin-bottom: 1.5rem;
    }
    
    .action-buttons {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
   
    }
    
    .action-btn {
      background-color: var(--accent-color);
      color: var(--text-color);
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease, transform 0.3s ease;
      font-size: 1rem;
      font-weight: 600;
      flex: 1;
      min-width: 200px;
      font-family: 'Nunito', sans-serif;
    }
    
    .action-btn:hover {
      background-color: #2980b9;
      transform: translateY(-2px);
    }
    
    .footer {
      background-color: var(--primary-color);
      padding: 1.5rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: auto;
    }
    
    .footer p {
      font-size: 0.9rem;
    }
    
    .footer-links {
      display: flex;
      gap: 1.5rem;
    }
    
    .footer-links a {
      color: var(--text-color);
      text-decoration: none;
      transition: color 0.3s ease;
      font-size: 0.9rem;
      font-weight: 400;
    }
    
    .footer-links a:hover {
      color: var(--accent-color);
    }
    
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        align-items: flex-start;
        padding: 1rem;
      }
    
      .navbar-menu {
        margin-top: 1rem;
        flex-direction: column;
        width: 100%;
      }
    
      .navbar-user {
        margin-top: 1rem;
        width: 100%;
        justify-content: flex-start;
      }
    
      .home-container {
        padding: 1rem;
      }
    
      .hero {
        flex-direction: column;
        padding: 2rem 1.5rem;
      }
    
      .hero-content {
        margin-bottom: 2rem;
      }
    
      .hero h1 {
        font-size: 2.2rem;
      }
    
      .hero p {
        font-size: 1rem;
      }
    
      .hero-graph {
        width: 100%;
        height: 200px;
      }
    
      .stats-grid {
        grid-template-columns: 1fr;
      }
    
      .quick-actions {
        padding: 2rem 1.5rem;
      }
    
      .action-buttons {
        flex-direction: column;
      }
    
      .footer {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
      }
    
      .footer-links {
        flex-direction: column;
        align-items: center;
      }
    }
    </style>