import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http.get<UnsplashResponse>(
      'https://api.unsplash.com/photos/random',
      {
        headers: {
          //https://unsplash.com/oauth/applications/273608 -access key
          Authorization:
            'Client-ID vkKV9u6MbWbpTX4bSHQsh6h7Aztg_yjXtvwb4MnaQrQ',
        },
      }
    );
  }
}

interface UResponse {
  urls: {
    params: string;
  };
}

interface UResponse1 {
  headers: {
    urlKey: string;
  };
}

export class PhotoSrvice2 {
  constructor(public http: HttpClient) {}
  getPhoto() {
    return this.http.get<UResponse1>('https', {
      headers: {
        params: 'String',
      },
    });
  }
}
export class PhotosService1 {
  constructor(private http1: HttpClient) {}

  getPhoto1() {
    return this.http1.get<UResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        //authorization
        urlKey: 'Client-ID vkKV9u6MbWbpTX4bSHQsh6h7Aztg_yjXtvwb4MnaQrQ',
      },
    });
  }
}
