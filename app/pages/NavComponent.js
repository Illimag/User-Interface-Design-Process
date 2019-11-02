class NavComponent extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      
      <h1>Process Book</h1>
      <div class="line"></div>
      <h3 id="intro"><a href="intro.html">Introduction</a></h3>
      <div class="line"></div>
      <h3 id="stack"><a href="stack.html">Technology Stack</a></h3>
      <div class="line"></div>
      <h3 id="flow"><a href="flow.html">Work Flow</a></h3>
      <div class="line"></div>
      <h3 id="case_study"><a href="case_study.html">Case Study</a></h3>
      <h5 id="case0"><a href="case0.html">Dominos Visually Impaired Application</a></h5>
      <h5 id="case1"><a href="case1.html">Craiglist and Amazon Interactive Kiosk</a></h5>
      <h5 id="case2"><a href="case2.html">Airport Kiosk</a></h5>
      <div class="line"></div>

      `;
    }
  }
  
  customElements.define('navigation-component', NavComponent);