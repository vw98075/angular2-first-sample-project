import { Component } from '@angular/core';

@Component({
  selector: 'about',
  template: `<h3>About this App</h3>
              <p>This Angular (2) sample application is based on <a href="https://www.youtube.com/watch?v=-zW1zHqsdyc">a tutorial on the subject</a>. It demonstrate the following topices:</p>
              <ul>
                <li>Components</li>
                <li>Services</li>
                <li>TypeScript</li>
                <li>Data Binding</li>
                <li>Forms & Input</li>
                <li>Routing</li>
                <li>Event Handling</li>
                <li>Directives</li>
              </ul>
              `,
})
export class AboutComponent  {  }
