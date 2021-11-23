import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}
  getTest() {
    return this.http.get(
      'https://619b74e427827600174455ec.mockapi.io/myBookings'
    );
  }
}
