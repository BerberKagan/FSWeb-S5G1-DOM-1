const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  "nav": {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  "cta": {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "iletisim": {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  "footer": {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
const baslikListe = document.querySelectorAll('nav a');

/* baslikListe[0].textContent = siteContent.nav["nav-item-1"];
baslikListe[1].textContent = siteContent.nav["nav-item-2"];
baslikListe[2].textContent = siteContent.nav["nav-item-3"];
baslikListe[3].textContent = siteContent.nav["nav-item-4"];
baslikListe[4].textContent = siteContent.nav["nav-item-5"];
baslikListe[5].textContent = siteContent.nav["nav-item-6"]; */

const navArray = baslikListe.forEach((element, index) => {
  element.textContent = siteContent.nav[`nav-item-${index + 1}`];
  baslikListe[index].setAttribute('class', 'italic');
});

const footerListe = document.querySelectorAll('footer a');
for (let index = 0; index<footerListe.length; index++) {
  footerListe[index].textContent = siteContent.footer.copyright;
  footerListe[index].setAttribute('class', 'bold');
}

const image1 = document.querySelector('.logo');
image1.setAttribute('src', 'http://localhost:9000/img/logo.png');

const image2 = document.querySelector('#cta-img');
image2.setAttribute('src', 'http://localhost:9000/img/cta.png');

const image3 = document.querySelector('.middle-img');
image3.setAttribute('src', 'http://localhost:9000/img/accent.png');

const ctaTexth1 = document.querySelector('.cta-text h1');
ctaTexth1.textContent = siteContent.cta.h1;

const button = document.querySelector('.cta-text button');
button.textContent = siteContent.cta.button;