import { Component, inject } from '@angular/core';
import { LiffService } from '../../services/liff.service';
import { FirebaseService } from '../../services/firebase.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-line-profile',
  imports: [CommonModule],
  templateUrl: './line-profile.component.html',
  styleUrl: './line-profile.component.css',
})
export class LineProfileComponent {
  profile: any;

  private liffService = inject(LiffService);
  private firebaseService = inject(FirebaseService);

  async ngOnInit() {
    this.profile = await this.liffService.init();
    console.log('LINE Profile:', this.profile);
    if (this.profile) {
      await this.firebaseService.saveUser(this.profile);
      console.log('Profile saved to Firebase');
    }
  }
}
