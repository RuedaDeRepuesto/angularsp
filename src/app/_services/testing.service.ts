import { HttpClient, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class TestingService{

    constructor(private http:HttpClient){

    }


    download(url:string) {
        const req = new HttpRequest("GET", url, {
          responseType: "blob",
          reportProgress: true
        });
        return this.http.request(req);
    }
}