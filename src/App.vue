<script setup>
import { ref, computed } from 'vue'
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const route = useRoute()
const router = useRouter()
let data = ref([])
fetch('/data.json').then(res => res.json())
	.then(d => {
		data.value = d
		router.push('/')
	})

const activeData = computed(() => data.value.filter(e => e.id == route.meta.content_id))
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->


    <div class="wrapper">
      <!-- <HelloWorld msg="You did it!" /> -->
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
		<RouterLink to="/other">Other</RouterLink>
		<RouterLink to="/cheese">Cheese</RouterLink>
      </nav>
	  
	  <div style="border: 1px solid #333; border-radius: 4px; padding: 8px; width: 100%; ">
		
		<p>Route Meta:</p>
		<pre>{{ route.meta }}</pre>
		<p>Active JSON Data:</p>
		<pre>{{activeData}}</pre>
	  </div>

    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
