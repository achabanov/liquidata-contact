import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  url: string =
    "http://interview-contact-submit-api-lb-1009699934.us-east-1.elb.amazonaws.com/contact-us/send";
  constructor(private http: HttpClient) {}

  sendMessage(messageContent: any) {
    return this.http.post(this.url, messageContent, {
      headers: new HttpHeaders({ "Content-Type": "application/json" }),
      responseType: "text"
    });
  }
}
