import { Activities } from "../main-container/results/swiper/activity/activities.model";

export class TripAssistantService {
  private activities: Activities[];
  private hotels: {}[];
  private type: string = 'request';
  private request: string='';
  private response: string;
  private responseQuery: string;
  private showSpinner: boolean = false;

  setActivities(activities) {
    this.activities = activities;
  }

  setHotels(hotels){
    this.hotels = hotels;
  }

  setType(type){
    this.type = type;
  }

  setRequest(request){
    this.request = request;
  }
  
  setResponse(response){
    this.response = response;
  }
  
  setResponseQuery(responseQuery){
    this.responseQuery = responseQuery;
  }
  
  setShowSpinner(showSpinner){
    this.showSpinner = showSpinner;
  }

  getActivities() {
    return this.activities.slice();
  }

  getHotels() {
    return this.hotels.slice();
  }

  getType() {
    return this.type;
  }

  getRequest() {
    return this.request;
  }

  getResponse() {
    return this.response;
  }

  getResponseQuery() {
    return this.responseQuery;
  }

  getShowSpinner() {
    return this.showSpinner;
  }
}