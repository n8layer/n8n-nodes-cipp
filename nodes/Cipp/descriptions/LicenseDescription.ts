import type { INodeProperties } from 'n8n-workflow';

export const licenseOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['license'],
			},
		},
		options: [
			{
				name: 'Create Or Update Excluded Licenses',
				value: 'createOrUpdateExcludedLicenses',
				action: 'Create or update excluded licenses',
				routing: {
					request: {
						method: 'POST',
						url: '/execExcludeLicenses',
						body: {
							skuname: '={{ $parameter.skuname }}',
							guid: '={{ $parameter.guid }}',
						},
					},
				},
			},
			{
				name: 'List Licenses',
				value: 'getMany',
				action: 'List licenses',
				routing: {
					request: {
						method: 'GET',
						url: '/listLicenses',
						qs: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
						},
					},
				},
			},
		],
		default: 'getMany',
	},
];

export const licenseFields: INodeProperties[] = [
	{
		displayName: 'Tenant Filter',
		name: 'tenantFilter',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['license'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Sku Name',
		name: 'skuname',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['license'],
				operation: ['createOrUpdateExcludedLicenses'],
			},
		},
	},
	{
		displayName: 'Guid',
		name: 'guid',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['license'],
				operation: ['createOrUpdateExcludedLicenses'],
			},
		},
	},
];
