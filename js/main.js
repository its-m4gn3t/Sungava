const loadPage = page_name => {
  fetch(`${page_name}.html`).then( resp => { resp.text().then ( markup => {
      document.querySelector('#app').innerHTML = markup;
    }) 
  })
}

const loadMainPage = () => {
  fetch('app.html').then( resp => { resp.text().then ( markup => {
      document.querySelector('#app').innerHTML = markup;
    }) 
  })
}

const bodyHistory = [];

function registerHandler() {
  document.getElementById("about").onclick = (_event) => {
    _event.preventDefault();
    loadPage('about').then( markup => {
      history.pushState({}, "", "/about");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
}

onpopstate = (_event) => {
  const previousContent = bodyHistory.pop();

  if (previousContent) {
    document.body.innerHTML = previousContent;
    registerHandler();
  }
};


$$( () => {
  loadMainPage();
  registerHandler();
})
