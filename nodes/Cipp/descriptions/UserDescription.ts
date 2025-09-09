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
							usageLocation: {
								label: '={{ $parameter.usageLocation === "US" ? "United States of America" : $parameter.usageLocation === "ES" ? "Spain" : $parameter.usageLocation === "SE" ? "Sweden" : $parameter.usageLocation === "CH" ? "Switzerland" : $parameter.usageLocation === "TW" ? "Taiwan" : $parameter.usageLocation === "TH" ? "Thailand" : $parameter.usageLocation === "AE" ? "United Arab Emirates" : $parameter.usageLocation === "GB" ? "United Kingdom" : $parameter.usageLocation === "AR" ? "Argentina" : $parameter.usageLocation === "AU" ? "Australia" : $parameter.usageLocation === "AT" ? "Austria" : $parameter.usageLocation === "BE" ? "Belgium" : $parameter.usageLocation === "BR" ? "Brazil" : $parameter.usageLocation === "CA" ? "Canada" : $parameter.usageLocation === "CL" ? "Chile" : $parameter.usageLocation === "CO" ? "Colombia" : $parameter.usageLocation === "CZ" ? "Czechia" : $parameter.usageLocation === "DK" ? "Denmark" : $parameter.usageLocation === "EG" ? "Egypt" : $parameter.usageLocation === "FI" ? "Finland" : $parameter.usageLocation === "FR" ? "France" : $parameter.usageLocation === "DE" ? "Germany" : $parameter.usageLocation === "HK" ? "Hong Kong" : $parameter.usageLocation === "IN" ? "India" : $parameter.usageLocation === "ID" ? "Indonesia" : $parameter.usageLocation === "IE" ? "Ireland" : $parameter.usageLocation === "IL" ? "Israel" : $parameter.usageLocation === "IT" ? "Italy" : $parameter.usageLocation === "JP" ? "Japan" : $parameter.usageLocation === "KR" ? "Korea (Republic Of)" : $parameter.usageLocation === "MY" ? "Malaysia" : $parameter.usageLocation === "MX" ? "Mexico" : $parameter.usageLocation === "NL" ? "Netherlands" : $parameter.usageLocation === "NZ" ? "New Zealand" : $parameter.usageLocation === "NO" ? "Norway" : $parameter.usageLocation === "PE" ? "Peru" : $parameter.usageLocation === "PH" ? "Philippines" : $parameter.usageLocation === "PL" ? "Poland" : $parameter.usageLocation === "PT" ? "Portugal" : $parameter.usageLocation === "QA" ? "Qatar" : $parameter.usageLocation === "SA" ? "Saudi Arabia" : $parameter.usageLocation === "SG" ? "Singapore" : $parameter.usageLocation === "ZA" ? "South Africa" : $parameter.usageLocation === "UY" ? "Uruguay" : $parameter.usageLocation }}',
								value: '={{ $parameter.usageLocation }}',
							},
							givenName: '={{ $parameter.givenName }}',
							surname: '={{ $parameter.surname }}',
							displayName: '={{ $parameter.displayName }}',
							username: '={{ $parameter.username }}',
							primDomain: {
								label: '={{ $parameter.primDomain }}',
								value: '={{ $parameter.primDomain }}',
								addedFields: {},
							},
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
							businessPhones: '={{ $parameter.businessPhones ? $parameter.businessPhones.split(",").map(phone => phone.trim()).filter(phone => phone !== "") : undefined }}',
							otherMails: '={{ $parameter.otherMails || undefined }}',
							defaultAttributes: '={{ $parameter.defaultAttributes && $parameter.defaultAttributes !== "{}" && Object.keys(JSON.parse($parameter.defaultAttributes)).length > 0 ? JSON.parse($parameter.defaultAttributes) : undefined }}',
							setManager: '={{ $parameter.setManager ? Object.fromEntries([["label", $parameter.setManager], ["value", $parameter.setManager], ["addedFields", {}]]) : undefined }}',
							Scheduled: '={{ $parameter.Scheduled && $parameter.Scheduled.trim() !== "" ? {"enabled": true, "date": Math.floor(new Date($parameter.Scheduled).getTime() / 1000)} : {"enabled": false} }}',
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
			// {
			// 	name: 'Edit User',
			// 	value: 'updateUser',
			// 	action: 'Edit user',
			// 	routing: {
			// 		request: {
			// 			method: 'POST',
			// 			url: '/editUser',
			// 			body: {
			// 				setmananger: '={{ $parameter.setMananger }}',
			// 				removefromgroups: '={{ $parameter.removefromgroups }}',
			// 				addtogroups: '={{ $parameter.addtogroups }}',
			// 				copyfrom: '={{ $parameter.copyfrom }}',
			// 				label: '={{ $parameter.label }}',
			// 				value: '={{ $parameter.value }}',
			// 			},
			// 		},
			// 	},
			// },
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
							ConvertToShared: '={{ $parameter.ConvertToShared }}',
							forward: '={{ $parameter.forward ? [Object.fromEntries([["label", $parameter.forward], ["value", $parameter.forward]])] : undefined }}',
							ResetPass: '={{ $parameter.ResetPass }}',
							RemoveMFADevices: '={{ $parameter.RemoveMFADevices }}',
							RevokeSessions: '={{ $parameter.RevokeSessions }}',
							RemoveGroups: '={{ $parameter.RemoveGroups }}',
							removePermissions: '={{ $parameter.removePermissions }}',
							RemoveMobile: '={{ $parameter.RemoveMobile }}',
							RemoveRules: '={{ $parameter.RemoveRules }}',
							DisableSignIn: '={{ $parameter.DisableSignIn }}',
							HideFromGAL: '={{ $parameter.HideFromGAL }}',
							removeCalendarInvites: '={{ $parameter.removeCalendarInvites }}',
							Scheduled: '={{ $parameter.Scheduled && $parameter.Scheduled.trim() !== "" ? {"enabled": true, "date": Math.floor(new Date($parameter.Scheduled).getTime() / 1000)} : {"enabled": false} }}',
							tenantFilter: '={{ Object.fromEntries([["value", $parameter.tenantDomain], ["label", $parameter.tenantLabel + " (" + $parameter.tenantDomain + ")"], ["type", "Tenant"], ["addedFields", Object.fromEntries([["defaultDomainName", $parameter.tenantDomain], ["displayName", $parameter.tenantLabel], ["customerId", $parameter.customerId || ""]])]]) }}',
							user: '={{ [Object.fromEntries([["label", $parameter.userName + " (" + $parameter.userEmail + ")"], ["value", $parameter.userEmail], ["addedFields", {}]])] }}',
							ClearImmutableId: '={{ $parameter.ClearImmutableId }}',
							disableForwarding: '={{ $parameter.disableForwarding }}',
							KeepCopy: '={{ $parameter.KeepCopy }}',
							RemoveLicenses: '={{ $parameter.RemoveLicenses }}',
							DeleteUser: '={{ $parameter.DeleteUser }}'
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
		type: 'options',
		default: 'US',
		required: true,
		description: 'The usage location for the user',
		options: [
			{ name: 'Argentina', value: 'AR' },
			{ name: 'Australia', value: 'AU' },
			{ name: 'Austria', value: 'AT' },
			{ name: 'Belgium', value: 'BE' },
			{ name: 'Brazil', value: 'BR' },
			{ name: 'Canada', value: 'CA' },
			{ name: 'Chile', value: 'CL' },
			{ name: 'Colombia', value: 'CO' },
			{ name: 'Czechia', value: 'CZ' },
			{ name: 'Denmark', value: 'DK' },
			{ name: 'Egypt', value: 'EG' },
			{ name: 'Finland', value: 'FI' },
			{ name: 'France', value: 'FR' },
			{ name: 'Germany', value: 'DE' },
			{ name: 'Hong Kong', value: 'HK' },
			{ name: 'India', value: 'IN' },
			{ name: 'Indonesia', value: 'ID' },
			{ name: 'Ireland', value: 'IE' },
			{ name: 'Israel', value: 'IL' },
			{ name: 'Italy', value: 'IT' },
			{ name: 'Japan', value: 'JP' },
			{ name: 'Korea (Republic Of)', value: 'KR' },
			{ name: 'Malaysia', value: 'MY' },
			{ name: 'Mexico', value: 'MX' },
			{ name: 'Netherlands', value: 'NL' },
			{ name: 'New Zealand', value: 'NZ' },
			{ name: 'Norway', value: 'NO' },
			{ name: 'Peru', value: 'PE' },
			{ name: 'Philippines', value: 'PH' },
			{ name: 'Poland', value: 'PL' },
			{ name: 'Portugal', value: 'PT' },
			{ name: 'Qatar', value: 'QA' },
			{ name: 'Saudi Arabia', value: 'SA' },
			{ name: 'Singapore', value: 'SG' },
			{ name: 'South Africa', value: 'ZA' },
			{ name: 'Spain', value: 'ES' },
			{ name: 'Sweden', value: 'SE' },
			{ name: 'Switzerland', value: 'CH' },
			{ name: 'Taiwan', value: 'TW' },
			{ name: 'Thailand', value: 'TH' },
			{ name: 'United Arab Emirates', value: 'AE' },
			{ name: 'United Kingdom', value: 'GB' },
			{ name: 'United States of America', value: 'US' },
			{ name: 'Uruguay', value: 'UY' },
		],
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
		type: 'string',
		default: '',
		required: true,
		description: 'Primary domain for the user (e.g., n8layer.com)',
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
		type: 'string',
		default: '',
		description: 'Business phone numbers (comma-separated, e.g., "+1-555-123-4567, +1-555-987-6543")',
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
		type: 'string',
		default: '',
		description: 'Manager email address',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['addUser'],
			},
		},
	},
	// {
	// 	displayName: 'Scheduled Creation',
	// 	name: 'Scheduled',
	// 	type: 'string',
	// 	default: '',
	// 	description: 'Schedule user creation for a specific date/time (e.g., "2024-12-31T23:59:59Z"). Leave empty for immediate creation.',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['user'],
	// 			operation: ['addUser'],
	// 		},
	// 	},
	// },
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
		description: 'The tenant ID of the user or the domain name (e.g., "n8layer.com")',
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
	// Offboard User Fields
	{
		displayName: 'Convert to Shared',
		name: 'ConvertToShared',
		type: 'boolean',
		default: true,
		description: 'Whether to convert the user mailbox to a shared mailbox',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove Licenses',
		name: 'RemoveLicenses',
		type: 'boolean',
		default: true,
		description: 'Whether to remove all licenses from the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Reset Password',
		name: 'ResetPass',
		type: 'boolean',
		default: true,
		description: 'Whether to reset the user password',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Delete User',
		name: 'DeleteUser',
		type: 'boolean',
		default: true,
		description: 'Whether to delete the user account',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove MFA Devices',
		name: 'RemoveMFADevices',
		type: 'boolean',
		default: true,
		description: 'Whether to remove all MFA devices from the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Revoke Sessions',
		name: 'RevokeSessions',
		type: 'boolean',
		default: true,
		description: 'Whether to revoke all active sessions for the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove Groups',
		name: 'RemoveGroups',
		type: 'boolean',
		default: true,
		description: 'Whether to remove the user from all groups',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove Permissions',
		name: 'removePermissions',
		type: 'boolean',
		default: true,
		description: 'Whether to remove all permissions assigned to the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove Mobile',
		name: 'RemoveMobile',
		type: 'boolean',
		default: true,
		description: 'Whether to remove mobile device access for the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove Rules',
		name: 'RemoveRules',
		type: 'boolean',
		default: true,
		description: 'Whether to remove all rules associated with the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Disable Sign In',
		name: 'DisableSignIn',
		type: 'boolean',
		default: true,
		description: 'Whether to disable sign-in for the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Hide From GAL',
		name: 'HideFromGAL',
		type: 'boolean',
		default: true,
		description: 'Whether to hide the user from the Global Address List',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Remove Calendar Invites',
		name: 'removeCalendarInvites',
		type: 'boolean',
		default: true,
		description: 'Whether to remove all calendar invites for the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Clear Immutable ID',
		name: 'ClearImmutableId',
		type: 'boolean',
		default: true,
		description: 'Whether to clear the immutable ID for the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Disable Forwarding',
		name: 'disableForwarding',
		type: 'boolean',
		default: false,
		description: 'Whether to disable email forwarding for the user',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Keep Copy',
		name: 'KeepCopy',
		type: 'boolean',
		default: false,
		description: 'Whether to keep a copy of user data',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Scheduled',
		name: 'Scheduled',
		type: 'dateTime',
		default: '',
		description: 'The date and time when the operation will be scheduled',
		typeOptions: {
			timeFormat: 'HH:mm',
			minuteStep: 15,
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	// {
	// 	displayName: 'Scheduled',
	// 	name: 'Scheduled',
	// 	type: 'json',
	// 	default: '{"enabled":false}',
	// 	description: 'Schedule the offboarding operation (JSON format). Set enabled to true and add date field if needed.',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['user'],
	// 			operation: ['offboardUser'],
	// 		},
	// 	},
	// },
	{
		displayName: 'Tenant Label',
		name: 'tenantLabel',
		type: 'string',
		default: '',
		required: true,
		placeholder: '*Partner Tenant',
		description: 'The display name for the tenant',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Domain',
		name: 'tenantDomain',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'n8layer.com',
		description: 'The domain name of the tenant',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'Forward',
		name: 'forward',
		type: 'string',
		default: '',
		description: 'The email address to forward the user\'s email to',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	// {
	// 	displayName: 'Customer ID',
	// 	name: 'customerId',
	// 	type: 'string',
	// 	default: '',
	// 	placeholder: 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
	// 	description: 'The customer ID (GUID) for the tenant (optional)',
	// 	displayOptions: {
	// 		show: {
	// 			resource: ['user'],
	// 			operation: ['offboardUser'],
	// 		},
	// 	},
	// },
	{
		displayName: 'User Name',
		name: 'userName',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'First Last',
		description: 'The display name of the user to offboard',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
	{
		displayName: 'User Email',
		name: 'userEmail',
		type: 'string',
		default: '',
		required: true,
		placeholder: 'firstlast@n8layer.com',
		description: 'The email address (UPN) of the user to offboard',
		displayOptions: {
			show: {
				resource: ['user'],
				operation: ['offboardUser'],
			},
		},
	},
];
