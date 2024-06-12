let buttons = document.querySelectorAll(".button-slider li a");
let titles = document.querySelectorAll(".title-slider-list li");

function MyClicked() {
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      for (let i of buttons) {
        i.classList.remove("active");
      }

      if (btn.className !== "active") {
        this.classList.add("active");
      }

      titles.forEach(function (title) {
        if (title.id === btn.id) {
          title.classList.add("active");
        } else {
          title.classList.remove("active");
        }
      });
    });
  });
}

MyClicked();

// Dark Mode & Light Mode

let DarkMode = document.querySelector(".mode ion-icon");
let DarkModeName = document.querySelector(".mode ion-icon").attributes[0];
let root = document.querySelector(":root");

function DarkAndLight() {
  DarkMode.addEventListener("click", function () {
    if (DarkModeName.value === "sunny-outline") {
      DarkMode.setAttribute("name", "moon-outline");
      DarkModeName.value = "moon-outline";
      root.classList.add("active");
    } else {
      DarkMode.setAttribute("name", "sunny-outline");
      DarkModeName.value = "sunny-outline";
      root.classList.remove("active");
    }
  });
}

DarkAndLight();

function closeInspect() {
  document.onkeydown = function (e) {
    if (e.key === "f12") {
      return false;
    }

    if (e.ctrlKey && e.key === "u") {
      return false;
    }

    if (e.ctrlKey && e.key === "c") {
      return false;
    }

    if (e.ctrlKey && e.key === "v") {
      return false;
    }
  };

  document.oncontextmenu = function () {
    return false;
  };
}

closeInspect();

let translateArabic = document.querySelector(".translate .arabic");
let translateEnglish = document.querySelector(".translate .english");
let parent = document.querySelector(".parent");

const translations = {
  ar: {
    ronaldo: "رونالدو",
    benzema: "بنزيما",
    luka: "لوكا",
    bale: "بيلي",
    p1: "هو لاعب كرة قدم برتغالي يلعب كمهاجم لنادي النصر السعودي في الدوري السعودي للمحترفين، وهو قائد المنتخب البرتغالي. غالبًا ما يُعتبر أحد أفضل اللاعبين في العالم، ويعتبره الكثيرون واحدًا من أعظم اللاعبين في تاريخ كرة القدم، وقد فاز رونالدو بخمس كرات ذهبية كأكثر لاعب أوروبي.",
    p2: "كريم مصطفى بنزيما هو لاعب كرة قدم فرنسي محترف يلعب كمهاجم لنادي الاتحاد السعودي",
    p3: "لوكا مودريتش هو لاعب كرة قدم كرواتي محترف يلعب في مركز الوسط لاعب خط وسط لنادي ريال مدريد الإسباني وقائد منتخب كرواتيا الفريق الوطني",
    p4: "لقد لعب مع مودريتش في ريال مدريد منذ عام 2013، وشكل فريقًا الثلاثي الهجومي القاتل المكون من بنزيما وكريستيانو رونالدو الفوز بأربعة ألقاب لدوري أبطال أوروبا"
  },

  en: {
    ronaldo: "Ronaldo",
    benzema: "Benzema",
    luka: "Luka",
    bale: "Bale",
    p1: "He is a Portuguese footballer who plays as a striker for the Saudi Al-Nasr Club in the Saudi Professional League and is the captain of the Portuguese national team. Often considered one of the best players in the world, and considered by many to be one of the greatest players in football history, Ronaldo has won five Ballon d'Ors as the most European player.",
    p2: "Karim Mostafa Benzema is a French professional footballer who plays as a striker for Saudi Pro League club Al-Ittihad.",
    p3: "Luka Modrić is a Croatian professional footballer who plays as a midfielder for La Liga club Real Madrid and captains the Croatia national team.",
    p4: "He has played with Modrić in Real Madrid since 2013, forming a lethal attacking trio with Benzema and Cristiano Ronaldo and winning four UEFA Champions League titles."
  }
};

translateArabic.addEventListener("click", function () {
  translateEnglish.classList.add("en");
  translateArabic.classList.add("ar");
  setLanguage(translateArabic.getAttribute("data-arabic"));

  parent.style.direction = "rtl";
});

function setLanguage(language) {
  const elements = document.querySelectorAll("[data-title]");
  elements.forEach(function (element) {
    const translateKey = element.getAttribute("data-title");
    element.textContent = translations[language][translateKey];
    console.log(translations[language][translateKey]);
  });
}

translateEnglish.addEventListener("click", function () {
  translateEnglish.classList.remove("en");
  translateArabic.classList.remove("ar");
  setLanguage(translateEnglish.getAttribute("data-english"));

  parent.style.direction = "ltr";
});
