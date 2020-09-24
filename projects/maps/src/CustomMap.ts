interface Mapable {
  location: {
    lat: number;
    lng: number;
  };
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
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
    });
  }
}