import { Injectable } from '@angular/core';
import * as forge from 'node-forge';

@Injectable()
export class NgCryptoService {

  constructor() { }

  sha1(data: string): string {
    const md = forge.md.sha1.create();
    md.update(data);
    const rst = md.digest().toHex();
    return rst;
  }

  sha256(data: string): string {
    const md = forge.md.sha256.create();
    md.update(data);
    const rst = md.digest().toHex();
    return rst;
  }

}
