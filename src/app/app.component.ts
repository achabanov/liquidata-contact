import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { HttpService } from "./http.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "liquidata-contact";

  constructor(private httpService: HttpService) {}

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false

    this.httpService.sendMessage(f.value).subscribe(
      () => {
        alert("Your message has been sent.");
        f.reset();
        // this.disabledSubmitButton = true;
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
