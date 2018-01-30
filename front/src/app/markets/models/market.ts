import { Country } from 'core/models/country';
import { Language } from 'core/models/language';

export interface Market {
    id: string;
    title: string;
    acronym: string;
    description: string;
    location: string;
    country: Country;
    language: Language;
}
