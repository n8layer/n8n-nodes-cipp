import type { INodeProperties } from 'n8n-workflow';

export const userOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'user',
				],
			},
		},
		options: [
			{
				name: 'Add Guest',
				value: 'addGuest',
				action: 'Add guest',
				routing: {
					request: {
						method: 'POST',
						url: '/AddGuest',
						body: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							displayname: '={{ $parameter.displayname }}',
							emailaddress: '={{ $parameter.emailaddress }}',
							message: '={{ $parameter.message }}',
							redirecturl: '={{ $parameter.redirecturl }}',
						},
					},
				},
			},
			{
				name: 'Add User',
				value: 'addUser',
				action: 'Add user',
				routing: {
					request: {
						method: 'POST',
						url: '/addUser',
						body: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							displayname: '={{ $parameter.displayname }}',
							mailnickname: '={{ $parameter.mailnickname }}',
							autopassword: '={{ $parameter.autopassword }}',
							password: '={{ $parameter.password }}',
							givenname: '={{ $parameter.givenname }}',
							surname: '={{ $parameter.surname }}',
							primaryDomain: '={{ $parameter.primaryDomain.domainValues }}',
							addedaliases: '={{ $parameter.addedaliases }}',
							copyfrom: '={{ $parameter.copyfrom }}',
							UsageLocation: '={{ $parameter.UsageLocation.locationValues }}',
							mustchangepass: '={{ $parameter.mustchangepass }}',
							removelicenses: false,
							country: '={{ $parameter.country }}',
							postalcode: '={{ $parameter.postalcode }}',
							companyname: '={{ $parameter.companyname }}',
							streetaddress: '={{ $parameter.streetaddress }}',
							mobilephone: '={{ $parameter.mobilephone }}',
							businessphone: '={{ $parameter.businessphone }}',
							jobtitle: '={{ $parameter.jobtitle }}',
							department: '={{ $parameter.department }}',
							city: '={{ $parameter.city }}',
							setmanager: '={{ $parameter.setmanager.managerValues ? { value: $parameter.setmanager.managerValues.value } : null }}',
							Scheduled: '={{ $parameter.Scheduled.scheduledValues ? { enabled: $parameter.Scheduled.scheduledValues.enabled, date: $parameter.Scheduled.scheduledValues.date } : null }}',
							PostExecution: '={{ $parameter.PostExecution.postExecutionValues ? { webhook: $parameter.PostExecution.postExecutionValues.webhook, psa: $parameter.PostExecution.postExecutionValues.psa, email: $parameter.PostExecution.postExecutionValues.email } : null }}',
						},
					},
				},
			},
			// {
			// 	name: 'Add User Bulk',
			// 	value: 'addUserBulk',
			// 	action: 'Add user bulk',
			// 	routing: {
			// 		request: {
			// 			method: 'POST',
			// 			url: '/addUser',
			// 			body: {
			// 				label: '={{ $parameter.label }}',
			// 				value: '={{ $parameter.value }}',
			// 				setmananger: '={{ $parameter.setMananger }}',
			// 				copyfrom: '={{ $parameter.copyfrom }}',
			// 			},
			// 		},
			// 	},
			// },
			{
				name: 'Edit User',
				value: 'updateUser',
				action: 'Edit user',
				routing: {
					request: {
						method: 'POST',
						url: '/editUser',
						body: {
							setmananger: '={{ $parameter.setMananger }}',
							removefromgroups: '={{ $parameter.removefromgroups }}',
							addtogroups: '={{ $parameter.addtogroups }}',
							copyfrom: '={{ $parameter.copyfrom }}',
							label: '={{ $parameter.label }}',
							value: '={{ $parameter.value }}',
						},
					},
				},
			},
			{
				name: 'Exec Restore Deleted User',
				value: 'execRestoreDeletedUser',
				action: 'Exec restore deleted user',
				routing: {
					request: {
						method: 'GET',
						url: '/execRestoreDeletedUser',
						qs: {
							id: '={{ $parameter.userId }}',
							tenantFilter: '={{ $parameter.tenantFilter }}',
						},
					},
				},
			},
			{
				name: 'List All Users',
				value: 'getMany',
				action: 'List all users',
				routing: {
					request: {
						method: 'GET',
						url: '/Listusers',
					},
				},
			},
			{
				name: 'List User',
				value: 'getUser',
				action: 'List users',
				routing: {
					request: {
						method: 'GET',
						url: '/Listusers',
						qs: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							userId: '={{ $parameter.userId }}',
							// includeLogonDetails: '={{ $parameter.includeLogonDetails }}',
							// graphFilter: '={{ $parameter.graphFilter }}',
						},
					},
				},
			},
			{
				name: 'List User Conditional Access Policies',
				value: 'getUserConditionalAccessPolicies',
				action: 'List user conditional access policies',
				routing: {
					request: {
						method: 'GET',
						url: '/ListConditionalAccessPolicies',
						qs: {
							userId: '={{ $parameter.userId }}',
							tenantFilter: '={{ $parameter.tenantFilter }}',
						},
					},
				},
			},
			{
				name: 'List User Counts',
				value: 'getUserCounts',
				action: 'List user counts',
				routing: {
					request: {
						method: 'GET',
						url: '/ListUserCounts',
						qs: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
						},
					},
				},
			},
			{
				name: 'List User Devices',
				value: 'getUserDevices',
				action: 'List user devices',
				routing: {
					request: {
						method: 'GET',
						url: '/ListUserDevices',
						qs: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							userId: '={{ $parameter.userId }}',
						},
					},
				},
			},
			{
				name: 'List User Groups',
				value: 'getUserGroups',
				action: 'List user groups',
				routing: {
					request: {
						method: 'GET',
						url: '/ListUserGroups',
						qs: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							userId: '={{ $parameter.userId }}',

						},
					},
				},
			},
			{
				name: 'Offboard User',
				value: 'offboardUser',
				action: 'Offboard user',
				routing: {
					request: {
						method: 'POST',
						url: '/ExecOffboardUser',
						body: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							user: '={{ $parameter.user }}',
							Scheduled: '={{ $parameter.Scheduled }}',
						},
					},
				},
			},
			{
				name: 'Universal Search',
				value: 'universalSearch',
				action: 'Universal search',
				routing: {
					request: {
						method: 'GET',
						url: '/execUniversalsearch',
						body: {
							name: '={{ $parameter.name }}',
						},
					},
				},
			},
		],
		default: 'getUser',
	}
];

