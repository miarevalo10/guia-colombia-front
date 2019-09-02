import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  toSnakeCase(key: string): string {
    return key.replace( /([A-Z])/g, '_$1').toLowerCase();
  }

  toCamelCase(key: string): string {
    return key.replace(/([-_][a-z])/g, (group) => group.toUpperCase()
                      .replace('-', '')
                      .replace('_', ''));
  }

  transformObj(obj: {}, func: (key: string) => string) {
    const transformedObj = {};
    for (const key of Object.keys(obj)) {
      transformedObj[func(key)] = obj[key];
    }
    return transformedObj;
  }
}
