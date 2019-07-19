'use strict';

const getPics = num => {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`, { mode: "cors" })
    .then(res => res.json())
    .then(resJson => displayPhotos(resJson.message))
    .catch(err => console.log(err));
};

const displayPhotos = arr => {
  const images = arr.map(url => mapUrlToImg(url)).join("");
  const section = document.querySelector(".dog-pics");
  section.innerHTML = images;
};

const mapUrlToImg = url => `<img src="${url}" alt="dog pic">`;

const main = () => {
  $("main").on("submit", ".form", e => {
    e.preventDefault();
    const num = $(".input").val();
    getPics(num);
  });
};
$(main);
