let nav = document.querySelector(".nav-list-top");
let header = document.querySelector("header");
let mobil_Menu = document.createElement("div");
let menuBtn = document.getElementById("menuDrop");
let bar = document.querySelectorAll(".bar");

// نقل قائمة التنقل داخل القائمة المنبثقة
mobil_Menu.appendChild(nav);
header.appendChild(mobil_Menu);

console.log(header.innerHTML);
mobil_Menu.classList.add("nav-mobile-up");

// الاكواد المتواجده هنا خاصة في الدروب منيو
menuBtn.addEventListener("click", () => {
  // تبديل الكلاسات الخاصة بعرض القائمة المنبثقة وتنسيق الزر
  mobil_Menu.classList.toggle("nav-mobile");
  mobil_Menu.classList.toggle("button--radius");

  // تبديل كلاسات كل عنصر من عناصر الشريط
  for (let i = 0; i < bar.length; i++) {
    bar[i].classList.toggle(`menu-Bar${i + 1}`);
  }
});

// تغيير تصميم الهيدر عند التمرير
window.addEventListener("scroll", () => {
  if (window.scrollY > 70) {
    header.classList.add("header--scroll");
  } else {
    header.classList.remove("header--scroll");
  }
});

// ========================

let features_Resourses = [
  {
    title: "bookmark in one click",
    paragraph: `organize your bookmarks however you like. our simple
                drag-and-drop interface gives you complete control over how you
                manage favourite sites.`,
    image: "images/illustration-features-tab-1.svg",
    tap: "tap1",
  },
  {
    title: "intelligent search",
    paragraph: `our powerful search feature will help you find saved sites in no
                time at all. no need to trawl through all of your bookmarks.`,
    image: "images/illustration-features-tab-2.svg",
    tap: "tap2",
  },
  {
    title: "share your bookmarks",
    paragraph: `easily share your bookmarks and collections with others. create
                a shareable link that you can send at the click of a button.`,
    image: "images/illustration-features-tab-3.svg",
    tap: "tap3",
  },
];

// DOM
let features_title = document.getElementById("features-title");
let features_paragraph = document.getElementById("features-paragraph");
let features_image = document.getElementById("features-image");
let features_buttons_contant = document.querySelectorAll(
  ".features-buttons-contant"
);

function featureFun(tapContant) {
  features_buttons_contant.forEach((btn) => {
    btn.classList.remove("active");
  });
  for (let i = 0; i < features_Resourses.length; i++) {
    if (tapContant == features_Resourses[i].tap) {
      features_title.textContent = features_Resourses[i].title;
      features_paragraph.textContent = features_Resourses[i].paragraph;
      features_image.setAttribute("src", features_Resourses[i].image);
      features_buttons_contant[i].classList.add("active");
    }
  }
}
