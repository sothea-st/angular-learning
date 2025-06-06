import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProfileLinkService } from '../../services/profile-link.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormInputComponent } from '../../../../shared/components/form/form-input/form-input.component';

@Component({
	selector: 'app-profile-link-import-excel',
	imports: [CommonModule, FormsModule,FormInputComponent],
	templateUrl: './profile-link-import-excel.component.html',
	styleUrl: './profile-link-import-excel.component.scss'
})
export class ProfileLinkImportExcelComponent {

	sheet: string = '';
	cell: string = '';
	fileName: string = "No file selected";
	selectedFile: File | null = null;
	isImporting: boolean = false;

	constructor(
		private profileLinkService: ProfileLinkService,
		private router: Router
	) {

	}
	onBack(): void {
		this.router.navigate(['profile-link-crud/create']);
	}

 
	onFileSelected(event: Event): void {
		const input = event.target as HTMLInputElement;

		if (input.files && input.files.length > 0) {
			this.selectedFile = input.files[0];
			this.fileName = this.selectedFile.name;
		}
	}

	onSave(): void {
	
		const inputs = document.querySelectorAll('input[type="text"], input[type="file"]');
		inputs.forEach((el) => el.dispatchEvent(new Event('blur')));

		const isSheetEmpty = !this.sheet.trim();
		const isCellEmpty = !this.cell.trim();

		if (isSheetEmpty || isCellEmpty ) {
			return;
		}

		if (!this.selectedFile) {
			alert('Please select a file.');
			return;
		}

		  // Start loading
  		this.isImporting = true;
 

		const formData = new FormData();
		formData.append('file', this.selectedFile);
		this.profileLinkService.importExcel(formData, this.sheet, this.cell).subscribe({
			next: (value) => {
				this.isImporting = false;
				this.router.navigate(['/profile-link-crud']);
			},
			error: (err) => {
				this.isImporting = false;
				console.log("error import excel : " + err)
			}
		});
	}

}
