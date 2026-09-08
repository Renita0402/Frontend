const cardImg = document.getElementById('cardImg');
cardImg.src = "https://hblimg.mmtcdn.com/content/hubble/img/countryimages/mmt/activities/m_Norway_destination_landscape_image_1_l_1191_1789.jpg";

const btn = document.getElementById('btn');
const details = document.querySelector('.details');

btn.addEventListener('click', () => {
  details.classList.toggle('hide');
});