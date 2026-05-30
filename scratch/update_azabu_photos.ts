import { createClient } from '@supabase/supabase-js';
import path from 'path';

require('dotenv').config({ path: path.join(__dirname, '../.env') });

const supabase = createClient(
  process.env.EXPO_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
);

const PHOTO_0 = "Ab43m-tNKrObxZc9C10DkIpgk2pCM-TT5EHZdp3vsaY47owpXAxTwB3bLa7uhHcvZC4tin0RjLwfCW9AZ5cKvBeduGz9c2L9GYEYiWs3a0g5ALSY_6wS9chicmaDwcQXjFTH06mWvTGoZlh5u2UeuVJ7RS1S5MYlEW5dqSCydowe0A83C1P4_eFpwoukyzRJ8FKBqIDDYQyXiempoy0E7yX7JV4PeYVLE5zec_-zVHZ9rOLlgR4Y8EMHHEXle-yKHKrmwJu_bsCdO-FwY458Q5A6MmmitD5sKw8sPKg1BOcxPCSrYMewm71zlDPr7OdXhe2O7k5MQ5mEqYwmDwEDiaZu7NCyfXj09ji1RypuKbBvGdHTRbxMchbMrnJzH6D3jymn6mXjWsDaKSjpVQZgBUsCMPiXXQM7aaWyrCmnR4xCEmhuT4USicwuLnWKeDIPjA";
const PHOTO_1 = "Ab43m-vUsVpy84viheSeoSS47xkoaR5EvVA4hSPq9Yu4OHsXWbJPLFt8DzW50915rAYo0SodL4D6RIcUhUbKKzscgk1_8pqNjTHkDvj670kVE4zFgYclfF1NfNcd6DgMRuQirtSP1GSJ_UWkYBskAsftRLUb6DCvxmHuSrAJlCDbL3FsDnMdQawylOV03jqP9p-3mntr3_vVTH9nXnHw5Pf44yK28nKOcTS5smykZFlePjegGAmPcuAVdupnEvRqkWeYAv30eTmDnaL3F60f_YKI5ad-7JqX4Ucbx_THUXW52l-vIQ0Msm6Q9i8qZ5gviVBksFx3M6Lw970kJMWP11Dtel0YAVuUZgOKPY8Jxw1gL_8SidU4enqpq0nR35MNbijpcWyxy9HdFakRWkfuDf2iCPnoM-1vZr6GDIKyThmKtZPTU00";
const PHOTO_2 = "Ab43m-tjV9j0WbyJzRsSzLOrEWqxmv8-hrhaqBKeeiliO6ZRU61E38remOkLJOiiCYj1qjpIj21Zr1hDMhsqOkaQnj8kYkKdhF5Kr-pIZfx5mPeRH00snbDjwvPi5PwLgh_iMHE1N_r0-T_6LALX_jO1XzbwEzSpdHgb9nRETGWWfw8AMBUYCvueuZntPkr-3-wROnPHM_hoKoJWSB537KnvXj18UKvKbUzYzjuPEBCF9AYGUvKz96RY7kgZnuj7tqlUNi2oNzuQtH-t5zxPG86pNVM4idFBGFAnR9yyQhS1yYH50GJkY3BczcAM3wbwrUNXBkMcoXffS6fxJll2gmJvAEYGvtIgKiPy07q7q1mZH0naiuVReRcr9qxpt1yLFTwviBdQwSatggh6iT1aV3jvQ2svVfw1L0I4UuDflUl-3RrrEg";
const PHOTO_3 = "Ab43m-shqzhyBpNxIFioGMMwFtEwnA9v6zU5Xx6ikYChrItgNJzkTqLzA__yn-1jZ6LNitXZfwBPZdxZHKAfEeYtSuU1KvU3TWo1W3kHXERF0pKfSJwlx7c9yorOkjT3CxugSuex_cjrE1aqqfzA27KULQYb7CFt17mjrI6dP5DwrPo4COa9RJfpIb8DKIyhF82SzcGEtbXCCSgGEJsmXpaqNHDxgBKiKuOKAaG9Hz9uNMTQCMN_8Rfr3PEPAbCkyHRwOMoo0VjDiTJChyUNALKJ_u0PsYETQolHk3uimPLCUQqSD8lWslePdyQSogMFnt9qx-j8_L8VOXHcahCUkONpK8gDZ4OtQ_5pTX8XBZGQoX_OVbJy0fXtvkNfONjPE2R_lTtgjZBSG5Hd60liEy5ljFA4yOojhc0pE2i-bZp9YNX3brqEMD46U0k1_DvdRdDs";
const PHOTO_4 = "Ab43m-s2sTq991ATkw9esqjqk5m2hKdf8Rc9I9do8LeWISNFDJWIzSK9VJVCQjh3Crnqw0OFy3ZUv_isQPsxVclzj8SwnU-ew4cF28xv8s5JzvV2AJ9X6FPJKtXRIIyrI4GZGtfGMcjBnn_3czt9MyLNHGFDPbqEjXxmLC1VdFnLWISVwDlzdOWMMmHP5ouE1mye5RdHfEbDhL16KY8tkVJI381SQqROjJzxV4XZy7ANFtkWFZBlYWG77vTwahP-3RlKa94iBSa5uOuxUyt9oLkZxTuH7CGvRCWTMewL_65y0LCfbk76fpQtK9OTa6Ik9CwJwFd306fNJZJAlxZL0SxH7z7973WCISc3EDMux0oRzk5XBUhvX43UFxSkvX9TJX_z_0CuLrMegNWyk6kK15fAjs-9-qjKAiACf_b0J4mATy4Md23geG69b9E6UsFB1w";

async function main() {
  const slug = 'azabu';
  console.log(`Updating ${slug} photo order...`);

  // We set PHOTO_2 (facade) as hero_image, and the rest in google_photos
  const hero_image = PHOTO_2;
  const google_photos = [PHOTO_0, PHOTO_1, PHOTO_3, PHOTO_4];

  const { data: current } = await supabase
    .from('places')
    .select('internal_audit_logs')
    .eq('slug', slug)
    .single();

  const logs = current?.internal_audit_logs || [];
  const fippLog = "[AUDIT F.I.P.P OK] Ordre validé : 2, 0, 1, 3, 4 - Photo 2 (façade/terrasse) choisie comme hero_image.";
  
  if (!logs.some((l: string) => l.includes('[AUDIT F.I.P.P OK]'))) {
    logs.push(fippLog);
  }

  const { data, error } = await supabase
    .from('places')
    .update({
      hero_image,
      google_photos,
      internal_audit_logs: logs
    })
    .eq('slug', slug)
    .select();

  if (error) {
    console.error('❌ Error updating Azabu photos:', error);
  } else {
    console.log('✅ Successfully updated Azabu photos! Output:');
    console.log(JSON.stringify(data?.[0], null, 2));
  }
}

main().catch(console.error);
