const d = document,
  w = window;

const menuContent = document.querySelector(".menu");
const menu = d.querySelector(".list-container");
const linksMenu = d.querySelectorAll(".list a");
const btnUp = d.querySelector(".btn-Up");
const abajo = d.getElementById("abajo");

let scroll_Zero = w.pageYOffset;

d.addEventListener("DOMContentLoaded", () => {
  LinkActive();
  MostrarMenu();
  Subir();
  irAbajo();
  /* scrollSpy(); */
});

w.addEventListener("scroll", () => {
  let scrollTop = d.documentElement.scrollTop;
  if (scrollTop > 600) {
    btnUp.classList.add("active");
  } else {
    btnUp.classList.remove("active");
  }
});

/* FUNCIONES */
const Subir = () => {
  btnUp.addEventListener("click", () => {
    w.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  });
};
const irAbajo = () => {
  abajo.addEventListener("click", () => {
    w.scrollTo({
      behavior: "smooth",
      top: 600,
    });
  });
};
const LinkActive = () => {
  linksMenu.forEach((element) => {
    element.addEventListener("click", () => {
      linksMenu.forEach((element) => element.classList.remove("active"));
      element.classList.add("active");
    });
  });
};

const MostrarMenu = () => {
  d.addEventListener("click", (e) => {
    e.target.matches(".btn-menu *")
      ? menu.classList.toggle("active")
      : menu.classList.remove("active");
  });
};

//Scroll Efect

window.onscroll = () => {
  let scrollEvento = window.pageYOffset;
  if (scroll_Zero < 600) {
    menuContent.style.borderBottom = "none";
  } else if (scrollEvento > scroll_Zero && scroll_Zero > 600) {
    menuContent.style.transform = "translateY(-60px)";
    menuContent.style.borderBottom = "none";
    menu.classList.remove("active");
  } else {
    menuContent.style.transform = "translateY(0)";
    menuContent.style.borderBottom = ".3rem solid #ff2e63";
  }
  scroll_Zero = scrollEvento;
};
