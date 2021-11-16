export interface ISanityBuilder {
	build(): string;
}

export interface QueryBuilderOptions {
	slice?: number;
}

export class QueryBuilder implements ISanityBuilder {
	private readonly fields: Set<string> = new Set();
	private readonly conditions: Set<string> = new Set();
	private options: Record<string, any> = {};

	field(...args: string[]): QueryBuilder {
		for (const arg of args) {
			this.fields.add(arg);
		}
		return this;
	}

	condition(...args: string[]): QueryBuilder {
		for (const arg of args) {
			this.conditions.add(arg);
		}
		return this;
	}

	option(args: Record<string, any>): QueryBuilder {
		this.options = Object.assign({}, this.options, args);
		return this;
	}

	build(): string {
		const conditions = Array.from(this.conditions);
		const fields = Array.from(this.fields);
		const order = this.options.order ? `| order(${this.options.order})` : '';
		const slice = this.options.slice ? `[${this.options.slice}]` : '';
		return `*[${conditions.join(' && ')}] { ${fields} } ${order} ${slice}`;
	}
}
