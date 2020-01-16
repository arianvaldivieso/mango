import { Inject, Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService, StorageTranscoders } from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  STORAGE_KEY = 'mango_storage_';

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  set(key,value){

    console.log(typeof value);

    if (typeof value == 'object') {
      value = JSON.stringify(value);
    }else{
      value += '';
      value = value.split('?').join('').toLowerCase();
    }

    key = key.split(' ').join('_').toLowerCase();
    this.storage.set(this.STORAGE_KEY+key, value);
  }

  get(key){
    key = key.split(' ').join('_').toLowerCase();

    if (!this.isJsonString(this.storage.get(this.STORAGE_KEY+key))) {
      return this.storage.get(this.STORAGE_KEY+key);
    }else{
      return JSON.parse(this.storage.get(this.STORAGE_KEY+key));
    }


  }

  isJsonString(str) { try { JSON.parse(str); } catch (e) { return false; } return true; }

  remove(){
    // return this.storage.remove();
  }

  clear(){
    return this.storage.clear();
  }
}
