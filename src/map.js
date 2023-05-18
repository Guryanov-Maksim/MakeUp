const baseUrl = 'https://api-maps.yandex.ru'
const apiKey = '48c83221-ea67-4ada-abb6-d05f32ffa30d';
const apiVersion = '2.1';
const url = `${baseUrl}/${apiVersion}/?apikey=${apiKey}&lang=ru_RU`;
const homeCoordinates = [55.596102, 38.117101];

const fetchYmaps = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';
    script.onload = resolve;
    script.onerror = reject;
    script.src = url;
    script.async = 'async';

    document.head.appendChild(script);
  });
};

window.addEventListener("load", (event) => {
  fetchYmaps(url)
    .then((api) => {
      ymaps.ready(() => {
        const myMap = new ymaps.Map(
          'map',
          {
            center: homeCoordinates,
            zoom: 18,
            type: 'yandex#map'
          }, {
            searchControlProvider: 'yandex#search'
          }
        );

        const homeObject = new ymaps.GeoObject({
          geometry: {
            type: "Point",
            coordinates: homeCoordinates,
          }
        });

        myMap.geoObjects.add(homeObject);
      })
    })
    .catch((e) => console.error(e));
});
