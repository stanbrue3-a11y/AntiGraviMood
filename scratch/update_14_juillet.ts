import { execFileSync } from 'child_process';

const payload = {
  description:
    "Derrière sa façade de quartier, le 14 Juillet offre un saut dans le passé. La salle s'articule autour de murs rouges chaleureux, de chaises de bistrot en bois et d'une cuisine à moitié ouverte d'où s'échappent les parfums des mijotés. Ici, on ne fait pas dans la demi-mesure : la cuisine française est servie dans sa plus pure tradition, généreuse et réconfortante. C'est l'adresse idéale pour un repas dominical ou une envie de terroir sans compromis.",
  insider_tip:
    "• L'épaule d'agneau confite est la star incontestée des plats de résistance.\n• Ne partez sous aucun prétexte sans avoir commandé les profiteroles maison, elles sont monumentales.\n• L'accueil y est particulièrement soigné, donnant l'impression d'être un habitué dès la première visite.",
  dominant_mood: 'culturel',
  hero_image:
    'Ab43m-tTC19yJ9rtU8LLAmUjHzgft06IAeFADPGI4VRcSR0Ir1FTQwL3mPB94wb5r84PjVbGMMxS1kHv_EqgmX9fefjRjoYfx70L_3xnfBA9OPiBrkJ3vp4h-LG9DrbdRenSCglo6A-W_bzeKp-lxQMil6Hw_RDpjwRhSHFi-zeaCvS2EOJ1wvHDy0bvjVCM5l0gZRt5nwG71f5OsBV_AOhPfirH4gEDJcf0nmAeNWq1Hx1_O4JNw7uM0o0VhUnZKeF98lpw1NmF9aol6UcrYXlBgWSsyBJwLmIJWC2d0kQRHPElxwNtkkMsrT7ftULEItf4AUnhw10qJ3woOcDGIYT9FNl20HAdMwI3PmmDeJ1aAGx4yCK4BI0U6psiAtPLb5IxSSzXPEKUJnoF5lzqgwzF8zqHpnqs19LZpdomDM_YSHgRBXc',
  google_photos: [
    'Ab43m-tTC19yJ9rtU8LLAmUjHzgft06IAeFADPGI4VRcSR0Ir1FTQwL3mPB94wb5r84PjVbGMMxS1kHv_EqgmX9fefjRjoYfx70L_3xnfBA9OPiBrkJ3vp4h-LG9DrbdRenSCglo6A-W_bzeKp-lxQMil6Hw_RDpjwRhSHFi-zeaCvS2EOJ1wvHDy0bvjVCM5l0gZRt5nwG71f5OsBV_AOhPfirH4gEDJcf0nmAeNWq1Hx1_O4JNw7uM0o0VhUnZKeF98lpw1NmF9aol6UcrYXlBgWSsyBJwLmIJWC2d0kQRHPElxwNtkkMsrT7ftULEItf4AUnhw10qJ3woOcDGIYT9FNl20HAdMwI3PmmDeJ1aAGx4yCK4BI0U6psiAtPLb5IxSSzXPEKUJnoF5lzqgwzF8zqHpnqs19LZpdomDM_YSHgRBXc',
    'Ab43m-tveOeiz71ONOTJZOQksWKqAev0QNMmNmHxVF_3prlJk-Cq5ME16IY0OQSwiYXXwpQZxxoAlzDvlH8LWqkmQuYMFRqmDmOXJi0Glwbl0j3kLh2UywZz8EO3T5OJVRS1MxFD0lt_lKsspY89JZOxWLtbyxG87bjqrUMcL_1_1E4ANdFCeoodnTroG7CJfER84fMk9yLc4TcQIuXx0YFZYQMQ1dAhoJlxayRRBn2xQpabG8d2RAcYI93pKjOeqiUAm6RYYyJkkE-oLLADicBxMhwdJBPlgWAeX2JTkYxPqv0lBZE1rE7o3VIg--xDAOp4XtAiuxVEselEy5wrkkv_WFDmDzqYGjQzb4CXuxWZUnQslbMmqcMq6vf98umen_f0XKk0bd565pwpoSoOwmb2N-hBVGaOkgA5apf1wR8mXYGZRGKV',
    'Ab43m-u4tczESdqLDo1jMbhI43z5vBhX1_6egDD_yRBLQQ-u5smweNXwtACUFD83ZwE55yXfa4FOQPij2HoAm4vTgRFD0O6cUfc48Q4uklGzMzcs6j_VvigAT-fc1-j5aG0JPckpm8TaK0s83jE3jQfHYSBfxg02nOGiNfOPpq-aOW5FHfHgyRPk59LY7odm60uXnknvZavUBXLIW6vJVbaAEWOQt6M26eSyD-Z5RFLhciAMypgE9crdWbwoNZdpZB9j2ruTzNQXnpDimNjr12je9FnIIvfYgu9Hkx1Yc9WvK6MoH87kykkWExX8M6kNsHZEtNq4ZvZ5SevdsrOg03z2s-s9QdJVFbA9CvgpwZi3gJYiiqNHj2VVQDpRcgcx0F-DG7QHT2wAscOuUB3QPaFtuH8MHcsvw2o9jxbaj-7Qx8ER0h2mkqz7XP8jjXkmSA',
    'Ab43m-sAiCUA2Gr506SnozS3T5KQpiQh7BLj8NH9wSS0od9BW4vZ47Q6u3toBYbykxtCasjDtzn1t1EPwWzu6fj9eE5f8_lsk4CnwjMPa8ORqRDpxZy3JqwuOdlCww42as4tCEO6EvD12cypCGDytqAlHeEwjAtFch4NiWz41n54isinpidaico3f9RFjdhn3VU28l5cszOX_nnrEMHAeTO9kCqiNkFYF3NFQ_K7OkDLnuts4v2MMClu6qqX7jzIlJxlvfwJ1rQyKMLc9Q6LdUR5DLErBq-cRrOPtOZQS2TJVDGWBGLDD5ZcxCMZc-beip0kyuDflUAun-6SE3oYjm3PcIGz0x_LkVHLu3m_SeUSk6jHdhmFtcF2okryLR9JjlcWQPPmvC2cqVE_Z9MQ3wJQXrbIMIg-u2zpcEbnM0Z7nCapidiB',
  ],
  tags: ['pastille_rouge'],
  internal_audit_logs: [
    '[AUDIT F.I.P.P OK] Hero Immersion (Photo 0). Plats tradition (Profiterole Photo 1). Dogme Brasserie Trad validé. Status: TITAN.',
  ],
};

const output = execFileSync(
  'npx',
  ['tsx', 'scripts/agent_bridge.ts', '--update', 'restaurant-14-juillet', JSON.stringify(payload)],
  { encoding: 'utf-8' },
);
console.log(output);
