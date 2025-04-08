import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-delete-modal',
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './delete-modal.component.html',
  styleUrl: './delete-modal.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeleteModalComponent {
  customerService: CustomerService = inject(CustomerService);

  constructor(@Inject(MAT_DIALOG_DATA) public data: { id: string }) {}

  deleteItem() {
    this.customerService.deleteCustomer(this.data.id).subscribe({
      error: (err) => console.log(err),
    });
  }
}
