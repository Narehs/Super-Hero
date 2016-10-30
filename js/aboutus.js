function initMap() {
        var uluru = {lat: 63.433014, lng: 10.403148};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 17,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
  }