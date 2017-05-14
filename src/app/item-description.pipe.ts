import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'mpListItemDescription' })
export class MpListItemDescriptionPipe implements PipeTransform {
	transform(value: string): string {
		let description = value;

		return (description == "" || description == null) ? "No description provided" : description
	}
}