import accountImg from '../../../../assets/images/HelpPage/account.png';
import rulesImg from '../../../../assets/images/HelpPage/rules.png';
import paymentImg from '../../../../assets/images/HelpPage/payment.png';
import gameImg from '../../../../assets/images/HelpPage/game.png';
import authImg from '../../../../assets/images/HelpPage/auth.png';
import helpImg from '../../../../assets/images/HelpPage/help.png';

export const TITLES = [
	{
		title: 'ACCOUNT',
		logo: accountImg,
		desc: 'some description about Account',
		questions: [
			'How do I create an Account ?',
			"What's the protection you offer ?",
			'How can I mentain my account ?'
		]
	},
	{
		title: 'RULES',
		logo: rulesImg,
		desc: 'some description about Rules',
		questions: [
			'What will cause my account to get blocked ?',
			'How many friend I can invite ?',
			"Can I share a Quiz with someone who doesn't have an account ?",
			'Why I got kicked from playing a Quiz ?'
		]
	},
	{
		title: 'HELP',
		logo: helpImg,
		desc: 'Some description about Help',
		questions: [
			"I don't know how to create a Quiz ?",
			"I don't know how to edit an existing Quiz ?",
			'How can I add a title to a Quiz ?',
			'How can I share a Quiz ?',
			'Why is my account blocked ?',
			"Can't register my credit card ?"
		]
	},
	{
		title: 'PLAY',
		logo: gameImg,
		desc: 'some description about Play',
		questions: [
			'How do I play a Quiz ?',
			'Can I play free quizzes ?',
			'Is there a limit for playing to many quizzes ?',
			'Can I play with more then 1 friend ?',
			'Why is my game cancelled ?',
			"I don't know how to play a Quiz ?"
		]
	},
	{
		title: 'PAYMENTS',
		logo: paymentImg,
		desc: 'some description about PAYMENTS',
		questions: [
			'How can I purchase a Quiz ?',
			'Why is my Credit card not working ?',
			'What information do I need to check out ?',
			'What pay methods can I use ?',
			'Can I get a refund after purchasing your Product ?',
			'Is your product purchased with one-time payment ?'
		]
	},
	{
		title: 'AUTH',
		logo: authImg,
		desc: 'some description about AUTH',
		questions: [
			'How does this App protect my account ?',
			'How long am I going to stay logged In ?',
			'How can my account be hacked ?',
			'Can I have 2 accounts with the same email ?'
		]
	}
];
