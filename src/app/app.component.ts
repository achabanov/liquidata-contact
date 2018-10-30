import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

import { HttpService } from "./http.service";
import { MatSnackBar } from "@angular/material";

export interface FormModel {
  captcha?: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
}) // added
export class AppComponent {
  title = "liquidata-contact";
  public formModel: FormModel = {};

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  constructor(private httpService: HttpService, public snackBar: MatSnackBar) {}

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
    delete f.value.captcha;

    console.log(f.value);
    console.log(f.valid);

    this.httpService.sendMessage(f.value).subscribe(
      () => {
        //alert("Your message has been sent.");
        this.snackBar.open("Your message has been sent", "Hide", {
          duration: 5000
        });
        f.resetForm();
        console.log("message has been sent");

        // this.disabledSubmitButton = true;
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}
