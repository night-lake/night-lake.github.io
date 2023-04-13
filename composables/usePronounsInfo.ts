import {
	IdentityListing,
	PronounOpinion,
	PronounsListing,
	ROOT_CDN_URI,
	WordsListing,
} from "~/util/types";

export default function () {
	return {
		avatar: `${ROOT_CDN_URI}/amelia.png`,
		fullName: "amelia mae katherine",
		username: "nightlake",
		names: [
			{ value: "amelia", opinion: PronounOpinion.Yes },
			{ value: "cynthia", opinion: PronounOpinion.Yes },
			{ value: "aurelia", opinion: PronounOpinion.Okay },
			{ value: "skye", opinion: PronounOpinion.Okay },
			{ value: "amy", opinion: PronounOpinion.Nickname },
		] satisfies PronounsListing[],
		pronouns: [
			{ value: "she/her", opinion: PronounOpinion.Yes },
			{ value: "they/them (plural)", opinion: PronounOpinion.Yes },
			{ value: "fae/faer", opinion: PronounOpinion.Yes },
			{ value: "they/them (singular)", opinion: PronounOpinion.Maybe },
		] satisfies PronounsListing[],
		flags: [
			{ name: "transfeminine", flagURI: `${ROOT_CDN_URI}/transfem.png` },
			{ name: "genderfae", flagURI: `${ROOT_CDN_URI}/genderfae.png` },
			{ name: "lesbian", flagURI: `${ROOT_CDN_URI}/lesbian.png` },
		] satisfies IdentityListing[],
		words: [
			{
				header: "honorifcs",
				values: [
					{ value: "[no honorific]", opinion: PronounOpinion.Yes },
					{ value: "ma'am", opinion: PronounOpinion.Jokingly },
					{ value: "comrade", opinion: PronounOpinion.Testing },
					{ value: "ms.", opinion: PronounOpinion.Maybe },
					{ value: "mx.", opinion: PronounOpinion.Okay },
					{ value: "mr.", opinion: PronounOpinion.Nope },
					{ value: "sir", opinion: PronounOpinion.Nope },
					{ value: "madam", opinion: PronounOpinion.Nope },
					{ value: "sai", opinion: PronounOpinion.Nope },
					{ value: "mir", opinion: PronounOpinion.Nope },
					{ value: "shazam", opinion: PronounOpinion.Nope },
					{ value: "zam", opinion: PronounOpinion.Nope },
					{ value: "mrs.", opinion: PronounOpinion.Nope },
				],
			},
			{
				header: "terms",
				values: [
					{ value: "girl", opinion: PronounOpinion.Yes },
					{ value: "sis", opinion: PronounOpinion.Yes },
					{ value: "woman", opinion: PronounOpinion.Maybe },
					{ value: "lady", opinion: PronounOpinion.Maybe },
					{ value: "person", opinion: PronounOpinion.Okay },
					{ value: "dude", opinion: PronounOpinion.Nope },
					{ value: "man", opinion: PronounOpinion.Nope },
					{ value: "boy", opinion: PronounOpinion.Nope },
					{ value: "buddy", opinion: PronounOpinion.Nope },
					{ value: "pal", opinion: PronounOpinion.Nope },
					{ value: "bro", opinion: PronounOpinion.Nope },
					{ value: "sib", opinion: PronounOpinion.Nope },
					{ value: "guy", opinion: PronounOpinion.Nope },
				],
			},
			{
				header: "compliments",
				values: [
					{ value: "pretty", opinion: PronounOpinion.OnlyIfClose },
					{ value: "cute", opinion: PronounOpinion.OnlyIfClose },
					{ value: "sexc", opinion: PronounOpinion.Jokingly },
					{ value: "handsome", opinion: PronounOpinion.Nope },
					{ value: "hot", opinion: PronounOpinion.Nope },
					{ value: "sexy", opinion: PronounOpinion.Nope },
				],
			},
			{
				header: "relationship terms",
				values: [
					{ value: "bestie", opinion: PronounOpinion.Yes },
					{ value: "wifey", opinion: PronounOpinion.OnlyIfClose },
					{ value: "boo", opinion: PronounOpinion.OnlyIfClose },
					{ value: "beloved", opinion: PronounOpinion.OnlyIfClose },
					{
						value: "girlfriend",
						opinion: PronounOpinion.OnlyIfClose,
					},
					{ value: "wife", opinion: PronounOpinion.Jokingly },
					{ value: "kissmate", opinion: PronounOpinion.Jokingly },
					{ value: "friend", opinion: PronounOpinion.Nope },
					{ value: "partner", opinion: PronounOpinion.Nope },
					{ value: "boyfriend", opinion: PronounOpinion.Nope },
					{ value: "joyfriend", opinion: PronounOpinion.Nope },
					{ value: "husband", opinion: PronounOpinion.Nope },
					{ value: "darling", opinion: PronounOpinion.Nope },
				],
			},
		] satisfies WordsListing[],
	};
}
