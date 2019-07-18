async function getPics(num) {
  const res = await fetch(`https://dog.ceo/api/breeds/image/random/${num}`, {
    mode: "cors"
  });
  const resJson = await res.json();
  displayPhotos(resJson.message);
}

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
