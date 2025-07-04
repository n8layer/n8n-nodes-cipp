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
				name: 'List Tenants',
				value: 'getMany',
				action: 'List tenants',
				routing: {
					request: {
						method: 'GET',
						url: '/listTenants',
					},
				},
			},
			{
				name: 'Get Tenant',
				value: 'get',
				action: 'Get tenant',
				routing: {
					request: {
						method: 'GET',
						url: '/ListTenantDetails',
						qs: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
						},
					},
				},
			},
			{
				name: 'Edit Tenant',
				value: 'update',
				action: 'Edit tenant',
				routing: {
					request: {
						method: 'POST',
						url: '/editTenant',
						body: {
							customerid: '={{ $parameter.customerId }}',
							tenantalias: '={{ $parameter.tenantAlias }}',
							tenantgroups: '={{ $parameter.tenantGroups }}',
						},
					},
				},
			},
		],
		default: 'getMany',
	},
];

export const tenantFields: INodeProperties[] = [
	{
		displayName: 'Tenant Filter',
		name: 'tenantFilter',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				resource: ['tenant'],
				operation: ['get'],
			},
		},
		default: '',
		description: 'Specify the tenant ID to get details for',
	},
	{
		displayName: 'Customer ID',
		name: 'customerId',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tenant'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Specify the customer ID to update',
	},
	{
		displayName: 'Tenant Alias',
		name: 'tenantAlias',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tenant'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Specify the tenant alias to update',
	},
	{
		displayName: 'Tenant Groups',
		name: 'tenantGroups',
		type: 'string',
		displayOptions: {
			show: {
				resource: ['tenant'],
				operation: ['update'],
			},
		},
		default: '',
		description: 'Specify the tenant groups to update',
	},
];
