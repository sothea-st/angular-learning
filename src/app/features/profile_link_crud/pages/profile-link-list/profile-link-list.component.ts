import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileLinkService } from '../../services/profile-link.service';
import { ProfileLinkModel, ProfileLinkUpdateModel } from '../../models/profile-link.model';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
import { DatatableComponent } from '../../../../shared/components/datatable/datatable.component';
import { EditIconComponent } from '../../../../shared/components/icons/edit-icon/edit-icon.component';
import { DeleteIconComponent } from '../../../../shared/components/icons/delete-icon/delete-icon.component';
@Component({
	selector: 'app-profile-link-list',
	imports: [MatTableModule, CommonModule, DatatableComponent,EditIconComponent,DeleteIconComponent],
	templateUrl: './profile-link-list.component.html',
	styleUrl: './profile-link-list.component.scss'
})
export class ProfileLinkListComponent implements OnInit {

	protected profileLinkModel!: ProfileLinkModel;
	protected profileLinkUpdateModel !: ProfileLinkUpdateModel;

	isLoading: boolean = true;
	

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
		this._readData();
	}
	
	onChangePerPage(pageSize: number): void {
		this.profileLinkService.pageNumber = 1;
		this.profileLinkService.pageSize = Number(pageSize);
		this._readData();
	}

	_readData(): void {
		this.profileLinkService.reads().subscribe({
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
		const confirmed = confirm('Are you sure you want to delete this record?');
		if (confirmed) {
			this.profileLinkService.delete(id).subscribe({
				next: () => {
					this.ngOnInit();
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

	
}



