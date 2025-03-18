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
