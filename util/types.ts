export enum PronounOpinion {
	Yes,
	OnlyIfClose,
	Jokingly,
	Maybe,
	Nickname,
	Testing,
	Okay,
	Nope,
}

export interface PronounsListing {
	value: string;
	opinion: PronounOpinion;
}

export interface IdentityListing {
	name: string;
	flagURI: string;
}

export interface WordsListing {
	header: string;
	values: PronounsListing[];
}

export const ROOT_CDN_URI =
	"https://us-east-1.tixte.net/uploads/nightlake.tixte.co";
