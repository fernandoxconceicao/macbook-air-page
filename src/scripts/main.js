const colornavItems = document.querySelectorAll('.colornav-item');
const imageIds = ['imageSide', 'imageMagsafe', 'imageTop'];
const imageTypes = ['side', 'magsafe', 'top'];

colornavItems.forEach(item => {
  item.addEventListener('click', () => {
    const color = item.getAttribute('data-color');

    imageIds.forEach((id, index) => {
      const imageElement = document.getElementById(id);
      if (imageElement) {
        imageElement.src = `./src/images/colors/design_${imageTypes[index]}_${color}.jpg`;
      }
    });

    colornavItems.forEach(navItem => navItem.classList.remove('current'));
    item.classList.add('current');
  });
});