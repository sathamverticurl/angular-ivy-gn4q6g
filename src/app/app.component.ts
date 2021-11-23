import {
  Component,
  VERSION,
  OnInit,
  HostListener,
  ViewChild,
} from '@angular/core';
import { CommonService } from './common.service';
import { fromEvent, Observable, Subscription } from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  resizedWidth: number = 0;
  @ViewChild('button') buttonToggler;
  @ViewChild('collapse') collapseDiv;
  @HostListener('document:click', ['$event'])
  docClick(event) {
    if (this.buttonToggler.nativeElement.contains(event.target)) {
      this.collapseDiv.nativeElement.classList.add('show');
    } else {
      this.collapseDiv.nativeElement.classList.remove('show');
    }
  }
  constructor(private service: CommonService) {
    window.onresize = ($event) => {
      if (window.screen.width < 600) {
        console.log('HERE');
      }
    };
  }
  ngOnInit(): void {
    this.service.getTest().subscribe((val: any) => {
      console.log(val);
    });
  }
  // public showCollapse() {
  //   this.collapse.nativeElement.classList.add('show');
  // }
}
