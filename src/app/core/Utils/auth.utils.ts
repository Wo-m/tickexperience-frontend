import { Injectable } from '@angular/core';
import { CacheConstants } from '../constant/cache.constant';

/**
 * Utility methods for authentication
 */
export class AuthUtils {

  static getToken(): string {
    return sessionStorage.getItem(CacheConstants.token)!;
  }

  static isAuthenticated(): boolean {
    return sessionStorage.getItem(CacheConstants.token) != '';
  }


}
