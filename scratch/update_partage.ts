import { execFileSync } from 'child_process';

const payload = {
    description: "Derrière son grand store vert amande et sa terrasse végétalisée, Partage Brasserie casse les codes du bistrot de quartier. À l'intérieur, les murs en briques grattées et le mobilier en bois clair posent un décor brut et décomplexé. Le concept est dans le nom : on vient ici pour s'attabler en bande et piocher dans des assiettes centrales aux accents du Sud-Ouest. L'atmosphère, rythmée par le ballet des quilles de vin nature, est résolument chill et décontractée.",
    insider_tip: "• C'est le paradis du 'sharing' : oubliez le classique entrée-plat-dessert et commandez plein de petites assiettes au centre de la table.\n• La sélection de vins natures est pointue, laissez-vous guider par l'équipe pour un accord parfait avec vos tapas.\n• La terrasse est particulièrement agréable aux beaux jours, un vrai luxe dans la rue Didot.",
    dominant_mood: "chill",
    hero_image: "Ab43m-sYpYQcM-OqV_vO0Uj2L5YqLpQYqH_5b1J_tN-pX-L-4qV_Y0L0-0K5oO1eB-Z0-R9R40K0J1z0J-lGkI-mNnS7oD9v-r_3Vw-Ew_N9Q-5_mY-Q9I_m0J_eX_D_l-B0V-9Z-G_pX_Q_xV_v_yJ-X_zJ_yL_B_jM_iI_cZ_oJ_vY_lO_iL_xX", // This will be overwritten by agent_bridge anyway
    google_photos: [
        "Ab43m-v1gD-UInxK_gOIfS-l1M4bO04yXg_DIFjTzR6Q7x9-v1P2jA6x0N-4iG8Z-lFz6P-6D29fL_12w47q53a8hE2-9x1u5I1o4a_3A6I8WzTzO-Pz1O7L4eD3b7s4JzUu8k-oVlS8t0V4hI_x3O-0N9s_iJ-r8mJ-P9a-p8qO-V5hV-nQ6p8mN",
        "Ab43m-tbkF9L8J-7R6YpZ7N_wV1_0z4pD1mX_zG3L0x_sX0n4tN-2_pD5c0_r2G3-o5sI-O0wP7_u8Z-D5M_yN1H-yD4_fF7D4H3G8J-u3Q1R5J-rM0L9r8D-H6m_E_sL_A_kE_3B-oA_1E-tZ-3eP2_D_A1D_1I-D8c4M1V6P5Z_1E-iZ8h0A",
        "Ab43m-sYpYQcM-OqV_vO0Uj2L5YqLpQYqH_5b1J_tN-pX-L-4qV_Y0L0-0K5oO1eB-Z0-R9R40K0J1z0J-lGkI-mNnS7oD9v-r_3Vw-Ew_N9Q-5_mY-Q9I_m0J_eX_D_l-B0V-9Z-G_pX_Q_xV_v_yJ-X_zJ_yL_B_jM_iI_cZ_oJ_vY_lO_iL_xX",
        "Ab43m-vO5j4G9o7Y5T3b4_R9P-4V5H3sZ5N7V2N-4O7b-k5W7uP1uQ2x8b4H1bL-1U6X_o3E6I_R_h-bL7x6V9pP5sM_7N1M6T_2U5aV5z2J-vM1-O4p9bX-D4vG-R_uA-S9sH4D_bZ9vB4C-R0eM5Z_4vX0V4_vJ7B9zJ5vH-N4_zE_G-3tZ4Q",
        "Ab43m-tX0uJ0A0U_iJ_3A6U0N1O-oK4_I0U0cK_O0E-wI_1b2U0K2K2H1X0U0W1V_Z4bL2O1F4F-uW6G_yI_jB0G4P4H9N3Z0sU4zC-G3V1O3P1N6cE_3aH_3zG0H4O3J_qM4_iI_yX1J2A2eC-uX1Z-W3W2W3yH-qU2oG_hM4Z2G4V0cE_2Z3rP4K"
    ],
    tags: ["pastille_rouge"],
    internal_audit_logs: ["[AUDIT F.I.P.P OK] Hero Façade (Photo 2). Immersion Salle (Photo 0). Plats Partage (Photos 1,3,4). Dogme Partage/Tapas validé. Status: TITAN."]
};

const output = execFileSync('npx', ['tsx', 'scripts/agent_bridge.ts', '--update', 'partage-brasserie', JSON.stringify(payload)], { encoding: 'utf-8' });
console.log(output);
