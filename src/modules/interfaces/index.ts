export interface DataStructure {
    author: string;
    content: string;
    description: string;
    publishedAt: string;
    title: string;
    url: string;
    urlToImage: string;
    source: Source;
}

interface Source {
    name: string;
    id: string;
}

export interface DataSources {
    category: string;
    country: string;
    description: string;
    id: string;
    language: string;
    name: string;
    url: string;
}

export interface CountryType {
    countryName: string;
    countryCode: string;
}

export const category = [ "business", "entertainment", "general", "health", "science", "sports", "technology" ];

export const langs = [
	{ langName: "Arabic", langCode: "ar" },
	{ langName: "German", langCode: "de" },
    { langName: "English", langCode: "en" },
    { langName: "Spanish", langCode: "es" },
    { langName: "French", langCode: "fr" },
    { langName: "Hebrew", langCode: "he" },
    { langName: "Italian", langCode: "it" },
    { langName: "Dutch", langCode: "nl" },
    { langName: "Norwegian", langCode: "no" },
    { langName: "Portuguese", langCode: "pt" },
    { langName: "Russian", langCode: "ru" },
    { langName: "", langCode: "se" },
    { langName: "", langCode: "ud" },
    { langName: "Chinese", langCode: "zh" },
];

export const countrys: CountryType[] = [
	{ countryName: "UAE", countryCode: "ae" },
	{ countryName: "Argentina", countryCode: "ar" },
    { countryName: "Austria", countryCode: "at" },
    { countryName: "Australia", countryCode: "au" },
    { countryName: "Belgium", countryCode: "be" },
    { countryName: "Bulgaria", countryCode: "bg" },
    { countryName: "Brazil", countryCode: "br" },
    { countryName: "Canada", countryCode: "ca" },
    { countryName: "Switzerland", countryCode: "ch" },
    { countryName: "China", countryCode: "cn" },
    { countryName: "Colombia", countryCode: "co" },
    { countryName: "Cuba", countryCode: "cu" },
    { countryName: "Czech Republic", countryCode: "cz" },
    { countryName: "Germany", countryCode: "de" },
    { countryName: "Egypt", countryCode: "eg" },
    { countryName: "France", countryCode: "fr" },
    { countryName: "United Kingdom", countryCode: "gb" },
    { countryName: "Greece", countryCode: "gr" },
    { countryName: "Hong Kong", countryCode: "hk" },
    { countryName: "Hungary", countryCode: "hu" },
    { countryName: "Indonesia", countryCode: "id" },
    { countryName: "Ireland", countryCode: "ie" },
    { countryName: "Israel", countryCode: "il" },
    { countryName: "India", countryCode: "in" },
    { countryName: "Italy", countryCode: "it" },
    { countryName: "Japan", countryCode: "jp" },
    { countryName: "Korea", countryCode: "kr" },
    { countryName: "Lithuania", countryCode: "lt" },
    { countryName: "Latvia", countryCode: "lv" },
    { countryName: "Morocco", countryCode: "ma" },
    { countryName: "Mexico", countryCode: "mx" },
    { countryName: "Malaysia", countryCode: "my" },
    { countryName: "Nigeria", countryCode: "ng" },
    { countryName: "Netherlands", countryCode: "nl" },
    { countryName: "Norway", countryCode: "no" },
    { countryName: "New Zealand", countryCode: "nz" },
    { countryName: "Philippines", countryCode: "ph" },
    { countryName: "Poland", countryCode: "pl" },
    { countryName: "Portugal", countryCode: "pt" },
    { countryName: "Romania", countryCode: "ro" },
    { countryName: "Serbia", countryCode: "rs" },
    { countryName: "Russian Federation", countryCode: "ru" },
    { countryName: "Saudi Arabia", countryCode: "sa" },
    { countryName: "Sweden", countryCode: "se" },
    { countryName: "Singapore", countryCode: "sg" },
    { countryName: "Slovenia", countryCode: "si" },
    { countryName: "Slovakia", countryCode: "sk" },
    { countryName: "Thailand", countryCode: "th" },
    { countryName: "Turkey", countryCode: "tr" },
    { countryName: "Taiwan", countryCode: "tw" },
    { countryName: "Ukraine", countryCode: "ua" },
    { countryName: "United States", countryCode: "us" },
    { countryName: "Venezuela", countryCode: "ve" },
    { countryName: "South Africa", countryCode: "za" },
];