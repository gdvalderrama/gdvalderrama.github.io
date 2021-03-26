<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>
    <slot/>
    <footer class="footer">
      <p class="home-links">
        <a href="https://www.linkedin.com/in/guiomarvalderrama/" target="_blank" rel="noopener">
          <font-awesome :icon="['fab', 'linkedin']" color="#2867B2" size="lg"/>
        </a>
        <a href="https://github.com/gdvalderrama" target="_blank" rel="noopener">
          <font-awesome :icon="['fab', 'github']" color="#24292e" size="lg"/>
        </a>
        <a href="https://medium.com/@guival4" target="_blank" rel="noopener">
          <font-awesome :icon="['fab', 'medium']" color="#000" size="lg"/>
        </a>
      </p>
    </footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}

.home-links a {
  margin-right: 1rem;
}

.img-center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
