import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Hello world!';

  @ViewChild('appTitle', { static: false })
  appTitleField: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit() {
    this.appTitleField.nativeElement.innerText = 'My awesome car shop';
  }
}
