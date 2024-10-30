export const questions = [
	{
	  section: 1,
	  items: [
		{
		  label: 'First Name :',
		  type: 'text',
		  value: 'first_name'
		},
		{
		  label: 'Last Name :',
		  type: 'password',
		  value: 'last_name'
		},
		{
			label: 'Email :',
			type: 'email',
			value: 'email'
		  },
		  {
			label: 'Phone :',
			type: 'text',
			value: 'phone'
		  },
		  {
			label: 'Mailing Address :',
			type: 'text',
			value: 'mailing_address',
		  }, 
		  {
			label: 'Billing Address :',
			type: 'text',
			value: 'biling_address',
		  }, 
		//   {
		// 	label: 'username',
		// 	type: 'text',
		// 	value: 'username'
		//   },
		//   {
		// 	label: 'password',
		// 	type: 'password',
		// 	value: 'password'
		//   }
	  ]
	},
	{   
	  section: 2,
	  items: [
		{
		  label: 'Street Address',
		  type: 'text',
		  value: 'street'
		},
		{
		  label: 'City',
		  type: 'text',
		  value: 'city'
		},
		{
		  label: 'State',
		  type: 'select',
		  value: 'state',
		  options: [ 'State 1', 'State 2']
		}
	  ]
	},
	{
	  section: 3,
	  items: [
		{
		  label: 'If you are ready to submit please press `Submit`',
		  type: 'information'
		}
	  ]
	}
  ]