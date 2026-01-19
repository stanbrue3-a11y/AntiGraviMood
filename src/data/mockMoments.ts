import { Moment } from '../stores/useMomentsStore';

export const GLOBAL_MOMENTS: Moment[] = [
    {
        id: '1',
        type: 'image',
        placeId: 'poi-001', // Le Comptoir Général
        placeName: 'Le Comptoir Général',
        user: { name: 'Sarah', avatar: '👩‍🎨' },
        mood: 'festif',
        likes: 234,
        isLikedByMe: false,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHovqZtYajdSwsoRuXT3fjCZ7NaMRjo8JDFIEqrG2-ohL_X0UofdZMY-V5pr3OnZ1aPqF3aKc-jPjrdX_xJC4xUKB4ta5-Bqlv7O0x4R9q6MgS3dYjoR6NFrugFD6qgLExntFT2m4T7xT7g3yYB89jcHBPtd0wyB-YxkqAcg0vxxokdTap6eBCAYLie0M8fxpyUly7pugZ-fVD19arzt0XLv3vgTNojXdpxeOv1-cyu2QVJFkTzuRoYrmci85JHWpWtnGYKK7jHCXd_LzSUkHxjvKEVKrlYjTLP9zMSKdS2Uig&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "L'ambiance jungle ici est incroyable cet après-midi ! 🌿",
        verbatimDate: 'Il y a 2h',
        timestamp: Date.now() - 7200000
    },
    {
        id: '1b',
        type: 'image',
        placeId: 'poi-005', // Ground Control
        placeName: 'Ground Control',
        user: { name: 'Lucas', avatar: '🍕' },
        mood: 'festif',
        likes: 890,
        isLikedByMe: true,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHraEfoR-O2niwOV5I8heTP0sObk0BMY_GwlYTQ74hBcLl_r3XukSFyUS2_aLrWCtRjRNTpo-xpX9eT4bo6ZNf5F2aqgLg7ivE73amBmSBuZJlGQnKCaWYbM4HKVChu29Vrydz-fjkScvlqkJyj3vpr2EYcL9v6RXe6FpqMGvJWoxENCg3XQmX8fncL8ryb4G7IU0yRESz_iFrmZSxjJck99OU46yAF9BZgnlamtyk2wFuh0vLG-RQgisZojV8szZwYKuyXCfKQm6x3d8urKgD9KjRO4-LnnlAcGDkV-jg2gXEHQpXuvcS-AkpnQwLn-jMFvkQ61-n-vFCflnDKr48fL2fNshQt_DrSgZpgLvgiDmK4WJ3AI-wiDtn5sDLgRwHMj-b4bu2Op1-CuqROLc0NI9NogcbPc9_-4C7oJeyfZbZVWvbWPi2VYJROsChTBt3ZFPS0Z0E6kqAUHItlv8oylavmE4MkbFcky84EUYRgJ4-SFc1qXQWCsP5FXe_z-HiKvDbkYfb0g2Lyuhhr-1BNck2oeRgDkvYJHVmqeGOjhZ5KKvMS2U9fp0DpRSjn9hvG9VE3c0qqI4g&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "Le food court est immense, et y'a une super expo ce soir ! 🎨",
        verbatimDate: 'Il y a 3h',
        timestamp: Date.now() - 10800000
    },
    {
        id: '2',
        type: 'image',
        placeId: 'poi-003', // Le Mazette
        placeName: 'Le Mazette',
        user: { name: 'Thomas', avatar: '🎧' },
        mood: 'festif',
        likes: 567,
        isLikedByMe: false,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHrQ5rHION-5gL7xFGYqc3XYu6bm_nzabQnIEy-5WKjtjqEnvk1WC0v8zClGrG_CMT3yx-C4hB6qkWeLYS6TFa7VroMM9dTBL-yGQ5h3CMbBf_0DZ3kjvo-9443JEUr28tszmCyETC1_L1OU4MXrCwmjoKhNLB5yt_OZ_DMVU3pnd_VtFCz8LlT8vEgt4CSzPhiuesq_HM2es7VyNlcy25oyiHfXCf8Lo7VMI-QX_6qsC4A1nvSRy8yTxbYwxtACTS0KtspTpVIukgyNqkOnA7fe4HYuiUfmQ5CQvL2BbzvBiYP_MWxpOclgoMUHrrtV9q_skRKMA5we4dp1z2SMeK9_AuMaEOrHsRmD6muBEpoznAsDTlc91cbGQ4sHWhEmsmqH28HF1Zh0gwdOJVyemR_QbRM4ESm6lp7q6H_I0U-h7nQSmovVF4AzhK8uXbaYDCCm23-GeGZunemoZZf85ErRdIC3Suk_kIwj9IDAJwUusm1bWHnQXN2gHysBlN0jsk60cBtHWvDRyB2Bl-cdCaHUnUKxxr_-qILRvcwoNxsGtgq01OLDK37qgJ7dZVA3oKp0RILKgppvCA&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "Le son monte sur la péniche, grosse soirée en vue... 🔥",
        verbatimDate: 'Il y a 5h',
        timestamp: Date.now() - 18000000
    },
    {
        id: '3',
        type: 'image',
        placeId: 'poi-006', // Café de Flore
        placeName: 'Café de Flore',
        user: { name: 'Emma', avatar: '📚' },
        mood: 'chill',
        likes: 189,
        isLikedByMe: false,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHpxDUnV6-rr-aTUzUOCEiIzNKTJNfjTob2_4GpAgt5swspqct-AMzkf3fn4_C7UV-ZrgJPF4gWH679ufYOTZSRFuANgkscLcef1gidpieQayTeBTHLHGKIfpmXvvDU09fD75GNT6_bE7P4_N6Wt0MUamPWeTe-jhBO5cKA2ZdcI9Nan2jEuLTN5rZQvDCakKVR38Jw1vgKwUqYHsbuLCiW4AK7z24JUjDt2hAWFnINaH3CNfy6rqvUPE-Zc93IR2kI-RwhftSv68Q0m98ee8XSiuov5uPtCWj4-7Yy1yycZ77pZHD1xrpo56jqmfw-gvVwqumOaotVlLDrxO6FMtHlKP5ncDq61uFDwrt_lX_eCNgwaO6NSvJkAbWyzjDoG2iTM3fuvLhhV43dum0MaYlRcuQ0Lipw91EEG1HwEAeMgPmzF&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "Pause lecture au calme, le chocolat chaud est une tuerie.",
        verbatimDate: 'Hier',
        timestamp: Date.now() - 86400000
    },
    {
        id: '4',
        type: 'image',
        placeId: 'poi-004', // Le Perchoir Marais
        placeName: 'Le Perchoir',
        user: { name: 'Jules', avatar: '🍹' },
        mood: 'chill',
        likes: 445,
        isLikedByMe: false,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHr1Dz_VT61mcdvICM3g4POWv__nwv23PFurtVswHrVI5PKQfyq4eDrIQ90fa8cThgsJEEsmpMvtNpZxKKFSp8kFfyCvWhATM6Y-Sa6lNeqQzZzVPZ16ySLEOUfHSoJ2wDn9N00vgryfG4pqBzx6d2bdWl3lPo6zUqKsPt_Te6WlTUhLEuWQZtnB0bEmnnXfszA_PpKv5ZOsgOETMVLbgRBugYq4l9SfQUXxsrHHYoOgBxmj1677M22gq4oosQEPYagZZWl01v6EYjAcPlyaU_A_zVQZspoPZ7hLI07DN7kcySCxjPI&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "Sunset vibes avec les copains. La vue est imprenable !",
        verbatimDate: 'Hier',
        timestamp: Date.now() - 90000000
    }
];

