import { Component, OnInit } from '@angular/core';
import { NgCryptoService } from 'projects/ng-crypto/src/lib/ng-crypto.service';
import { PkiService } from 'projects/ng-crypto/src/lib/pki/pki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'demo';
  sha1 = '';
  sha256 = '';
  signature = '';
  _PRIVATE_KEY = "";

  constructor(
    private cgcrypto: NgCryptoService,
    private pki: PkiService
  ) { }

  ngOnInit() {
    this.sha1 = this.cgcrypto.sha1('123123');
    this.sha256 = this.cgcrypto.sha256('123123');
    this.signature = this.pki.signByPrivateKey('{appName:"test", currentTime:"2021/05/13 11:35:28"}', this._PRIVATE_KEY);
  }
}
