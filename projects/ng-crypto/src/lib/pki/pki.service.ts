import { Injectable } from '@angular/core';
import * as forge from 'node-forge';

@Injectable()
export class PkiService {

  constructor() { }

  signByPrivateKey(plainText: string, APIPrivateKey: string): string {
    let privateKey;
    let b64Signature = '';
    try {
      privateKey = forge.pki.privateKeyFromPem(APIPrivateKey);
      const md = forge.md.sha256.create();
      md.update(plainText, 'utf8');
      const signature = privateKey.sign(md);
      b64Signature = btoa(signature);
    } catch(e) {
      console.error('signByPrivateKey Failed! ' + e);
    } finally {
      return b64Signature;
    }
  }
}
