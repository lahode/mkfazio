import { Market } from '../../markets/models/market';
import { Sector } from './sector';
import { Country } from 'core/models/country';
import { Language } from 'core/models/language';

export interface Company {
    id: string;
    title: string;
    shortname: string;
    acronym: string;
    description: string;
    market: Market;
    sector: Sector;
    country: Country;
    currency: string;
    oneday: number;
    oneweek: number;
    onemonth: number;
    oneyear: number;
    oneyearhigh: number;
    oneyearlow: number;
    capital: number;
    dividend: number;
    eps: number;
    pe: number;
    pb: number;
    evebitda: number;
    lastprice: number;
    officialclose: number;
    exchange: number;
    updated: Date;
    language: Language;
}
