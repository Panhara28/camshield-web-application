import { inject } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { CanActivateFn, Router } from '@angular/router';
import { map, take, tap } from 'rxjs';

export const AuthGuard: CanActivateFn = () => {
  const auth = inject(Auth);
  const router = inject(Router);

  return authState(auth).pipe(
    take(1),
    map((user) => !!user),
    tap((isLoggin) => {
      if (!isLoggin) {
        router.navigate(['/login']);
      }
    })
  );
};
