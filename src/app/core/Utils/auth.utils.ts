import { CacheConstants } from '../constant/cache.constant';
import { HttpHeaders } from '@angular/common/http';

/**
 * Utility methods for authentication
 */
export class AuthUtils {

  static getToken(): string {
    return sessionStorage.getItem(CacheConstants.token)!;
  }

  static isAuthenticated(): boolean {
    return sessionStorage.getItem(CacheConstants.token) != null;
  }

  static removeToken(): void {
    sessionStorage.removeItem(CacheConstants.token);
  }
}
