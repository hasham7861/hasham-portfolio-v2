import {
	SAVE_EMAIL,
	SAVE_SUBJECT,
	SAVE_MESSAGE,
	CLEAR_EMAIL_FORM,
	PORTFOLIO_PEEK,
	PORTFOLIO_EXPAND,
	PORTFOLIO_CLOSE,
}	from '../constants/actionTypes';

// The following actions are possible on emailMessage
export const saveEmail = email => ({
	type:SAVE_EMAIL,
	email
});
export const saveSubject = subject => ({
	type:SAVE_SUBJECT,
	subject
});
export const saveMessage = message => ({
	type:SAVE_MESSAGE,
	message
});
export const clearEmailForm = () =>({
	type:CLEAR_EMAIL_FORM,
});

export const portfolioPeek = portfolioOffsetValue => ({
		type:PORTFOLIO_PEEK,
		portfolioOffsetValue
});

export const portfolioExpand = portfolioOffsetValue => ({
	type:PORTFOLIO_EXPAND,
	portfolioOffsetValue
});

export const portfolioClose =portfolioOffsetValue => ({
	type:PORTFOLIO_CLOSE,
	portfolioOffsetValue
});
