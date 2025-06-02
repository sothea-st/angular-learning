import { CommonModule } from '@angular/common';
import { Component, ContentChild, EventEmitter, Input, Output, TemplateRef } from '@angular/core';
import { PaginationComponent } from '../pagination/pagination.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
	selector: 'app-datatable',
	imports: [CommonModule, PaginationComponent, LoadingComponent],
	templateUrl: './datatable.component.html',
	styleUrl: './datatable.component.scss'
})
export class DatatableComponent {

	@ContentChild('rowTemplate') rowTemplate!: TemplateRef<any>;

	@Input() data: any = [];
	@Input() columns: Array<{ label: string, key: string }> = [];
	@Input() isLoading: boolean = false;
	@Input() totalLength!: number;
	@Input() pageSize!: number;

	@Output() onEdit = new EventEmitter<any>();
	@Output() delete = new EventEmitter<any>();
	@Output() onPage = new EventEmitter<number>();
	@Output() onSelectPerPage = new EventEmitter<number>();
	@Output() onSearchValue = new EventEmitter<any>();

	searchTerm: string = '';
	rowsPerPage: number = 10;
	pageSizeOptions = [
		{ label: '10', value: 10 },
		{ label: '25', value: 25 },
		{ label: '50', value: 50 },
		{ label: '100', value: 100 },
		{ label: 'All', value: -1 }
	];

	onPageChanged(page: number): void {
		this.onPage.emit(page);
	}

	onChangePerPage(event: Event): void {
		const pageSize = (event.target as HTMLSelectElement).value;
		this.onSelectPerPage.emit(Number(pageSize));
	}

	onSearch(event: KeyboardEvent) {
		const value = (event.target as HTMLInputElement).value;
		this.onSearchValue.emit(value);
	}

}
