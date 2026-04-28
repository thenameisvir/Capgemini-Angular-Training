import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiDataService } from '../../../share/api-data-service';

@Component({
  selector: 'app-delete-product',
  imports: [FormsModule],
  templateUrl: './delete-product.html',
})
export class DeleteProduct {
  apiData:ApiDataService = inject(ApiDataService);
  message = '';
  productId = 0;

  submit() {
    this.apiData.deleteData(this.productId).subscribe({
      next: (res) => {
        console.log('Deleted:', res);
        this.message = 'Product deleted successfully!';
      }
    });
  }
}
