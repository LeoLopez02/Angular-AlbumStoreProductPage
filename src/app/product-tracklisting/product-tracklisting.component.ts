import { Component, OnInit } from "@angular/core";
import { Album } from "../album";
import { ProductService } from "../product.service";

@Component({
  selector: "app-product-tracklisting",
  templateUrl: "./product-tracklisting.component.html",
  styleUrls: ["./product-tracklisting.component.css"],
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo: Album;

  constructor(private _serviceProduct: ProductService) {}

  ngOnInit() {
    this._serviceProduct
      .getAlbum(1)
      .subscribe((response) => (this.albumInfo = response));
  }
}
