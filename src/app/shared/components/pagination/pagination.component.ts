
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
@Component({
	selector: 'app-pagination',
	imports: [
		CommonModule
	],
	templateUrl: './pagination.component.html',
	styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
	// arrPagination: Array<number> = Array(79);
	@Input() totalLength!: number;

	totalPage: number = 0;
	perPage: number = 10;
	currentPage: number = 1;
	arr: Array<string> = [];

	ngOnInit(): void {
		this.totalPage = Math.ceil(this.totalLength / this.perPage);
		this.arr = this.generatePagination(this.currentPage, this.totalPage);
	}

	onPageClick(val: string): void {
		if (val !== '...') {
			this.currentPage = +val;
			this.arr = this.generatePagination(this.currentPage, this.totalPage);
		}
	}


	generatePagination(current: number, total: number): string[] {
		const pagination: string[] = [];

		if (total <= 7) {
			for (let i = 1; i <= total; i++) {
				pagination.push(i.toString());
			}
		} else {
			if (current <= 3) {
				// First few pages
				for (let i = 1; i <= 4; i++) {
					pagination.push(i.toString());
				}
				pagination.push('...');
				pagination.push(total.toString());
			} else if (current >= total - 2) {
				// Last few pages
				pagination.push('1');
				pagination.push('...');
				for (let i = total - 3; i <= total; i++) {
					pagination.push(i.toString());
				}
			} else {
				// Middle pages
				pagination.push('1');
				pagination.push('...');
				pagination.push((current - 1).toString());
				pagination.push(current.toString());
				pagination.push((current + 1).toString());
				pagination.push('...');
				pagination.push(total.toString());
			}
		}

		return pagination;
	}

	goToPreviousPage(): void {
		if (this.currentPage > 1) {
			this.currentPage--;
			this.arr = this.generatePagination(this.currentPage, this.totalPage);
		}
	}

	goToNextPage(): void {
		if (this.currentPage < this.totalPage) {
			this.currentPage++;
			this.arr = this.generatePagination(this.currentPage, this.totalPage);
		}
	}

	get startItem(): number {
		return (this.currentPage - 1) * this.perPage + 1;
	}

	get endItem(): number {
		const end = this.currentPage * this.perPage;
		return end > this.totalLength ? this.totalLength : end;
	}

	get totalItems(): number {
		return this.totalLength;
	}

}


