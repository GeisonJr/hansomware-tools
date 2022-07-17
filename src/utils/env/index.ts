export class Enviroment {
	private isDev: boolean
	private isProd: boolean
	private isTest: boolean

	constructor() {
		const { NODE_ENV } = process.env

		this.isDev = NODE_ENV === 'development'
		this.isProd = NODE_ENV === 'production'
		this.isTest = NODE_ENV === 'test'
	}

	public get isDevelopment(): boolean {
		return this.isDev
	}

	public set isDevelopment(value: boolean) {
		this.isDev = value
	}

	public get isProduction(): boolean {
		return this.isProd
	}

	public set isProduction(value: boolean) {
		this.isProd = value
	}

	public get isTests(): boolean {
		return this.isTest
	}

	public set isTests(value: boolean) {
		this.isTest = value
	}

	getBoolean(env: string): boolean {
		const value = process.env[env]

		if (value === 'true') { return true } else if (value === 'false') { return false }

		return false
	}

	getNumber(env: string): number {
		const value = Number(process.env[env])

		if (Number.isNaN(value)) { return 0 }

		return value
	}

	getString(env: string): string {
		const value = process.env[env] ?? ''

		return value
	}
}

export default new Enviroment()
