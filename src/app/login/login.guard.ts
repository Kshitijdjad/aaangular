import { CanActivateFn } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {
  const isAuth = sessionStorage.getItem('user') !== null;
  if (!isAuth) {
    window.alert('You need to log in first.');
    return false;
  }
  return true;
};
