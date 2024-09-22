class TabView {
  openContentTab() {
    document.querySelector("#nav-add-tab").classList.remove("active");
    document.querySelector("#nav-content-tab").classList.add("active");
    document.querySelector("#nav-css-tab").classList.remove("active");

    document.querySelector("#nav-add").classList.remove("show");
    document.querySelector("#nav-add").classList.remove("active");

    document.querySelector("#nav-content").classList.add("show");
    document.querySelector("#nav-content").classList.add("active");

    document.querySelector("#nav-css").classList.remove("show");
    document.querySelector("#nav-css").classList.remove("active");
  }
  
  openAddTab() {
    document.querySelector("#nav-add-tab").classList.add("active");
    document.querySelector("#nav-content-tab").classList.remove("active");
    document.querySelector("#nav-css-tab").classList.remove("active");

    document.querySelector("#nav-add").classList.add("show");
    document.querySelector("#nav-add").classList.add("active");

    document.querySelector("#nav-content").classList.remove("show");
    document.querySelector("#nav-content").classList.remove("active");

    document.querySelector("#nav-css").classList.remove("show");
    document.querySelector("#nav-css").classList.remove("active");
  }

  closeAllEditors() {
    document.querySelectorAll(".editor").forEach(function(item) {
      item.style.display = "none";
    });
  }
}

const tabView = new TabView();

export { tabView };