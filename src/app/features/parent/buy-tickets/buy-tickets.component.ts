import { Component, OnInit } from '@angular/core';
import { EventService } from '../../../core/service/event.service';
import { Ticket } from '../../../core/model/ticket.model';
import { UserService } from '../../../core/service/user.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ResponsiveService } from '../../../core/service/responsive.service';
import { VenueService } from '../../../core/service/venue.service';

import { Section } from '../../../core/model/section.model';

@Component({
    selector: 'app-buy-tickets',
    templateUrl: './buy-tickets.component.html',
    styleUrls: ['./buy-tickets.component.scss']
})
export class BuyTicketsComponent implements OnInit {

    eventId: number;

    tickets: Ticket[];

    selectedTicket: Ticket;

    imageURLs: string[];

    imageSelector: number;

    pathIds: string[] = ['top', 'right', 'bottom', 'left'];

    pathToLocation: Map<string, number> = new Map(
        [['top', 1], ['right', 2], ['bottom', 3], ['left', 4]]);

    locationToPath: Map<number, string> = new Map(
        [[1, 'Top'], [2, 'Right'], [3, 'Bottom'], [4, 'Left']]);

    is_supporters_map = false;

    aus_colours = ['#fcba03', '#406b00'];
    china = ['#ff0000', '#ff0000'];

    constructor(private eventService: EventService,
                private userService: UserService,
                private venueService: VenueService,
                private router: Router,
                private route: ActivatedRoute,
                public responsive: ResponsiveService) {
    }

    ngOnInit(): void {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.eventId = Number(params.get('eventId'));
            this.eventService.getEvent(this.eventId).subscribe(data => {
                if (data.sport.name === "Football") {
                  this.is_supporters_map = true;
                }
            });

            // ew
            this.eventService.getTickets(this.eventId).subscribe(data => {
                this.tickets = data;
            });

            this.eventService.getSections(this.eventId).subscribe(data => {
                // assuming this data is ordered with section locations ascending
                this.imageURLs = data.map((section: Section) => section.imageURL);
                this.selectSection("top");
            });
        });
    }

    buyTicket() {
        this.userService.buyTicket(this.selectedTicket.id).subscribe(() => {
            this.router.navigate(['/my-tickets'])
        });
    }

  selectSection(elementId: string) {
    // Deselect other sections
    this.pathIds.forEach(id => {
      let element = document.getElementById(id);
      if (element) {
        element.classList.remove('selected');
      }
    })
    // Select this section
    let element = document.getElementById(elementId);
    console.log(element)
    if (element) {
      element.classList.add('selected');
    }

    // Update VR Image
    const index = this.pathToLocation.get(elementId);
    if (index != undefined) {
      this.imageSelector = index;
    }
  }
}
