import { ICredentialType, INodeProperties, Icon } from 'n8n-workflow';

export class CippOAuth2Api implements ICredentialType {
	name = 'cippOAuth2Api';
	displayName = 'CIPP OAuth2 API';
	documentationUrl = 'https://docs.cipp.app/api-documentation/setup-and-authentication';
	extends = ['oAuth2Api'];
	icon = 'file:Cipp.svg' as Icon;
	properties: INodeProperties[] = [
		{
			displayName: 'Grant Type',
			name: 'grantType',
			type: 'hidden',
			default: 'clientCredentials',
		},
		{
			displayName: 'Access Token URL',
			name: 'accessTokenUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://login.microsoftonline.com/YOUR_TENANT_ID/oauth2/v2.0/token',
			description: 'CIPP Portal > Integrations > CIPP',
		},
		{
			displayName: 'API URL',
			name: 'ApiUrl',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'https://cippxyz123.azurewebsites.net',
			description: 'CIPP Portal > Integrations > CIPP',
		},
		{
			displayName: 'Scope',
			name: 'scope',
			type: 'string',
			default: '',
			required: true,
			placeholder: 'api://CLIENT_ID/.default',
			description: 'Replace "CLIENT_ID" with your Azure AD application client ID from above.',
		},
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'hidden',
			default: 'body',
		},
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
			description: 'Your Azure AD application client ID',
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: {
				password: true,
			},
			default: '',
			required: true,
			description: 'Your Azure AD application client secret',
		},
	];
}
