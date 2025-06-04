import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileLinkService } from '../../services/profile-link.service';
import { ProfileLinkModel, ProfileLinkUpdateModel } from '../../models/profile-link.model';
import { DatatableComponent } from '../../../../shared/components/datatable/datatable.component';
import { EditIconComponent } from '../../../../shared/components/icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../../../shared/components/icons/delete-icon/delete-icon.component';
import { ButtonAddNewComponent } from '../../../../shared/components/buttons/button-add-new/button-add-new.component';
import { ButtonBackComponent } from '../../../../shared/components/buttons/button-back/button-back.component';
import { TruncatePipe } from '../../../../shared/pipes/truncate.pipe';
@Component({
	selector: 'app-profile-link-list',
	imports: [
		MatTableModule,
		CommonModule,
		DatatableComponent,
		EditIconComponent,
		DeleteIconComponent,
		ButtonAddNewComponent,
		ButtonBackComponent,
		TruncatePipe
	],
	templateUrl: './profile-link-list.component.html',
	styleUrl: './profile-link-list.component.scss'
})
export class ProfileLinkListComponent implements OnInit {

	protected profileLinkModel!: ProfileLinkModel;
	isLoading: boolean = true;
	isDialog: boolean = false;
	deleteId: number | null = null;

	currentPage: number = 1;  
	pageSize: number = 10;

	index!: number;

	columns = [
		{
			label: 'Profile Link',
			key: 'profileLink'
		}
	];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		protected profileLinkService: ProfileLinkService
	) {

	}

	ngOnInit(): void {
		this.onRead(this.profileLinkService.pageNumber);
	}

	onRead(pageNumber: number): void {
		this.profileLinkService.pageNumber = pageNumber;
		this.currentPage = pageNumber;
		this._readData();
	}

	onChangePerPage(pageSize: number): void {
		this.pageSize = pageSize;
		this.currentPage = 1;
		this.profileLinkService.reset(pageSize);
		this._readData();
	}

	onSearch(value: string) {
		setTimeout(() => {
			this.profileLinkService.reset(10);
			this._readData(value);
		}, 1500)
	}

	_readData(searchValue?: string): void {
		this.profileLinkService.reads(searchValue).subscribe({
			next: (data) => {
				this.isLoading = false;
				this.profileLinkModel = data;
			},
			error: (err) => {
				console.log("error : " + err)
			}
		});
	}

	onDelete(id: number): void {
		this.isDialog = !this.isDialog;
		this.deleteId = id;
	}

	_delete(): void {
		if (this.deleteId !== null) {
			this.profileLinkService.delete(this.deleteId).subscribe({
				next: () => {
					this.ngOnInit();
					this.isDialog = !this.isDialog;
					this.deleteId = null;
				},
				error: (err) => {
					console.error('Deletion failed', err);
				}
			});
		}
	}

	onEdit(id: number): void {
		this.router.navigate(['create', id], { relativeTo: this.route });
	}

	addNew(): void {
		this.router.navigate(['create'], { relativeTo: this.route });
	}

	onBack(): void {
		this.router.navigate(['track-user']);
	}

	onCloseModal(): void {
		this.isDialog = !this.isDialog;
	}

}



