import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const refs = [
  "Ab43m-uMQJXfMGwy0Z8SJxaH2XQrgBQ1B86UvRdyy2_bOBO7zBxQbscXrEOsv_iFlvbl1bh8VlutvjxrM3fMUwrnuKk4IOqsLIAIiMBv_8XF107GsDJs3JGfaNySv69_zxp0bEq6xa1729IXFk0zotXL9rgsQ-Ps-mX3MoHl_igP7b2SKIg_RDUSClITVmI3-CBRf36c_YPYBOkcMVnA_DfW3ZIEmFPyV2avbpxLPdUPij4X0tIm6Rm6lLEtwBCpoZl8tuwiAOjSBV5VviIYL6axC0N20O65jDdXf6Jth87-tszUpsvvNCfI6lOGwHb5krGzKQbT6MDcCNUhErclJMPCD_FxxirMbA9vW6H7-nQ0nGsFOiz5GrC3Go6mGYlCtT6zhgKERyb5mqTe2rK_jXWvsddDfKL1mCQXJQmaKSSzBIEIYLEQaG2vD7wqfxrZyA",
  "Ab43m-vR-FBxkVfHfBZQWLpBpHAS_e9zNJs7FPJt6TLXPCzhnWZxHoQRlKrJF5MrfAAKeAItE_U0jEWVTms-X9AcXp2r2myo8WJ1PVBRUB2u7p80k5ex6NoS8ZCJTxzizuKHqLLUwpTWVj3XC1j5sVnKIXK693Wv9m6Ri_7pLMRi9hlD2sjctViKFXsBMNKSdmeVeT1Xvfn9_qNa7iGwoaHUQunRyNWpfFnpNyPJk0DZH4t35A3ySKWwmRmHSoszIDHYryVMG96TH9KxqSboMkUmryEW3pIjw47vJORpK2PieGCdmox9o2LqC0L9-QH4VGsaDiR9ppIXbOR74btcUnI9asMLrZ20z3Wqu-HR3lDuNYDW_ch97XhU3rJIEE6K3RvXtGK_VQZnc-NsdxQsgDjSkuNVOqBwmXBCtDvtMeSskBEbd2Wxg_rPkfYCasubdQgl",
  "Ab43m-vJzi9n0pvShtYHTX1pj38scQgq_9x30jcnZj3MMNjnY_NVUwsBez84osHbmPcdNh1p0Q9ENt1UR308j2bTWHdpBdWgCJg1W7ryCoE_2UbwChcXSiFvRBjg9BqinjO67c6h5iQhgxfM5yJsB96R8suNShClWiV1Dm6uKtMgeorZaYBVn-USW_-IkVDltSeZqUYCS27hbbI-FugvhSqyYhBROiH6ZsCN9Im4lnMEPMwoUTdgSuzBFVWDK33pN_WXtOYKi3epjG9CnTYFpROQWsy1FIYv6E1WM27-xqyGl4rYNh71vACPSZ06dkeCCCm2NxpJpcRQhspaRTMHLF36vB6MKa651QVuE9ii3lsqMRRym7H7-LAfTY43SYUnbBa-r5fLjzDHIqqYHe_-IYi4yar8c-bTX9A3s_MuXPLRnkRf54N_kW6BKXbgiU5huLx1",
  "Ab43m-skhyuCo3_wYmbgYyNMPmY4P0KxHCgSbXm8MQI_Ax-gBzJpbaQkzT-CI4TnHH6y_AtA6cjnJb-yFUtrV2__svccyD5zbACXrNR5yZ_pMKsMmz-Mfx26p6CqseM6YswFlTlOJeoEM-4oJvSu0iJMu80AgnpmtKAg4t6kSFnhBpvqPwbJb5VvgElEi9FPlt-7tuRAQiDMQPStTouUGG5dR4cGBpR6IlWfWS29khfL9-ZTl0NRCi6sKwgADcxsZqyJvNcSfrfTVcbS5IBjsLNEyBjJObI-N_HWfJeS2TGMUOP0H4kZq0ecgp8DDENDyQxln5-Xrqmy0mz1xl-zIqD2h0UU4j8unf9tPXiaXX4elU43mpEcBmlOVSXSOhUJSBtImPHVbFCWuRAC1YY7CBp3jcNbT-EYXCjJf4Jber_WymJQDg",
  "Ab43m-uReANOtZx2zJaciAn7MxsUO2REc4beMlYv5pCFfIxz9gxqjNGt6Evsl3kNOvkhUyOD5SfVU3rNe2JbStXUgEfSnzqQXrtoXvzXpb4ST5KAsPj1nyLmy6SLRHPHF6N8jnlBmQDiAl7yuMXknqjRD37_gaCjo5J3QDMDA0ipiTwU6RUEzLctuTC3lrdzWbQrPEewGW_alUjAz7l2r2IlofY50-1nWkIfgQd-OZ9whMWubopP9kXTfxVKQ0eUP8NF6jS_gg60CfUxBi8gNAJcMJW0qEdWAhSLvNev_-tdnlM7G6PJAsOT-LVJbFbogIsF9TKgO9qFSVA-VW_rdNXTv4jr7bc3rM-3WF9GSWwGVoo3yeSFOYvgRCeYreq1_2monVo4rDJIy3unjIdu-yUzpF9udB0KQC-vQL5NK-fDNBDJ0g"
];

const payload = {
  description: "Ce bistrot de quartier, né dans l'entre-deux-guerres à deux pas de l'Académie de la Grande Chaumière, perpétue l'esprit artistique de Montparnasse. La salle dévoile un comptoir en zinc patiné, des banquettes en velours rouge et des tables en bois sombre. Sous la lueur tamisée des suspensions d'époque, les convives dînent au son des rires et du cliquetis des verres. La cuisine s'articule autour de produits de saison et de vins naturels soigneusement sélectionnés.",
  insider_tip: "• Le menu du déjeuner offre un excellent rapport qualité-prix sur les plats du marché.\n• Goûte en priorité aux ris de veau croustillants s'ils sont suggérés à l'ardoise du jour.\n• Pense à réserver ton comptoir à l'avance, la salle étant particulièrement intime et prisée.",
  dominant_mood: "chill",
  nearest_metro: "Vavin",
  metro_lines: ["4"],
  has_terrace: false,
  reservation_policy: "resa_conseillee",
  closes_late: false,
  subcategories: ["bistrot", "francaise"],
  hero_image: refs[0],
  google_photos: [refs[2], refs[1], refs[3], refs[4]],
  internal_audit_logs: [
    "[MOOD ENGINE v2] chill (conf: 100%) - Justification: Audit visuel Agent réalisé. | Google Terrace: false",
    "[AUDIT F.I.P.P OK] Ordre validé : 0, 2, 1, 3, 4 - Photo 0 (façade) choisie comme hero_image."
  ]
};

async function main() {
  const slug = 'wadja';
  console.log(`Updating ${slug} in database...`);
  
  const { data, error } = await supabase
    .from('places')
    .update(payload)
    .eq('slug', slug)
    .select();

  if (error) {
    console.error('❌ Error updating Wadja:', error);
  } else {
    console.log('✅ Successfully updated Wadja! Output:');
    console.log(JSON.stringify(data?.[0], null, 2));
  }
}

main().catch(console.error);
