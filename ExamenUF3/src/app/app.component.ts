import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenUF3';
pagination: any;
}
const artwork = require('https://api.artic.edu/api/v1/artworks');
const artist = require('https://api.artic.edu/api/v1/artists');

artwork.getArtwork = function () {
  return artwork.id;
;

}