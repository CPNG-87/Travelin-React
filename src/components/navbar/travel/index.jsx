import React, { Component } from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

// apis
import {getAllDestination} from "../../../apis/destinations";
// apis

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      myLat:0,
      myLng:0,
      data:[],
    //   sampleLatLng:[
    //     {lat: -6.1719076457, lng : 106.822931708, title:"Monas", info: "<img src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg' class='card-img' style='width: 20vw; height: 20vh;' alt='...'> <h5>Monas</h5> <a class='btn btn-primary' href='#' role='button'>Detail</a>"},
    //     {lat: -6.1291, lng : 106.8334, title:"Sarinah", info: "<img src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg' class='card-img' style='width: 20vw; height: 20vh;' alt='...'> <h5>Ancol</h5> <a class='btn btn-primary' href='#' role='button'>Detail</a>"},
    //     {lat: -6.30986208815, lng : 106.818373592, title:"Sudirman", info: "<img src='https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg' class='card-img' style='width: 20vw; height: 20vh;' alt='...'> <h5>Ragunan</h5> <a class='btn btn-primary' href='#' role='button'>Detail</a>"},
    //     {lat: -6.1767269268551885, lng : 106.78942955158709, title:"Senopati", info: "<img src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg' class='card-img' style='width: 20vw; height: 20vh;' alt='...'> <h5>Pingoo</h5> <a class='btn btn-primary' href='#' role='button'>Detail</a>"},
    //     {lat: -6.193505761723598, lng : 106.82357812606989, title:"Jatinegara", info: "<img src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg' class='card-img' style='width: 20vw; height: 20vh;' alt='...'> <h5>Kahyangan</h5> <a class='btn btn-primary' href='#' role='button'>Detail</a>"},
    //     {lat: -6.223767764286747, lng : 106.83356432607016 , title:"Manggarai", info: "<img src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg' class='card-img' style='width: 20vw; height: 20vh;' alt='...'> <h5>Henshin</h5> <a class='btn btn-primary' href='#' role='button'>Detail</a>"}
    //   ]
    sampleLatLng:[]
    };
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  async componentDidMount() {
    let data=await getAllDestination({isFood:false,cityId:1});
    this.setState({
        ...this.state,
        sampleLatLng:data
    });
  }

  async componentDidUpdate(prevProps, prevState) {
    let data=await getAllDestination({isFood:false,cityId:Number(this.props.cityDestination)});
    if (this.props.cityDestination !== prevProps.cityDestination) {
        this.setState({
            ...this.state,
            sampleLatLng:data
        })
    }
  }


  render() {
    if (!this.props.google) {
      return <div>Loading...</div>;
    }


    return (
      <div
        style={{
          position: "relative",
          height: "calc(100vh - 20px)"
        }}
      >
        
        <Map google={this.props.google} zoom={14} initialCenter={{lat: -6.200000, lng: 106.816666}}>
          {/* <Marker
            onClick={this.onMarkerClick}
            position={{lat: -6.200000, lng: 106.816666}}
            icon={{
              url: "/img/icon.svg",
              anchor: [32,32],
              scaledSize: [64,64]
            }}
            name={`location`}
          /> */}
          {this.state.sampleLatLng.map((item)=>{
              return (
                <Marker
                    onClick={this.onMarkerClick}
                    position={{lat: item.lat, lng: item.lng}}
                    name={item.title}
                    image={item.image}
                />
              );
          })}
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
            <img src={this.state.selectedPlace.image} className='card-img' style={{width: "20vw", height: "20vh"}} alt='foto' />
            <h5>{this.state.selectedPlace.name}</h5>
              <a className='btn btn-primary' href='#a' role='button'>Detail</a>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyDXVTEN90-RqsvX58-X-UOw8q-93FJdMJk",
  v: "3.30"
})(MapContainer);
