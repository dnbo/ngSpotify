import { Artist } from './artist';
import { ExternalUrl } from './external-url';

export class Track {
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrl[];
    href: string;
    id: string;
    is_playable: boolean;
    type: string;
    uri: string;
    name: string;
    track_number?: number;
}
