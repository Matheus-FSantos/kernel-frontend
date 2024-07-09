import { format } from 'date-fns';

export class DateService {
	getCurrentDate(): string {
		const dataAtual = new Date();
		return format(dataAtual, 'EEEE, MMMM d, yyyy \'at\' h:mm a')
	}
}
