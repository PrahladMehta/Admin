<template>
      <div class="analytics-container">
        <h2>Analytics Overview</h2>
        <div class="charts-grid">
          <div class="chart-container">
            <h3>Sales Over Time</h3>
            <canvas ref="salesChart"></canvas>
          </div>
          <div class="chart-container">
            <h3>Most Viewed Products</h3>
            <canvas ref="viewsChart"></canvas>
          </div>
          <div class="chart-container">
            <h3>Top Selling Products</h3>
            <canvas ref="topProductsChart"></canvas>
          </div>
          <div class="chart-container">
            <h3>Seller Performance</h3>
            <canvas ref="sellerChart"></canvas>
          </div>
        </div>
      </div>
    </template>
    
    <script setup>
    import { ref, onMounted } from 'vue';
    import Chart from 'chart.js/auto';
    
    const salesChart = ref(null);
    const viewsChart = ref(null);
    const topProductsChart = ref(null);
    const sellerChart = ref(null);
    
    onMounted(() => {
      const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
            labels: {
              font: {
                family: "'Nunito', sans-serif",
                size: 12
              },
              color: '#ecf0f1'
            }
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              color: 'rgba(236, 240, 241, 0.1)'
            },
            ticks: {
              font: {
                family: "'Nunito', sans-serif",
                size: 12
              },
              color: '#ecf0f1'
            }
          },
          x: {
            grid: {
              color: 'rgba(236, 240, 241, 0.1)'
            },
            ticks: {
              font: {
                family: "'Nunito', sans-serif",
                size: 12
              },
              color: '#ecf0f1'
            }
          }
        }
      };
    
      // Sales Over Time Chart
      new Chart(salesChart.value, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
          datasets: [{
            label: 'Sales',
            data: [12000, 19000, 15000, 25000, 22000, 30000],
            borderColor: '#3498db',
            backgroundColor: 'rgba(52, 152, 219, 0.1)',
            borderWidth: 2,
            fill: true,
            tension: 0.4
          }]
        },
        options: chartOptions
      });
    
      // Most Viewed Products Chart
      new Chart(viewsChart.value, {
        type: 'bar',
        data: {
          labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
          datasets: [{
            label: 'Views',
            data: [1200, 1900, 3000, 5000, 2000],
            backgroundColor: 'rgba(52, 152, 219, 0.7)'
          }]
        },
        options: chartOptions
      });
    
      // Top Selling Products Chart
      new Chart(topProductsChart.value, {
        type: 'doughnut',
        data: {
          labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
          datasets: [{
            data: [300, 50, 100, 200, 150],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f39c12', '#9b59b6']
          }]
        },
        options: {
          ...chartOptions,
          cutout: '60%'
        }
      });
    
      // Seller Performance Chart
      new Chart(sellerChart.value, {
        type: 'bar',
        data: {
          labels: ['Seller 1', 'Seller 2', 'Seller 3', 'Seller 4', 'Seller 5'],
          datasets: [{
            label: 'Total Sales',
            data: [12000, 19000, 3000, 5000, 2000],
            backgroundColor: 'rgba(52, 152, 219, 0.7)'
          }]
        },
        options: chartOptions
      });
    });
    </script>
    
    <style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');
    
    .analytics-container {
      padding: 2rem;
      color: var(--text-color);
      background-color: var(--bg-color);
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    
    h2 {
      font-family: 'Nunito', sans-serif;
      font-size: 2rem;
      font-weight: 700;
      margin-bottom: 2rem;
      color: var(--accent-color);
      text-align: center;
    }
    
    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .chart-container {
      background-color: var(--card-bg-color);
      border-radius: 12px;
      padding: 1.5rem;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .chart-container:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
    
    .chart-container h3 {
      font-family: 'Nunito', sans-serif;
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 1rem;
      color: var(--accent-color);
      text-align: center;
    }
    
    canvas {
      width: 100% !important;
      height: 300px !important;
    }
    
    @media (max-width: 768px) {
      .analytics-container {
        padding: 1rem;
      }
    
      h2 {
        font-size: 1.5rem;
      }
    
      .charts-grid {
        grid-template-columns: 1fr;
      }
    
      .chart-container {
        padding: 1rem;
      }
    
      canvas {
        height: 250px !important;
      }
    }
    </style>