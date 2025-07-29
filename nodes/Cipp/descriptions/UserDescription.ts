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
						url: '/AddUser',
						body: {
							tenantFilter: '={{ $parameter.tenantFilter }}',
							usageLocation: '={{ JSON.parse($parameter.usageLocation) }}',
							givenName: '={{ $parameter.givenName }}',
							surname: '={{ $parameter.surname }}',
							displayName: '={{ $parameter.displayName }}',
							username: '={{ $parameter.username }}',
							primDomain: '={{ JSON.parse($parameter.primDomain) }}',
							Autopassword: '={{ $parameter.Autopassword }}',
							MustChangePass: '={{ $parameter.MustChangePass }}',
							removeLicenses: '={{ $parameter.removeLicenses }}',
							jobTitle: '={{ $parameter.jobTitle || undefined }}',
							streetAddress: '={{ $parameter.streetAddress || undefined }}',
							city: '={{ $parameter.city || undefined }}',
							state: '={{ $parameter.state || undefined }}',
							postalCode: '={{ $parameter.postalCode || undefined }}',
							country: '={{ $parameter.country || undefined }}',
							companyName: '={{ $parameter.companyName || undefined }}',
							department: '={{ $parameter.department || undefined }}',
							mobilePhone: '={{ $parameter.mobilePhone || undefined }}',
							businessPhones: '={{ $parameter.businessPhones ? JSON.parse($parameter.businessPhones) : undefined }}',
							otherMails: '={{ $parameter.otherMails || undefined }}',
							defaultAttributes: '={{ $parameter.defaultAttributes ? JSON.parse($parameter.defaultAttributes) : undefined }}',
							setManager: '={{ $parameter.setManager ? JSON.parse($parameter.setManager) : undefined }}',
							Scheduled: '={{ $parameter.Scheduled ? JSON.parse($parameter.Scheduled) : {"enabled":false} }}',
							password: '={{ $parameter.password || undefined }}',
							webhook: '={{ $parameter.webhook || false }}',
							email: '={{ $parameter.email || false }}',
							psa: '={{ $parameter.psa || false }}',
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
	// Add User Fields
	{
		displayName: 'Usage Location',
		name: 'usageLocation',
		type: 'json',
		default: '{"value":"US","label":"United States"}',
		required: true,
		description: 'The usage location for the user (JSON format with value and label)',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'First Name',
		name: 'givenName',
		type: 'string',
		default: '',
		required: true,
		description: 'The first name of the user',
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
		description: 'The last name of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Display Name',
		name: 'displayName',
		type: 'string',
		default: '',
		required: true,
		description: 'The display name of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Username',
		name: 'username',
		type: 'string',
		default: '',
		required: true,
		description: 'The username for the user (without domain)',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Primary Domain',
		name: 'primDomain',
		type: 'json',
		default: '{"label":"example.com","value":"example.com","addedFields":{}}',
		required: true,
		description: 'The primary domain for the user (JSON format). Label and value should both be the domain name.',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Auto Generate Password',
		name: 'Autopassword',
		type: 'boolean',
		default: true,
		description: 'Whether to automatically generate a password',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Must Change Password',
		name: 'MustChangePass',
		type: 'boolean',
		default: true,
		description: 'Whether the user must change their password at next login',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Remove Licenses',
		name: 'removeLicenses',
		type: 'boolean',
		default: false,
		description: 'Whether to remove licenses from the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Job Title',
		name: 'jobTitle',
		type: 'string',
		default: '',
		description: 'The job title of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Street Address',
		name: 'streetAddress',
		type: 'string',
		default: '',
		description: 'The street address of the user',
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
		description: 'The city of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'State/Province',
		name: 'state',
		type: 'string',
		default: '',
		description: 'The state or province of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Postal Code',
		name: 'postalCode',
		type: 'string',
		default: '',
		description: 'The postal code of the user',
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
		description: 'The country of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Company Name',
		name: 'companyName',
		type: 'string',
		default: '',
		description: 'The company name of the user',
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
		description: 'The department of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Mobile Phone',
		name: 'mobilePhone',
		type: 'string',
		default: '',
		description: 'The mobile phone number of the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Business Phones',
		name: 'businessPhones',
		type: 'json',
		default: '[""]',
		description: 'Business phone numbers (JSON array of strings)',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Other Email Addresses',
		name: 'otherMails',
		type: 'string',
		default: '',
		description: 'Additional email addresses for the user (comma-separated)',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Default Attributes',
		name: 'defaultAttributes',
		type: 'json',
		default: '{}',
		description: 'Default attributes for the user (JSON format)',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Set Manager',
		name: 'setManager',
		type: 'json',
		default: '{"label":"","value":"","addedFields":{}}',
		description: 'Manager information (JSON format). Set label to display name and value to email address.',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Scheduled Creation',
		name: 'Scheduled',
		type: 'json',
		default: '{"enabled":false}',
		description: 'Schedule user creation (JSON format). Set enabled to true and add date field if needed.',
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
		description: 'Manual password (only used if Auto Generate Password is false)',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
				Autopassword: [false],
			},
		},
	},
	{
		displayName: 'Send to Webhook',
		name: 'webhook',
		type: 'boolean',
		default: false,
		description: 'Whether to send results to webhook',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Send to Email',
		name: 'email',
		type: 'boolean',
		default: false,
		description: 'Whether to send results to email',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	{
		displayName: 'Send to PSA',
		name: 'psa',
		type: 'boolean',
		default: false,
		description: 'Whether to send results to PSA',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
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
				operation: ['updateUser'],
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
				operation: ['updateUser'],
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
				operation: ['updateUser'],
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
				operation: ['updateUser'],
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
				operation: ['execRestoreDeletedUser', 'addGuest', 'addUser'],
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
				operation: ['addGuest'],
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
