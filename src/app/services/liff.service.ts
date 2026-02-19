import { Injectable } from '@angular/core';
import liff from '@line/liff';

@Injectable({
  providedIn: 'root',
})
export class LiffService {
  async init() {
    // 🔥 DEV MODE
    if (window.location.hostname === 'localhost') {
      return {
        userId: 'DEV_USER_ID_12345',
        displayName: 'DEV USER',
        pictureUrl: 'https://via.placeholder.com/100',
        statusMessage: 'Local Dev Mode',
      };
    }

    // 🔵 PROD MODE
    await liff.init({ liffId: '2006016375-DhTZJ1hv' });

    if (!liff.isLoggedIn()) {
      liff.login();
      return null;
    }

    const profile = await liff.getProfile();

    return {
      userId: profile.userId, // 👈 สำคัญมาก
      displayName: profile.displayName,
      pictureUrl: profile.pictureUrl,
      statusMessage: profile.statusMessage,
    };
  }
}
