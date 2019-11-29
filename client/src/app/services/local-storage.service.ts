import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  STORAGE_KEY = 'mango_storage_';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  set(key,value){
    this.storage.set(this.STORAGE_KEY+key, value);
  }

  get(key){
    return this.storage.get(this.STORAGE_KEY+key);
  }
}
