import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileLinkService } from '../../services/profile-link.service';
import { ProfileLinkModel, ProfileLinkUpdateModel } from '../../models/profile-link.model';
import { PaginationComponent } from '../../../../shared/components/pagination/pagination.component';
import { LoadingComponent } from '../../../../shared/components/loading/loading.component';
@Component({
	selector: 'app-profile-link-list',
	imports: [MatTableModule, CommonModule, PaginationComponent, LoadingComponent],
	templateUrl: './profile-link-list.component.html',
	styleUrl: './profile-link-list.component.scss'
})
export class ProfileLinkListComponent implements OnInit {

	protected profileLinkModel!: ProfileLinkModel;
	protected profileLinkUpdateModel !: ProfileLinkUpdateModel;

	isLoading: boolean = true;
	totalLength!:number;

	searchTerm: string = '';
	rowsPerPage: number = 10;
	pageSizeOptions = [
		{ label: '10', value: 10 },
		{ label: '25', value: 25 },
		{ label: '50', value: 50 },
		{ label: '100', value: 100 },
		{ label: 'All', value: -1 }
	];

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private profileLinkService: ProfileLinkService
	) {

	}

	ngOnInit(): void {
		this.onRead();
	}

	onRead(): void {
		this.profileLinkService.reads().subscribe({
			next: (data) => {
				this.isLoading = false;
				this.profileLinkModel = data;
				this.totalLength = data.count;
				// console.log(this.profileLinkModel)
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
					console.log('Deletion successful');
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



