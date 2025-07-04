import type { INodeProperties } from 'n8n-workflow';

export const tenantOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'tenant',
				],
			},
		},
		options: [
			{
				name: 'Get Tenants',
				value: 'getMany',
				action: 'Get tenants',
				routing: {
					request: {
						method: 'GET',
						url: '/listTenants',
					},
				},
			},
		],
		default: 'getMany',
	},
];
