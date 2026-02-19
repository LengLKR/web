import { Injectable } from '@angular/core';
import { initializeApp } from 'firebase/app';
import { getFirestore, doc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBxMUBQ0Bhh6ZvCcHZMU4plXCDiufp_dP0',
  authDomain: 'testline-aad94.firebaseapp.com',
  projectId: 'testline-aad94',
  storageBucket: 'testline-aad94.firebasestorage.app',
  messagingSenderId: '910110068061',
  appId: '1:910110068061:web:ead669c44565a94f08ecb4',
  measurementId: 'G-JR0Q8EGCET',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  async saveUser(profile: any) {
    if (!profile || !profile.userId) {
      console.error('Invalid profile data:', profile);
      return;
    }

    await setDoc(
      doc(db, 'users', profile.userId),
      {
        userId: profile.userId,
        displayName: profile.displayName,
        pictureUrl: profile.pictureUrl,
        statusMessage: profile.statusMessage,
        updatedAt: new Date(),
      },
      { merge: true }, //  ใช้ merge เพื่อไม่ให้ข้อมูลเดิมหาย
    );
  }
}