export const FRIENDS_MOMENTS: Moment[] = [
    {
        id: 'f1',
        type: 'image',
        placeId: 'poi-006', // Café de Flore
        placeName: 'Café de Flore',
        user: { name: 'Marie', avatar: '☕' },
        mood: 'chill',
        likes: 45,
        isLikedByMe: true,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHpxDUnV6-rr-aTUzUOCEiIzNKTJNfjTob2_4GpAgt5swspqct-AMzkf3fn4_C7UV-ZrgJPF4gWH679ufYOTZSRFuANgkscLcef1gidpieQayTeBTHLHGKIfpmXvvDU09fD75GNT6_bE7P4_N6Wt0MUamPWeTe-jhBO5cKA2ZdcI9Nan2jEuLTN5rZQvDCakKVR38Jw1vgKwUqYHsbuLCiW4AK7z24JUjDt2hAWFnINaH3CNfy6rqvUPE-Zc93IR2kI-RwhftSv68Q0m98ee8XSiuov5uPtCWj4-7Yy1yycZ77pZHD1xrpo56jqmfw-gvVwqumOaotVlLDrxO6FMtHlKP5ncDq61uFDwrt_lX_eCNgwaO6NSvJkAbWyzjDoG2iTM3fuvLhhV43dum0MaYlRcuQ0Lipw91EEG1HwEAeMgPmzF&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "Petit café du matin avec @Pierre 💕",
        verbatimDate: 'Il y a 15 min',
        timestamp: Date.now() - 900000
    },
    {
        id: 'f2',
        type: 'image',
        placeId: 'poi-008', // Wanderlust
        placeName: 'Wanderlust',
        user: { name: 'Pierre', avatar: '🎵' },
        mood: 'festif',
        likes: 89,
        isLikedByMe: false,
        imageUri: 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=AZLasHowhlvZ5IXINN5GCXfkSuDdcVL4-BtghrV9sL2pOeRLCgIlZhxqHLBw2LiHEYiIr7HE8zL6UOCBd0mZhKpBJXYa1acafJZv8vCIfZGa0UI4C27OmzqupG5P41kPErxZo5gn9xWt1Lq2vMKHTv3Qvuvx8hAaTFvuZk37n_H_x9naE1idnR-NWsbpqWuiErWjJgjjiFlAd5k2aFv9jKsfpsM52MykQ67GGFHyMEhYQUznGBhKTkYzNNcfGTIAEWMgataCJmdEsXDeeSq5O_cKXzssw_K3Uv_ZdFMxTBMb0WeEagl2I_AFs17jV4aUIRuuGnZqJ_cp1QhwaC3mYsxeNFi15zoUEX6-hUyfcc4OgtXw-z0s6-jw7bQR5AlPlYIYHqUpxEG_IPHoqT4ya-2xKD0ahNMO2O9Qc2LtIoBwX2G1DOw&key=AIzaSyDpkuHPvH-X8hZrLrpZbyC2Hi39iAfrLKM',
        caption: "Nuit de folie sur les quais !! 🔥🎉",
        verbatimDate: 'Ce matin',
        timestamp: Date.now() - 12000000
    },
];
