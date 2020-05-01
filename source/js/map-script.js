// карта на главной

ymaps.ready(function () {
  let myMap = new ymaps.Map('map', {
          center: [59.9365, 30.3212],
          zoom: 15.5,
          controls: []
      });

      myMap.controls.add('zoomControl');

      //  кастомная иконка
      myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#image',
          // Своё изображение иконки метки.
          iconImageHref: '/img/icon-map-marker.svg',
          // Размеры метки.
          iconImageSize: [36, 35],
          // смещение маркера
          iconImageOffset: [-18, 15]
      });

  myMap.geoObjects
      .add(myPlacemark);
});
