import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProfileLinkService } from '../../services/profile-link.service';
import { ProfileLinkRequest, ProfileLinkUpdateModel } from '../../models/profile-link.model';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
	selector: 'app-profile-link-create',
	imports: [FormsModule, CommonModule],
	templateUrl: './profile-link-create.component.html',
	styleUrl: './profile-link-create.component.scss'
})
export class ProfileLinkCreateComponent implements OnInit {

	profileLinkRequests: ProfileLinkRequest[] = [
		{
			profileLink: ''
		}
	];

	id: number = 0;
	isLoading: boolean = true;
	isCheck: boolean = false;
	isDialog: boolean = false;

	constructor(
		private router: Router,
		private profileLinkService: ProfileLinkService,
		private route: ActivatedRoute
	) {

	}

	ngOnInit(): void {
		this.route.paramMap.subscribe(param => {
			this.id = Number(param.get('id'));
			if (this.id) {
				this.isCheck = false;
				this.profileLinkService.readById(this.id).subscribe({
					next: (data) => {
						this.profileLinkRequests[0].profileLink = data.data.profileLink;
					}
				});
			} else {
				this.isCheck = true;
			}
		});
	}

	onCreate(): void {
		const formElements = document.querySelectorAll('input[type="url"]');
		formElements.forEach((el) => el.dispatchEvent(new Event('blur'))); // trigger validation

		const hasEmpty = this.profileLinkRequests.some(req => !req.profileLink?.trim());
		if (hasEmpty) {
			return; // stop submission
		}
		this.profileLinkService.create(this.id, this.profileLinkRequests).subscribe({
			next: (data) => {
				this.router.navigate(['/profile-link-crud']);
			},
			error: (err) => {
				console.log("error post : " + JSON.stringify(err))
			}
		});
	}

	onAddLink(): void {
		this.profileLinkRequests.push({ profileLink: '' });
	}

	onRemoveLink(index: number): void {
		this.profileLinkRequests.splice(index, 1);
	}

	onBack(): void {
		this.router.navigate(['profile-link-crud']);
	}

	onCloseModal(): void {
		this.isDialog = !this.isDialog;
	}

	onImport(): void {
		this.router.navigate(['profile-link-crud/profile-link-import-excel']);
	}

}
