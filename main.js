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

// ========================
// تعريف مصفوفة الأسئلة والأجوبة
let questions = [
  {
    id: 1,
    question: "What is Bookmark?",
    answer:
      "Bookmark is a platform for creating and designing websites using artificial intelligence, allowing you to build your site without needing programming experience.",
  },
  {
    id: 2,
    question: "How can I create a website using Bookmark?",
    answer:
      "You can use the AI-powered design tools in Bookmark to easily create a website through a simple user interface.",
  },
  {
    id: 3,
    question: "Does using Bookmark require programming knowledge?",
    answer:
      "No, using Bookmark doesn't require any programming knowledge. You can design your site using easy-to-use tools.",
  },
  {
    id: 4,
    question: "Can I customize my website design on Bookmark?",
    answer:
      "Yes, you can fully customize your website design, including colors, fonts, images, and layout.",
  },
  {
    id: 5,
    question: "Can I use Bookmark to create business websites?",
    answer:
      "Yes, you can use Bookmark to create business websites, blogs, personal sites, or any other type of website.",
  },
  {
    id: 6,
    question: "Does Bookmark provide hosting for websites?",
    answer:
      "Yes, Bookmark offers hosting for websites created on its platform.",
  },
  {
    id: 7,
    question: "What are the AI features in Bookmark?",
    answer:
      "Bookmark uses artificial intelligence to streamline the web design process quickly and accurately, offering automatic design customization based on your needs.",
  },
  {
    id: 8,
    question: "Can I edit my website after publishing it?",
    answer:
      "Yes, you can edit your website anytime after publishing it using the Bookmark interface.",
  },
  {
    id: 9,
    question: "Can I link my website to social media?",
    answer:
      "Yes, you can easily link your website to social media accounts such as Facebook, Twitter, and Instagram.",
  },
  {
    id: 10,
    question: "What are the pricing plans for Bookmark?",
    answer:
      "Bookmark offers a variety of pricing plans, including free and paid options, to suit the needs of different users.",
  },
];

// تحديد مكان عرض الأسئلة في الـ HTML
let question__place = document.querySelector(".question__place");

// تكرار عرض كل سؤال وجوابه في الـ HTML
questions.forEach((ques) => {
  question__place.innerHTML += `
      <div class="question__box">
        <div class="question__box_head">
          <h3>${ques.question}?</h3> <!-- عرض السؤال -->
          <span class="question_icon">
            <i class="fa-solid fa-angle-up icon-color-blue"></i> <!-- أيقونة إظهار/إخفاء الجواب -->
          </span>
        </div>
        <div class="question__box_answer">
          <p class="answer">${ques.answer}</p> <!-- عرض الجواب -->
        </div>
      </div>
  `;
});

// تحديد العناصر المرتبطة بالأجوبة والأيقونات
let question__box = document.querySelectorAll(".question__box");
let answer__box = document.querySelectorAll(".answer");
let question_icon = document.querySelectorAll(".question_icon");

// إضافة حدث (click) على كل مربع سؤال للإظهار أو الإخفاء
for (let i = 0; i < questions.length; i++) {
  question__box[i].addEventListener("click", () => {
    // التبديل بين إظهار/إخفاء الجواب
    answer__box[i].classList.toggle("active-answer");
    // التبديل بين إظهار الأيقونة في حال تم النقر
    question_icon[i].classList.toggle("question_icon-active");
  });
}
