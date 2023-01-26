const accardionItemHeaders = document.querySelectorAll(".accardion__item__header");
const bannerInfoBtn1 = document.querySelector(".banner__info__btn1");
const bannerInfoBtn2 = document.querySelector(".banner__info__btn2");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal__btn");
const navbarBtn = document.querySelector(".navbar__btn");

const discripLink1 = document.querySelectorAll(".discrip_link1");
const discripLink2 = document.querySelectorAll(".discrip_link2");
const discripContentSlider1 = document.querySelectorAll(".discrip__content_slider1");
const discripContentSlider2 = document.querySelectorAll(".discrip__content_slider2");
const discripLink = document.querySelectorAll(".discrip_link");
const navbarBtnsOpen = document.querySelector(".navbar_btns_open");
const navbarBtnsClose = document.querySelector(".navbar_btns_close");
const navbarNav = document.querySelector(".navbar__nav");
const scrollBtn = document.querySelector(".scroll__btn")


//============== code ================

// scroll btn

window.addEventListener("scroll", ()=>{
  scrollBtn.classList.toggle("open", window.scrollY>500)
})
scrollBtn.addEventListener("click",()=>{
  document.documentElement.scrollTop = 0;
})
//navbar open & close hanburgetr btn

navbarBtnsOpen.addEventListener("click", () => {
  navbarBtnsOpen.classList.toggle("close");
  navbarBtnsClose.classList.toggle("open");
  navbarNav.classList.add("open");
  navbarNav.classList.remove("close");
  navbarBtn.classList.add("open")
  navbarBtn.classList.remove("close")
});
navbarBtnsClose.addEventListener("click", () => {
  navbarBtnsClose.classList.toggle("open");
  navbarBtnsOpen.classList.toggle("close");
  navbarNav.classList.add("close");
  navbarNav.classList.remove("open");
  navbarBtn.classList.add("close")
  navbarBtn.classList.remove("open")
});
navbarNav.addEventListener("click", ()=>{
  navbarNav.classList.remove("open")
  navbarBtnsClose.classList.remove("open")
  navbarBtnsOpen.classList.remove("close")
  navbarBtn.classList.remove("open")
})
navbarBtn.addEventListener("click", ()=>{
  navbarNav.classList.remove("open")
  navbarBtnsClose.classList.remove("open")
  navbarBtnsOpen.classList.remove("close")
  navbarBtn.classList.remove("open")
})


//   acargion item
accardionItemHeaders.forEach((accardionItemHeader) => {
  accardionItemHeader.addEventListener("click", () => {
    accardionItemHeader.classList.toggle("static");
  });
});

//modal open va close
navbarBtn.addEventListener("click", () => {
  modal.classList.add("open");
  modal.classList.remove("close");
});
bannerInfoBtn1.addEventListener("click", () => {
  modal.classList.add("open");
  modal.classList.remove("close");
});
bannerInfoBtn2.addEventListener("click", () => {
  modal.classList.add("open");
  modal.classList.remove("close");
});

modalBtn.addEventListener("click", () => {
  modal.classList.add("close");
  modal.classList.remove("open");
});

//open data
discripLink1.forEach((dis1) => {
  dis1.addEventListener("click", () => {
    discripContentSlider1.forEach((sil1) => {
      sil1.classList.add("open");
    });
    discripContentSlider1.forEach((sil1) => {
      sil1.classList.remove("close");
    });
    discripContentSlider2.forEach((sil2) => {
      sil2.classList.add("close");
    });
    discripContentSlider2.forEach((sil2) => {
      sil2.classList.remove("open");
    });
  });
});
discripLink2.forEach((dis2) => {
  dis2.addEventListener("click", () => {
    discripContentSlider1.forEach((sil1) => {
      sil1.classList.add("close");
    });
    discripContentSlider1.forEach((sil1) => {
      sil1.classList.remove("open");
    });
    discripContentSlider2.forEach((sil2) => {
      sil2.classList.add("open");
    });
    discripContentSlider2.forEach((sil2) => {
      sil2.classList.remove("close");
    });
  });
});

discripLink.forEach((disLink) => {
  disLink.addEventListener("click", () => {
    disLink.classList.toggle("row");
  });
});


