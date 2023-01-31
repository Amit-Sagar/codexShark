const categoriesData = [
  "Mobikwik Recharge",
  "Health & Beauty",
  "Services",
  "Fashion & Apparels",
  "Travel",
  "Flowers & Gifts",
  "Electronics",
  "Food & Grocery",
  "Baby Care and Toys",
  "Domain & Hosting",
  "Laptop and PC Accessories",
  "Home & Kitchen",
  "Entertainment",
  "Gaming",
  "Jewellery",
];
const slider = document.getElementsByClassName("swiper-wrapper");
const storeList = document.getElementById("store");
var initialIndex = 0;
var lastIndex = 20;

$.getJSON("data.json", function (data) {
  const storeData = data.stores;
  getCategoryList(categoriesData);
  getStoreList(storeData, lastIndex);
  paginator(storeData);
});

const getStoreList = (list, endIndex) => {
  storeList.innerHTML = "";
  list.slice(initialIndex, endIndex).forEach((item) => {
    let div = document.createElement("div");
    div.classList.add("card_list");
    div.innerHTML = `
    <img src="${item.logo}"></img>
    <p>${item.merchant}</p>
    `;
    storeList.appendChild(div);
  });
};

const getCategoryList = (data) => {
  if (window.innerWidth > 1024) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 6,
      spaceBetween: 20,
      slidesPerGroup: 6,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (window.innerWidth > 768) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 4,
      spaceBetween: 20,
      slidesPerGroup: 4,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else if (window.innerWidth > 350) {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 2,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  data.forEach((item, index) => {
    swiper.appendSlide([
      `
        <div class="swiper-slide">${item}</div>
        `,
    ]);
  });
};

const paginator = (data) => {
  window.addEventListener("scroll", () => {
    if (
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight
    ) {
      setTimeout(() => {
        lastIndex += 10;
        getStoreList(data, lastIndex);
      }, 300);
    }
  });
};