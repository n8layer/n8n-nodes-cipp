import type { INodeProperties } from 'n8n-workflow';

export const calendarPermissionOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'calendarPermission',
				],
			},
		},
		options: [
			{
				name: 'List Calendar Permissions',
				value: 'getMany',
				action: 'List calendar permissions',
				routing: {
					request: {
						method: 'GET',
						url: '/listcalendarpermissions',
						qs: {
							userId: '={{ $parameter.userId }}',
							tenantFilter: '={{ $parameter.tenantFilter }}',
						},
					},
				},
			},
			{
				name: 'Edit Calendar Permissions',
				value: 'update',
				action: 'Edit calendar permissions',
				routing: {
					request: {
						method: 'POST',   // TODO: this may be a POST; may need to use customer tenant id
						url: '/execeditcalendarpermissions',
						body: {
							TenantFilter: '={{ $parameter.tenantFilter }}',
							permissions: '={{ $parameter.permissions || undefined }}',
							userid: '={{ $parameter.userId }}',
							removeaccess: '={{ $parameter.removeaccess || undefined }}',
							usertogetpermissions: '={{ $parameter.usertogetpermissions || undefined }}',
							FolderName: '={{ $parameter.FolderName || undefined }}',
						},
					},
				},
			},
		],
		default: 'getMany',
	},
];
export const calendarPermissionFields: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userid',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['getMany', 'update'],
			},
		},
	},
	{
		displayName: 'Tenant Filter',
		name: 'tenantFilter',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Tenant Filter',
		name: 'tenantFilter',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Permissions',
		name: 'permissions',
		type: 'options',
		required: true,
		default: 'Author',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['update'],
			},
		},
		options: [
			{
				name: 'Author',
				value: 'Author',
			},
			{
				name: 'AvailabilityOnly',
				value: 'AvailabilityOnly',
			},
			{
				name: 'Contributor',
				value: 'Contributor',
			},
			{
				name: 'Editor',
				value: 'Editor',
			},
			{
				name: 'LimitedDetails',
				value: 'LimitedDetails',
			},
			{
				name: 'Non Editing Author',
				value: 'Non Editing Author',
			},
			{
				name: 'Owner',
				value: 'Owner',
			},
			{
				name: 'Publishing Author',
				value: 'Publishing Author',
			},
			{
				name: 'Reviewer',
				value: 'Reviewer',
			},
		],
	},
	{
		displayName: 'Remove Access',
		name: 'removeaccess',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'User to Get Permissions',
		name: 'usertogetpermissions',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['update'],
			},
		},
	},
	{
		displayName: 'Folder Name',
		name: 'FolderName',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['update'],
			},
		},
	},
	// {
	// 	displayName: 'Customer Tenant ID',
	// 	name: 'customerTenantId',
	// 	description: 'The tenant ID of the customer to get the calendar permissions for. (Example: contoso.onmicrosoft.com).',
	// 	type: 'string',
	// 	default: '',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['calendarPermission'],
	// 			operation: ['update'],
	// 		},
	// 	},
	// },
];
