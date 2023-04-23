var translate = {
  "Illust": {
    "mn": "Дижитал зураг",
    "en": "Illustrations",
  },
  "Logo": {
    "mn": "Лого, Бренд",
    "en": "Logo, Branding"
  },
  "Posters": {
    "mn": "Сошиал Постерууд",
    "en": "Social Posters"
  },
  "UI": {
    "mn": "Интерфэйс дизайн",
    "en": "UI Designs"
  },
  "AR": {
    "mn": "Филтерүүд",
    "en": "AR Filters"
  },
  "Book": {
    "mn": "Номны дизайн",
    "en": "Book Design"
  },
  "Photo": {
    "mn": "Зураг Авалт",
    "en": "Photo Shooting"
  },
  "finding": {
    "mn": "Төсөөлшгүйгээс гоо үзэсгэлэнг олох нь",
    "en": "Finding beauty in the unexpected"
  },
  "Whatcan": {
    "mn": "Би танд юу хийж өгч чадах вэ?",
    "en": "What can I do for you?"
  },
  "myProject": {
    "mn": "Миний бүтээлүүд",
    "en": "My Projects"
  },
  "Aboutme": {
    "mn": "Миний тухай",
    "en": "About Me"
  },
  "About-me-desc": {
    "mn": `Сайн уу, Намайг Бажу гэдэг. Одоогоор СЭЗИС-д Мэдээллийн Системийн Менежментээр суралцаж байгаа бөгөөд өөрийн сонирхлын дагуу График Дизайны бүтээлүүд хийдэг. `,
    "en": `Hi, my name is Baju, I am an Graphic Designer, becoming UI/UX
    Designer. An eternally creative soul, it is my firm belief that by
    connecting to our intuition we can weave together beautifully
    crafted stories that can capture the imagination and authentically
    engage the world.`
  },
  "Manif": {
    "mn": "Манифиесто",
    "en": "Manifiesto"
  },
  "Manif-des": {
    "mn": `Бүтээлч байх нь сэтгэлээс эхэлдэг. Миний эрхэм зорилго бол таны оюун санааны бүтээлч сэтгэлгээг үзэсгэлэнтэй зүйл рүү чиглүүлэх явдал юм.`,
    "en": `Being creative goes beyond a brushstroke. Being creative starts from
    the soul. My mission is to channel your soulful creativity into
    something beautiful.`
  },

};

const selectLang = document.getElementById("i18n");

selectLang.addEventListener('change', changeLanguage);

function changeLanguage(event) {
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach(element => {
    if (event.target.value === 'english') {
      element.innerText = translate[element.getAttribute('data-i18n')].en
    } else {
      element.innerText = translate[element.getAttribute('data-i18n')].mn
    }
  })
}

function init() {
  const elements = document.querySelectorAll("[data-i18n]")
  elements.forEach(element => {
    element.innerText = translate[element.getAttribute('data-i18n')].en
  })
}

init();