export const userFields: INodeProperties[] = [
	{
		displayName: 'User ID',
		name: 'userId',
		type: 'string',
		default: '',
		required: true,
		description: 'The user ID to use for the user. This is the ID of the user.',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['getUser', 'getUserConditionalAccessPolicies', 'getUserDevices', 'getUserGroups'],
			},
		},
	},
	{
		displayName: 'Tenant Filter',
		name: 'tenantFilter',
		type: 'string',
		default: '',
		required: true,
		description: 'The tenant filter to use for the user. This is the tenant ID of the user.',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['getUser', 'getUserConditionalAccessPolicies', 'getUserCounts', 'getUserDevices', 'getUserGroups'],
			},
		},
	},
	// {
	// 	displayName: 'Include Logon Details',
	// 	name: 'includeLogonDetails',
	// 	type: 'string',
	// 	default: 'false',
	// 	options: [
	// 		{
	// 			name: 'True',
	// 			value: 'true',
	// 		},
	// 		{
	// 			name: 'False',
	// 			value: 'false',
	// 		},
	// 	],
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['user'],
	// 			operation: ['getUser'],
	// 		},
	// 	},
	// },
	// {
	// 	displayName: 'Graph Filter',
	// 	name: 'graphFilter',
	// 	type: 'string',
	// 	default: '',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['user'],
	// 			operation: ['getUser'],
	// 		},
	// 	},
	// },
	{
		displayName: 'Set Manager',
		name: 'setMananger',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['updateUser', 'addUserBulk'],
			},
		},
	},
	{
		displayName: 'Remove From Groups',
		name: 'removefromgroups',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['updateUser'],
			},
		},
	},
	{
		displayName: 'Add to Groups',
		name: 'addtogroups',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['updateUser'],
			},
		},
	},
	{
		displayName: 'Copy From',
		name: 'copyfrom',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['updateUser', 'addUserBulk'],
			},
		},
	},
	{
		displayName: 'Label',
		name: 'label',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['updateUser', 'addUserBulk'],
			},
		},
	},
	{
		displayName: 'Value',
		name: 'value',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['updateUser', 'addUserBulk'],
			},
		},
	},
	{
		displayName: 'ID',
		name: 'id',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['execRestoreDeletedUser'],
			},
		},
	},
	{
		displayName: 'Tenant Filter',
		name: 'tenantFilter',
		type: 'string',
		default: '',
		required: true,
		description: 'The tenant ID of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['execRestoreDeletedUser', 'addUser', 'addGuest'],
			},
		},
	},
	{
		displayName: 'Display Name',
		name: 'displayname',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser', 'addGuest'],
			},
		},
	},
	{
		displayName: 'Username',
		name: 'mailnickname',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Auto Password',
		name: 'autopassword',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Password',
		name: 'password',
		type: 'string',
		typeOptions: {
			password: true,
		},
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
				autopassword: [false],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'givenname',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Last Name',
		name: 'surname',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Domain',
		name: 'primaryDomain',
		type: 'fixedCollection',
		default: {},
		required: true,
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'domainValues',
				displayName: 'Domain',
				values: [
					{
						displayName: 'Label',
						name: 'label',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Added Fields',
						name: 'addedFields',
						type: 'json',
						default: '{}',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Usage Location',
		name: 'UsageLocation',
		type: 'fixedCollection',
		default: {},
		required: true,
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'locationValues',
				displayName: 'Usage Location',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						required: true,
					},
					{
						displayName: 'Label',
						name: 'label',
						type: 'string',
						default: '',
						required: true,
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Added Aliases',
		name: 'addedaliases',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Copy From',
		name: 'copyfrom',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Must Change Password',
		name: 'mustchangepass',
		type: 'boolean',
		default: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Country',
		name: 'country',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Postal Code',
		name: 'postalcode',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Company Name',
		name: 'companyname',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Street Address',
		name: 'streetaddress',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Mobile Phone',
		name: 'mobilephone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Business Phone',
		name: 'businessphone',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Job Title',
		name: 'jobtitle',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Department',
		name: 'department',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'City',
		name: 'city',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Set Manager',
		name: 'setmanager',
		type: 'fixedCollection',
		default: {},
		description: 'The manager of the user. Either the UserPrincipalName(UPN) or the ID of the manager.',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'managerValues',
				displayName: 'Manager',
				values: [
					{
						displayName: 'Value',
						name: 'value',
						type: 'string',
						default: '',
						description: 'UserPrincipalName(UPN) or ID of the manager',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Scheduled',
		name: 'Scheduled',
		type: 'fixedCollection',
		default: {},
		description: 'Schedule the user creation for a specific date and time',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'scheduledValues',
				displayName: 'Scheduled Settings',
				values: [
					{
						displayName: 'Enabled',
						name: 'enabled',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'Date',
						name: 'date',
						type: 'dateTime',
						default: '',
						displayOptions: {
							show: {
								enabled: [true],
							},
						},
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Post Execution',
		name: 'PostExecution',
		type: 'fixedCollection',
		default: {},
		description: 'Configure post-execution actions',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				name: 'postExecutionValues',
				displayName: 'Post Execution Settings',
				values: [
					{
						displayName: 'Send to Webhook',
						name: 'webhook',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'Send to PSA',
						name: 'psa',
						type: 'boolean',
						default: false,
					},
					{
						displayName: 'Send to Email',
						name: 'email',
						type: 'boolean',
						default: false,
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Email Address',
		name: 'emailaddress',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addGuest'],
			},
		},
	},
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		default: '',
		required: true,
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['universalSearch'],
			},
		},
	},
	{
		displayName: 'Scheduled',
		name: 'scheduled',
		type: 'string',
		default: '',
		description: 'Specifies the date and time when the user should be offboarded. If not specified, the user will be offboarded immediately. Input should be a valid datetime object. This parameter is optional.',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'User',
		name: 'user',
		type: 'string',
		default: '',
		required: true,
		description: 'The username of the user being offboarded. UserPrincipalName(UPN) should be used. This parameter is mandatory.',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
];
