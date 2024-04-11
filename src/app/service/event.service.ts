import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  sse!: EventSource

  getEventData(){
    return new Observable(obs=>{
      this.sse = new EventSource('http://localhost:3000/curr-count');

      this.sse.onerror = (error) => {
        console.log(error);
      }
  
      this.sse.onmessage = (message) => {
            obs.next(JSON.parse(message.data).count);
      }
    })
  }
}
