import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class CsrfService {
  private readonly metaEl: HTMLMetaElement;

  constructor(private meta: Meta) {
    this.metaEl = this.meta.getTag('name="csrf-token"');
  }

  getCsrfToken() {
    return this.metaEl.content;
  }
}
