window.onload = function () {
    // Создает экземпляр карты и привязывает его к созданному контейнеру
    var map = new YMaps.Map(document.getElementById("map"));
    // Создает метку в центре Москвы
    var placemark = new YMaps.Placemark(new YMaps.GeoPoint(37.56802150, 55.80507807), {preset: 'twirl#redIcon'});
  
    // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    map.setCenter(new YMaps.GeoPoint(37.56802150, 55.80507807), 20);
    // Добавляет метку на карту
    map.addOverlay(placemark); 
  
  
};