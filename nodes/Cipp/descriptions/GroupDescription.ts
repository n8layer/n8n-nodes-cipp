import type { INodeProperties } from 'n8n-workflow';

export const groupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: ['group'],
			},
		},
		options: [
			{
				name: 'Create Or Add Group',
				value: 'createOrAddGroup',
				action: 'Create or add group',
				routing: {
					request: {
						method: 'POST',
						url: '/addGroup',
						body: {
							selectedtenants: '={{ $parameter.selectedtenants }}',
							tenantid: '={{ $parameter.tenantid }}',
							defaultdomainname: '={{ $parameter.defaultdomainname }}',
						},
					},
				},
			},
			{
				name: 'Edit Group',
				value: 'editGroup',
				action: 'Edit group',
				routing: {
					request: {
						method: 'POST',
						url: '/EditGroup',
						body: {
							tenantId: '={{ $parameter.tenantId }}',
							groupId: '={{ $parameter.groupId }}',
							AddMember: '={{ $parameter.AddMember ? {value: [$parameter.AddMember]} : undefined }}',
							AddOwner: '={{ $parameter.AddOwner ? {value: [$parameter.AddOwner]} : undefined }}',
							RemoveMember: '={{ $parameter.RemoveMember ? {value: [$parameter.RemoveMember]} : undefined }}',
							RemoveOwner: '={{ $parameter.RemoveOwner ? {value: [$parameter.RemoveOwner]} : undefined }}',
						},
					},
				},
			},
			{
				name: 'List Groups',
				value: 'getMany',
				action: 'List groups',
				routing: {
					request: {
						method: 'GET',
						url: '/listGroups',
						qs: {
							GroupID: '={{ $parameter.groupId || undefined }}',
							members: '={{ $parameter.members || undefined }}',
							owners: '={{ $parameter.owners || undefined }}',
							tenantFilter: '={{ $parameter.tenantfilter }}',
						},
					},
				},
			},
		],
		default: 'getMany',
	},
];

export const groupFields: INodeProperties[] = [
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Members',
		name: 'members',
		type: 'string',
		description: 'Switch parameter. If specified, retrieves the members of the specified group.',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Owners',
		name: 'owners',
		type: 'string',
		description: 'Switch parameter. If specified, retrieves the owners of the specified group.',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Tenant Filter',
		name: 'tenantfilter',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['getMany'],
			},
		},
	},
	{
		displayName: 'Selected Tenants',
		name: 'selectedtenants',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['createOrAddGroup'],
			},
		},
	},
	{
		displayName: 'Tenant ID',
		name: 'tenantid',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['createOrAddGroup'],
			},
		},
	},
	{
		displayName: 'Default Domain Name',
		name: 'defaultdomainname',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['createOrAddGroup'],
			},
		},
	},
	{
		displayName: 'Tenant ID',
		name: 'tenantId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['editGroup', 'removeUserFromGroup'],
			},
		},
	},
	{
		displayName: 'Group ID',
		name: 'groupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['editGroup', 'removeUserFromGroup'],
			},
		},
	},
	{
		displayName: 'Add Member',
		name: 'AddMember',
		description: 'Add a member to the group by GUID or email address',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['editGroup'],
			},
		},
	},
	{
		displayName: 'Add Owner By GUID',
		name: 'AddOwner',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['editGroup'],
			},
		},
	},
	{
		displayName: 'Remove Member by GUID',
		name: 'RemoveMember',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['editGroup'],
			},
		},
	},
	{
		displayName: 'Remove Owner By GUID',
		name: 'RemoveOwner',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['group'],
				operation: ['editGroup'],
			},
		},
	},
];
