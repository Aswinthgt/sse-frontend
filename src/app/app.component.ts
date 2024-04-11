import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventService } from './service/event.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  sse = inject(EventService);
  cdf = inject(ChangeDetectorRef)
  value = 0;

  start_event() {
    this.sse.getEventData().subscribe({
      next: (data: any) => {
        console.log(data)
        this.value = data;
        this.cdf.detectChanges();
      }
    });

  }
  
}
