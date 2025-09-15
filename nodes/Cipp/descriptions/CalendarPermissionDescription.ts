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
							tenantFilter: '={{ $parameter.tenantFilter }}',
							userId: '={{ $parameter.userId }}',
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
						url: '/ExecModifyCalPerms',
						body: {
							permissions: '={{ [{ "FolderName": $parameter.FolderName || "Calendar", "Modification": $parameter.removeaccess ? "Remove" : "Add", "PermissionLevel": { "value": $parameter.permissions, "label": $parameter.permissions }, "SendNotificationToUser": $parameter.SendNotificationToUser, "UserID": { "value": $parameter.usertogetpermissions, "label": $parameter.usertogetpermissions, "type": "user" } }] }}',
							tenantFilter: '={{ $parameter.tenantFilter }}',
							userID: '={{ $parameter.userId }}',
							removeaccess: '={{ $parameter.removeaccess || false }}',
							usertogetpermissions: '={{ $parameter.usertogetpermissions }}',
							FolderName: '={{ $parameter.FolderName || undefined }}',
							CanViewPrivateItems: false,
							SendNotificationToUser: true,
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
		name: 'userId',
		type: 'string',
		required: true,
		description: 'The email address or ID of the user to get the calendar permissions for',
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
		description: 'The tenant ID of the user or the domain name (e.g., "n8layer.com")',
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
		description: 'The tenant ID of the user or the domain name (e.g., "n8layer.com")',
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
				name: 'Publishing Editor',
				value: 'Publishing Editor',
			},
			{
				name: 'Reviewer',
				value: 'Reviewer',
			},
		],
	},
	{
		displayName: 'User to Get Permissions',
		name: 'usertogetpermissions',
		type: 'string',
		default: '',
		description: 'The email address or ID of the user to get the calendar permissions for',
		required: true,
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
		default: 'Calendar',
		displayOptions: {
			show: {
				resource: ['calendarPermission'],
				operation: ['update'],
			},
		},
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
		displayName: 'Send Notification to User',
		name: 'SendNotificationToUser',
		type: 'boolean',
		default: false,
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

