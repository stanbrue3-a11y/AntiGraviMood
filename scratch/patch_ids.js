const fs = require('fs');
const path = require('path');
const data = [
  ['comptoir-pantheon', 'ChIJZbQv_-dx5kcRARl8yz3wTu0', 48.846503, 2.3439092],
  ['relais-entrecote-montparnasse', 'ChIJcR182M5x5kcRJ1Q8BTFdZTQ', 48.842507, 2.3287163],
  ['cafe-de-flore', 'ChIJq537gddx5kcR_3PhRd2muxg', 48.8541588, 2.3326046],
  ['le-galopin', 'ChIJyW6wknNv5kcRTdWzsViISUg', 48.8688297, 2.342121],
  ['tanguy', 'ChIJETeoPUNv5kcRGEyZMQzdh8k', 48.8712094, 2.3517959],
  ['le-sot-ly-laisse', 'ChIJabr3EXZy5kcRgvh7GpQ-LJo', 48.8541354, 2.3954581],
  ['east-mamma', 'ChIJq2DVqQhy5kcRa72Hhklq2bY', 48.8510045, 2.3777563],
  ['dersou', 'ChIJ7UU1igZy5kcR8-BrVw9FzmQ', 48.8513995, 2.374616],
  ['petit-nuage', 'ChIJYTlnkv1t5kcRCRMYO7I03wE', 48.8564932, 2.3779551],
  ['septime-la-cave', 'ChIJeVOXTwhy5kcRAqtr02NpcpA', 48.8537066, 2.3801034],
  ['21g-dumpling', 'ChIJuar21Ahy5kcRiV8h1eTWGuo', 48.8506041, 2.3802291],
  ['bambino', 'ChIJB0eTdh9t5kcRU5WG-sCo3bs', 48.8613548, 2.3698027],
  ['cafe-mericourt', 'ChIJVVVFnvtt5kcRr7tzTFs_Ewk', 48.8625661, 2.3736329],
  ['deux', 'ChIJSQwPxwdt5kcRbleMxeNvh1Y', 48.8681523, 2.3739343],
  ['ama', 'ChIJF-etFpht5kcR4VXGgtnctj4', 48.8695859, 2.3693877],
  ['poggi-cup', 'ChIJtxg0RUVx5kcRjw2dOXF8BvA', 48.8269007, 2.3634105],
  ['breizh-cafe-paul-bert', 'ChIJ3zB5jDBz5kcRKreqD3GvokU', 48.8524808, 2.3847579],
  ['bistrot-paul-bert', 'ChIJnYPdmaZz5kcR80ulUF3wtjQ', 48.8522261, 2.3848892],
  ['tontine', 'ChIJnQLB_9lz5kcRzzdxnCbnN2A', 48.8513338, 2.3846187],
  ['eunoe', 'ChIJOUI0wipt5kcR8PGfUPvkm4g', 48.8608213, 2.3789502],
  ['l-ami-pierre', 'ChIJmca-owhy5kcRoxB3bdsw40s', 48.8514931, 2.3782317],
  ['lissit', 'ChIJR_eEDABt5kcRRXQdrbSdxus', 48.8638511, 2.3721913],
  ['pause-cafe', 'ChIJIS58yQdy5kcR9WoNwHe_0Rs', 48.8533826, 2.376749],
  ['recoin', 'ChIJnzTJyMht5kcRAYhOcNIhSLw', 48.8591331, 2.3688686],
  ['sama-bistro', 'ChIJT44azFdt5kcRW9SkR88ibk0', 48.8633665, 2.379805],
  ['street-bangkok-bastille', 'ChIJAQDQwQBy5kcRsLQSx7nn9BM', 48.8542422, 2.3711286],
  ['superfine', 'ChIJEZpY9W1z5kcRl5ssMNtEqVw', 48.8527274, 2.3764205],
  ['l-alicheur', 'ChIJHwt7tfpt5kcRd26Fi3r0xuA', 48.8654871, 2.3775566],
  ['tram-130', 'ChIJIyCodwBt5kcRb1tE1izyXos', 48.8680202, 2.3754187],
  ['gourou', 'ChIJG9pBcgBt5kcRCbSWozjFG_c', 48.8556329, 2.3867419],
  ['anco', 'ChIJPRfxu-Bz5kcRlVGPQaPyUVM', 48.8393081, 2.380587],
  ['le-val-royal', 'ChIJg7TTM8Bx5kcR2Jo3OLzjLeM', 48.8380585, 2.3422059],
  ['mr-chow-paris-14', 'ChIJ-TuAl2Bx5kcR2J-p0Yw_zYk', 48.8418261, 2.3281676],
  ['le-pavillon-montsouris', 'ChIJTyilE6Jx5kcRLuoJ5rU4cW8', 48.8222425, 2.3405775],
  ['brasserie-auteuil', 'ChIJEcNXrLB65kcR6leyh3yLQpk', 48.848332, 2.259869],
  ['pont-cardinet', 'ChIJPwNk869v5kcRXsyJDxI0cvQ', 48.8875959, 2.3141694],
  ['la-mascotte-montmartre', 'ChIJVVXp9k9u5kcRRBfM2_21H3s', 48.8857022, 2.335517],
  ['la-traversee', 'ChIJsa-Q8Wdu5kcR7RS25Rfpe94', 48.8872395, 2.3475797],
  ['le-vieux-chalet', 'ChIJGz8iSVtu5kcRpfomTl1YfWA', 48.8869736, 2.3402793],
  ['sacree-fleur', 'ChIJf-oe7Wdu5kcRRto099RQ9Fc', 48.8876187, 2.3479882],
  ['la-marmite', 'ChIJOx7tF0Ru5kcRFYvebSNg7uk', 48.8823082, 2.3394991],
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) results = results.concat(walk(file));
    else if (file.endsWith('.ts')) results.push(file);
  });
  return results;
}

const files = walk('src/data/registry/tree');

data.forEach(([slug, gid, lat, lng]) => {
  const file = files.find((f) => f.includes(slug + '.ts'));
  if (file) {
    let content = fs.readFileSync(file, 'utf-8');
    content = content.replace(/google_id:\s*[`'"][^`'"]+[`'"]/, 'google_id: "' + gid + '"');
    content = content.replace(/lat:\s*[0-9.]+/, 'lat: ' + lat);
    content = content.replace(/lng:\s*[0-9.]+/, 'lng: ' + lng);
    fs.writeFileSync(file, content);
    console.log('Updated: ' + slug);
  } else {
    console.log('File NOT FOUND: ' + slug);
  }
});
