
import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
	selector: 'app-pagination',
	imports: [
		CommonModule
	],
	templateUrl: './pagination.component.html',
	styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnChanges {

	@Input() totalLength!: number;
	@Input() pageSize!: number;
	@Output() onClickPage: EventEmitter<any> = new EventEmitter<any>();

	totalPage: number = 0;

	currentPage: number = 1;
	arr: Array<string> = [];


	ngOnChanges(): void {
		this.totalPage = Math.ceil(this.totalLength / this.pageSize);
		this.arr = this.generatePagination(this.currentPage, this.totalPage);
	}


	onPageClick(val: string): void {
		if (val !== '...') {
			this.currentPage = +val;
			this.arr = this.generatePagination(this.currentPage, this.totalPage);
			this.onClickPage.emit(val);
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
			this.onClickPage.emit(this.currentPage);
		}
	}

	goToNextPage(): void {
		if (this.currentPage < this.totalPage) {
			this.currentPage++;
			this.arr = this.generatePagination(this.currentPage, this.totalPage);
			this.onClickPage.emit(this.currentPage);
		}
	}

	get startItem(): number {
		return (this.currentPage - 1) * this.pageSize + 1;
	}

	get endItem(): number {
		const end = this.currentPage * this.pageSize;
		return end > this.totalLength ? this.totalLength : end;
	}

	get totalItems(): number {
		return this.totalLength;
	}

}


