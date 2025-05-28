import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileLinkService } from '../../services/profile-link.service';
import { ProfileLinkModel, ProfileLinkUpdateModel } from '../../models/profile-link.model';
@Component({
	selector: 'app-profile-link-list',
	imports: [MatTableModule, CommonModule],
	templateUrl: './profile-link-list.component.html',
	styleUrl: './profile-link-list.component.scss'
})
export class ProfileLinkListComponent implements OnInit {

	protected profileLinkModel!: ProfileLinkModel;
	protected profileLinkUpdateModel !: ProfileLinkUpdateModel;
	 showModal = false;

	constructor(
		private router: Router,
		private route: ActivatedRoute,
		private profileLinkService: ProfileLinkService
	) {

	}


	ngOnInit(): void {
		this.profileLinkService.reads().subscribe({
			next: (data) => {
				this.profileLinkModel = data;
				console.log(this.profileLinkModel)
			},
			error: (err) => {
				console.log("error : " + err)
			}
		});
	}

	onDelete(id: number): void {
		this.profileLinkService.delete(id).subscribe({
			next: (data) => {
				console.log('success')
			},
			error: (err) => {
				console.log(err)
			}
		})
	}

	onEdit(id: number): void {
		this.profileLinkService.readById(id).subscribe({
			next: (data) => {
				this.profileLinkUpdateModel = data;
			}
		});
	}

	onBack(): void {
		this.router.navigate(['track-user']);
	}

	addNew(): void {
		this.router.navigate(['create'], { relativeTo: this.route });
	}
}

