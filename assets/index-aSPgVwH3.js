(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})(),document.querySelector(`#app`).innerHTML=`
  <nav class="nav">
    <h2>Ethan Zambrano</h2>
    <div>
      <a href="#">Home</a>
      <a href="#projects">Projects</a>
      <a href="#">Homelab</a>
      <a href="#">Contact</a>
    </div>
  </nav>

  <section class="hero fade-in">
    <div class="hero-content">
      <h1>Aspiring IT Support Specialist</h1>
      <p>
        I troubleshoot technical issues, support users, and document solutions clearly.
        Currently building hands-on experience through projects and a personal IT homelab.
      </p>

      <div class="hero-buttons">
        <a href="#" class="btn primary">About Me</a>
        <a href="#" class="btn primary">Contact</a>
      </div>
    </div>
  </section>

  <section class="section fade-in">
    <h1>What I Do</h1>
    <div class="card-grid">
      <div class="card">
        <h3>Troubleshooting</h3>
        <p>Diagnosing and resolving technical issues using a structured approach.</p>
      </div>

      <div class="card">
        <h3>Customer Support</h3>
        <p>Helping users clearly and efficiently, with a focus on communication.</p>
      </div>

      <div class="card">
        <h3>Continuous Learning</h3>
        <p>Building hands-on experience through labs, projects, and real scenarios.</p>
      </div>
    </div>
  </section>

  <section id="projects" class="section">
  </section>
`;