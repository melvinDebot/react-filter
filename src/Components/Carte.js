import React from 'react';
import './../App.scss';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class App extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14} initialCenter={{
        lat: 48.853,
        lng: 2.35
      }}>
        <Marker onClick={this.onMarkerClick}
          name={'Current location'} />
        <InfoWindow onClose={this.onInfoWindowClose}>
            <div>
              <h1>Carte</h1>
            </div>
        </InfoWindow>
      </Map>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: ("AIzaSyA2n7hH6W6cHvZdRX2kBmL0b21ev6WWjag")
})(App)