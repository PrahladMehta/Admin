<template>
  <div class="users-container">
    <h2>User Profits</h2>
    <div class="table-responsive">
      <table class="users-table">
        <thead>
          <tr>
            <th @click="sortBy('name')">
              User
              <ArrowUpDown v-if="sortKey !== 'name'" />
              <ChevronUpIcon v-else-if="sortOrder === 'asc'" />
              <ChevronDownIcon v-else />
            </th>
            <th @click="sortBy('productsListed')">
              Products Listed
              <ArrowUpDown v-if="sortKey !== 'productsListed'" />
              <ChevronUpIcon v-else-if="sortOrder === 'asc'" />
              <ChevronDownIcon v-else />
            </th>
            <th @click="sortBy('profit')">
              Profit
              <ArrowUpDown v-if="sortKey !== 'profit'" />
              <ChevronUpIcon v-else-if="sortOrder === 'asc'" />
              <ChevronDownIcon v-else />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in sortedUsers" :key="user.id" :class="{ 'top-seller': user.isTopSeller }">
            <td>
              {{ user.name }}
              <StarIcon v-if="user.isTopSeller" class="star-icon" />
            </td>
            <td>{{ user.productsListed }}</td>
            <td>₹{{ user.profit.toFixed(2) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { StarIcon, ArrowUpDown, ChevronUpIcon, ChevronDownIcon } from 'lucide-vue-next';


const users = ref([
  { id: 1, name: 'John Doe', productsListed: 15, profit: 5000.50 },
  { id: 2, name: 'Jane Smith', productsListed: 22, profit: 7500.75 },
  { id: 3, name: 'Bob Johnson', productsListed: 10, profit: 3200.25 },
  { id: 4, name: 'Alice Brown', productsListed: 18, profit: 6100.00 },
  { id: 5, name: 'Charlie Davis', productsListed: 25, profit: 8500.50 },
]);

const sortKey = ref('profit');
const sortOrder = ref('desc');

const sortBy = (key) => {
  if (sortKey.value === key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc';
  } else {
    sortKey.value = key;
    sortOrder.value = 'desc';
  }
};

const sortedUsers = computed(() => {
  const sorted = [...users.value].sort((a, b) => {
    if (a[sortKey.value] < b[sortKey.value]) return sortOrder.value === 'asc' ? -1 : 1;
    if (a[sortKey.value] > b[sortKey.value]) return sortOrder.value === 'asc' ? 1 : -1;
    return 0;
  });

  // Find the top seller
  const topSeller = sorted[0];
  sorted.forEach(user => {
    user.isTopSeller = user.id === topSeller.id;
  });

  return sorted;
});
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');

.users-container {
  padding: 2rem;
  color: var(--text-color);
  background-color: var(--bg-color);
  min-height: 100vh;
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

.users-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background-color: var(--card-bg-color);
  border-radius: 8px;
  overflow: hidden;
}

.users-table th,
.users-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid rgba(236, 240, 241, 0.1);
}

.users-table th {
  background-color: var(--primary-color);
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
  color: var(--accent-color);
  cursor: pointer;
  user-select: none;
  transition: background-color 0.3s ease;
}

.users-table th:hover {
  background-color: var(--secondary-color);
}

.users-table th svg {
  vertical-align: middle;
  margin-left: 0.5rem;
}

.users-table tbody tr:hover {
  background-color: rgba(52, 152, 219, 0.1);
}

.top-seller {
  background-color: rgba(46, 204, 113, 0.1);
}

.top-seller:hover {
  background-color: rgba(46, 204, 113, 0.2) !important;
}

.star-icon {
  color: #f1c40f;
  vertical-align: middle;
  margin-left: 0.5rem;
}

@media (max-width: 768px) {
  .users-container {
    padding: 1rem;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .users-table th,
  .users-table td {
    padding: 0.75rem;
  }

  .users-table th {
    font-size: 0.8rem;
  }
}
</style>