interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map; 
  constructor(divID: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divID), {
      zoom: 1,
      center: { lat: 0, lng: 0 }
    });
  }

  addMarker(mapable: Mapable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mapable.markerContent()
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}