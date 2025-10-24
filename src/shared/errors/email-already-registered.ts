export class EmailAlreadyRegistered extends Error {
	constructor(message: string) {
		super(message);
	}
}
