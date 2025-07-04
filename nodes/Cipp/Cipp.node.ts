import { INodeType, INodeTypeDescription, NodeConnectionType } from 'n8n-workflow';

import { tenantOperations, tenantFields } from './descriptions/TenantDescription';

export class Cipp implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'CIPP',
		name: 'cipp',
		//icon: 'file:Cipp.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with CIPP API',
		defaults: {
			name: 'CIPP',
		},
		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		usableAsTool: true,
		credentials: [
			{
				name: 'cippOAuth2Api',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: '={{ $credentials.ApiUrl + "/api" }}',
			url: '',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Tenant',
						value: 'tenant',
					},
				],
				default: 'tenant',
			},
			// Operation
			...tenantOperations,
			...tenantFields,
		],
	};
}
