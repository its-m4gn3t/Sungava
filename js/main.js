async function loadPage(page_name) {
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
  document.getElementById("gallery").onclick = (_event) => {
    _event.preventDefault();
    loadPage('gallery1').then( markup => {
      history.pushState({}, "", "/gallery");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("blog").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("contactUs").onclick = (_event) => {

    _event.preventDefault();
    loadPage('contactUs').then( markup => {
      history.pushState({}, "", "/contactUs");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("blog").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("about_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('about').then( markup => {
      history.pushState({}, "", "/about");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("gallery_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('gallery1').then( markup => {
      history.pushState({}, "", "/gallery");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("blog_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("contactUs_").onclick = (_event) => {

    _event.preventDefault();
    loadPage('contactUs').then( markup => {
      history.pushState({}, "", "/contactUs");

      bodyHistory.push(document.body.innerHTML);
      document.body.innerHTML = markup;
    })
  };
  document.getElementById("blog_").onclick = (_event) => {
    _event.preventDefault();
    loadPage('blog').then( markup => {
      history.pushState({}, "", "/blog");

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
