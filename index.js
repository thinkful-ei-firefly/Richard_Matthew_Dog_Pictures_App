'use strict';

const getPics = num => {
  fetch(`https://dog.ceo/api/breeds/image/random/${num}`, { mode: "cors" })
    .then(res => res.json())
    .then(resJson => {
      let results = resJson.message;
      console.log(results);
      return displayPhotos(results);
    })
    .catch(err => console.log(err));
};

const displayPhotos = arr => {
  const images = arr.map(url => mapUrlToImg(url)).join("");
  $(".dog-pics").html(images);
};

const mapUrlToImg = url => `<img src="${url}" alt="dog pic">`;

const handleSubmit = () => {
  $("main").on("submit", ".form", e => {
    e.preventDefault();
    const num = $(".input").val();
    getPics(num ? num : 3);
  });
};
const main = () => handleSubmit();
$(main);
