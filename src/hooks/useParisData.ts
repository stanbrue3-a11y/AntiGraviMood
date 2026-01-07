import { useQuery } from '@tanstack/react-query';
import { fetchParisData } from '../services/parisData';

export const useParisParks = (placeName?: string) => {
    return useQuery({
        queryKey: ['paris-parks', placeName],
        queryFn: () => {
            if (!placeName) throw new Error("No place name provided");
            return fetchParisData(placeName);
        },
        enabled: !!placeName && (
            placeName.toLowerCase().includes('parc') ||
            placeName.toLowerCase().includes('jardin') ||
            placeName.toLowerCase().includes('square')
        ),
        staleTime: 1000 * 60 * 60 * 24, // 24 hours (Open Data rarely changes hourly)
    });
};
