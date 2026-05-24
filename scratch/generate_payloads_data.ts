import fs from 'fs';
import path from 'path';

const payloads: Record<string, any> = {
  'la-chope-daguerre': {
    on_mange_quoi_ici: "Cuisine de brasserie. Croque-madame & Avocado toast.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-chope-daguerre/Capture_d_e_cran_2026-05-23_a__20.55.13.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-chope-daguerre/Capture_d_e_cran_2026-05-23_a__20.55.16.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-chope-daguerre/Capture_d_e_cran_2026-05-23_a__20.55.22.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-chope-daguerre/Capture_d_e_cran_2026-05-23_a__20.55.23.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-chope-daguerre/Capture_d_e_cran_2026-05-23_a__20.55.30.png"
    ],
    pint_price: 8.50,
    cocktail_price: null,
    coffee_price: 2.80,
    wine_glass: 5.00,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées & Petit Déjeuner",
        items: [
          { name: "Croissant", price_cents: 200, is_highlight: false },
          { name: "Pain au chocolat", price_cents: 200, is_highlight: false },
          { name: "Tartine beurre/confiture", price_cents: 200, is_highlight: false },
          { name: "Omelette nature", price_cents: 900, is_highlight: false },
          { name: "Omelette fromage", price_cents: 1000, is_highlight: false },
          { name: "Omelette jambon fromage", price_cents: 1100, is_highlight: false },
          { name: "3 œufs au plat", price_cents: 900, is_highlight: false },
          { name: "Œufs brouillés", price_cents: 900, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Croque-monsieur jambon emmental", price_cents: 1100, is_highlight: false },
          { name: "Croque-madame avec œuf au plat", price_cents: 1200, is_highlight: true },
          { name: "Croissant salé cheddar, œuf poché, bacon", price_cents: 900, is_highlight: false },
          { name: "Bruschetta tomates cerises, stracciatella, mortadelle, crème de truffe noire", price_cents: 1300, is_highlight: true },
          { name: "Avocado toast fromage frais, avocat slicé, œuf poché", price_cents: 1300, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Crêpes nutella ou sucre", price_cents: 600, is_highlight: false },
          { name: "Salade de fruits frais", price_cents: 750, is_highlight: false },
          { name: "Brioche perdue, glace vanille, caramel beurre salé", price_cents: 950, is_highlight: true }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Chaudes & Softs",
        items: [
          { name: "Expresso / Décaféiné", price_cents: 280, is_highlight: false },
          { name: "Café allongé / Noisette", price_cents: 280, is_highlight: false },
          { name: "Café crème", price_cents: 550, is_highlight: false },
          { name: "Cappuccino / Mocaccino", price_cents: 600, is_highlight: false },
          { name: "Chocolat chaud", price_cents: 550, is_highlight: false },
          { name: "Thé (Vert, Menthe, Ceylan, Earl Grey, Fruits rouges)", price_cents: 550, is_highlight: false },
          { name: "Tisane (Verveine, Tilleul, Camomille)", price_cents: 550, is_highlight: false },
          { name: "Citronnade maison feuilles de menthe", price_cents: 650, is_highlight: false },
          { name: "Fruits pressés (Orange ou Citron)", price_cents: 650, is_highlight: false },
          { name: "Coca-cola / Zéro / Cherry 33cl", price_cents: 500, is_highlight: false },
          { name: "Orangina / Sprite / Fuze Tea", price_cents: 500, is_highlight: false },
          { name: "Perrier 33cl", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons Alcolisées",
        items: [
          { name: "Bière de la Chope pression 25cl", price_cents: 500, is_highlight: false },
          { name: "Bière de la Chope pression 50cl (Pinte)", price_cents: 850, happy_hour_price_cents: 500, is_highlight: true },
          { name: "1664 Blanche pression 50cl", price_cents: 920, is_highlight: false },
          { name: "Grimbergen Blonde pression 50cl", price_cents: 950, is_highlight: false },
          { name: "Demory IPA pression 50cl", price_cents: 950, is_highlight: false },
          { name: "Verre de Côtes du Rhône rouge 15cl", price_cents: 500, is_highlight: false },
          { name: "Verre de Saumur Champigny rouge 15cl", price_cents: 600, is_highlight: false },
          { name: "Verre de Chardonnay blanc 15cl", price_cents: 600, is_highlight: false },
          { name: "Verre de Sancerre blanc 15cl", price_cents: 850, is_highlight: false },
          { name: "Verre de Studio Miraval rosé 15cl", price_cents: 700, is_highlight: false },
          { name: "Coupe de Champagne Brut", price_cents: 1100, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Formule Classique (Boisson chaude + orange pressée + viennoiserie ou tartine)", price_cents: 900, is_highlight: false },
          { name: "Formule Complète (Boisson chaude + orange pressée + viennoiserie ou tartine + oeufs brouillés + salade de fruits)", price_cents: 1500, is_highlight: false },
          { name: "Formule Midi (Entrée + Plat ou Plat + Dessert)", price_cents: 2100, is_highlight: false }
        ]
      }
    ]
  },
  'la-cantine-du-troquet-pernety-paris-14': {
    on_mange_quoi_ici: "Cuisine du Sud-Ouest. Oreille de cochon croustillante & Couteaux à la plancha.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cantine-du-troquet-pernety-paris-14/Capture_d_e_cran_2026-05-23_a__20.53.16.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cantine-du-troquet-pernety-paris-14/Capture_d_e_cran_2026-05-23_a__20.53.19.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cantine-du-troquet-pernety-paris-14/Capture_d_e_cran_2026-05-23_a__20.53.22.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cantine-du-troquet-pernety-paris-14/Capture_d_e_cran_2026-05-23_a__20.53.33.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Les Incontournables & Entrées",
        items: [
          { name: "Les oeufs mayonnaise de la cantine", price_cents: 800, is_highlight: false },
          { name: "Terrine de pâté de campagne de E. Ospital", price_cents: 1100, is_highlight: false },
          { name: "Couteaux à la plancha, sauce vierge", price_cents: 1300, is_highlight: true },
          { name: "Oreilles de cochon grillées, mesclun", price_cents: 1100, is_highlight: true },
          { name: "Carpaccio de bar, agrumes et fruits frais", price_cents: 1600, is_highlight: false },
          { name: "Caille de cive, haricots verts, lardon, crouton", price_cents: 1400, is_highlight: false },
          { name: "Carpaccio de tomates, burrata, sumac", price_cents: 1200, is_highlight: false },
          { name: "Gaspacho de tomates, concombre", price_cents: 1200, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Tentacule de poulpe, radis de couleur, cabettes, sauce bagna cauda", price_cents: 2600, is_highlight: true },
          { name: "Sardines, poureaux confits, tétragone, sauce rouille", price_cents: 2300, is_highlight: false },
          { name: "Quasi de veau, aubergines fumées, haricots beurre", price_cents: 2500, is_highlight: false },
          { name: "Pavé de lieu jaune, déclinaison de chou-fleur, noisettes torréfiées", price_cents: 2400, is_highlight: false },
          { name: "Onglet de bœuf, sauce au vin rouge, frites maison", price_cents: 2500, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Fromages",
        items: [
          { name: "Ossau-Iraty et confiture de cerise noire", price_cents: 1200, is_highlight: false },
          { name: "Assortiment de chèvres du père Fabre", price_cents: 1100, is_highlight: false },
          { name: "Mousse au chocolat de mon enfance", price_cents: 1100, is_highlight: false },
          { name: "Riz au lait et caramel beurre salé", price_cents: 1000, is_highlight: true },
          { name: "Salade de fruits frais de saison", price_cents: 1100, is_highlight: false },
          { name: "Tarte aux abricots, crème d'amandes, romarin", price_cents: 1100, is_highlight: false },
          { name: "Clafoutis aux cerises", price_cents: 1100, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Le Menu Dégustation du Chef (pour l'ensemble de la table)", price_cents: 4500, is_highlight: true }
        ]
      }
    ]
  },
  'la-contre-allee': {
    on_mange_quoi_ici: "Cuisine bistronomique. Pluma de pata negra laquée & Ceviche de daurade.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-contre-allee/Capture_d_e_cran_2026-05-23_a__20.56.05.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-contre-allee/Capture_d_e_cran_2026-05-23_a__20.56.08.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-contre-allee/Capture_d_e_cran_2026-05-23_a__20.56.11.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-contre-allee/Capture_d_e_cran_2026-05-23_a__20.56.15.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-contre-allee/Capture_d_e_cran_2026-05-23_a__20.56.21.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: 6.00,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Ceviche de daurade mariné au citron vert", price_cents: 1400, is_highlight: true },
          { name: "Burratina crémeuse, tomates anciennes, pesto", price_cents: 1500, is_highlight: false },
          { name: "Crème de betterave, cabillaud mariné à l'aneth", price_cents: 1800, is_highlight: false },
          { name: "Salade de chou chinois au sot-l'y-laisse de dinde", price_cents: 1500, is_highlight: false },
          { name: "Planche de jambon ibérique Mangalica", price_cents: 2400, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Filet de cabillaud, petits légumes, fumet de poisson", price_cents: 2800, is_highlight: false },
          { name: "Tartare de veau façon tigre qui pleure", price_cents: 2800, is_highlight: false },
          { name: "Chipirons en persillade, houmous lentilles vertes", price_cents: 3300, is_highlight: true },
          { name: "Filet de bœuf, pommes grenailles, jus de viande", price_cents: 3400, is_highlight: false },
          { name: "Pluma de pata negra laquée, caponata", price_cents: 3400, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts & Fromages",
        items: [
          { name: "Profiterole au chocolat, crème glacée de Paris", price_cents: 1200, is_highlight: true },
          { name: "Crème coco, fruits rouges frais, craquelin", price_cents: 1200, is_highlight: false },
          { name: "Assiette de fromages de chez Vacroux", price_cents: 1300, is_highlight: false },
          { name: "Cheese-cake au citron, coulis de mangue", price_cents: 1200, is_highlight: false },
          { name: "Assiette de mignardises maison", price_cents: 1000, is_highlight: false },
          { name: "Baba au rhum, chantilly maison", price_cents: 1300, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Vins au Verre",
        items: [
          { name: "Verre de Côtes de Blaye blanc", price_cents: 600, is_highlight: false },
          { name: "Verre de Viognier Le Versant blanc", price_cents: 650, is_highlight: false },
          { name: "Verre de Beaujolais blanc", price_cents: 700, is_highlight: false },
          { name: "Verre de Menetou-Salon blanc", price_cents: 800, is_highlight: false }
        ]
      }
    ]
  },
  'l-opportun-paris-14': {
    on_mange_quoi_ici: "Cuisine lyonnaise. Tablier de sapeur & Quenelle de brochet sauce Nantua.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/l-opportun-paris-14/feafaefezfzafee.pdf",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/l-opportun-paris-14/Capture_d_e_cran_2026-05-23_a__20.44.46.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/l-opportun-paris-14/Capture_d_e_cran_2026-05-23_a__20.44.51.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: 7.00,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Lyonnaises & Terroir",
        items: [
          { name: "Oeufs mayonnaise maison Fallot, finalistes 2022", price_cents: 900, is_highlight: false },
          { name: "Oeuf meurette au vin rouge et lard fermier", price_cents: 1200, is_highlight: false },
          { name: "Terrine de famille recette inchangée depuis 1985", price_cents: 1400, is_highlight: false },
          { name: "Ravioles à la fourme persillée du Beaujolais", price_cents: 1400, is_highlight: false },
          { name: "Harengs marinés comme au bistrot, pommes vapeurs", price_cents: 1500, is_highlight: false },
          { name: "Escargots de Bourgogne au beurre persillé maison x6", price_cents: 1400, is_highlight: false },
          { name: "Escargots de Bourgogne au beurre persillé maison x12", price_cents: 2800, is_highlight: false },
          { name: "Foie gras de canard maison, gelée de Sauternes", price_cents: 3000, is_highlight: false },
          { name: "Salade peaux de canard confit snacké, vinaigre de Xérès", price_cents: 1400, is_highlight: false },
          { name: "Salade de joues de porc confites", price_cents: 1500, is_highlight: false },
          { name: "La charcuterie du terroir & terrines maison", price_cents: 1800, is_highlight: false },
          { name: "Les petits saladiers lyonnais selon le marché", price_cents: 1400, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Spécialités Lyonnaises & Viandes",
        items: [
          { name: "Andouillette de veau Bobosse braisée, purée maison", price_cents: 2500, is_highlight: true },
          { name: "Quenelle de brochet sauce Nantua aux écrevisses, riz basmati", price_cents: 2600, is_highlight: true },
          { name: "Tablier de sapeur des Gones pané, beurre persillé maison", price_cents: 2600, is_highlight: true },
          { name: "Saucisson chaud lyonnais pistaché Bobosse, pommes vapeurs", price_cents: 2400, is_highlight: false },
          { name: "Demi rognon de veau cuit au four, purée maison", price_cents: 1800, is_highlight: false },
          { name: "Onglet de bœuf aux échalotes au vin blanc, frites maison", price_cents: 2600, is_highlight: false },
          { name: "Onglet de veau aux échalotes au vin blanc, frites maison", price_cents: 2800, is_highlight: false },
          { name: "Le duo d'onglets (bœuf et veau), frites maison", price_cents: 3000, is_highlight: false },
          { name: "Ris de veau en persillade, pommes grenailles et pleurotes", price_cents: 3700, is_highlight: false },
          { name: "Fricassée de ris de veau et Saint-Jacques poêlées", price_cents: 3700, is_highlight: false },
          { name: "Pavé de rumsteak gratiné à la fourme de Beaujolais", price_cents: 2900, is_highlight: false },
          { name: "Tartare de bœuf préparé à la commande, frites maison", price_cents: 2400, is_highlight: false },
          { name: "Mythique pavé au poivre sauvage flambé à l'armagnac", price_cents: 3500, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons & Vins",
        items: [
          { name: "Verre de Beaujolais rouge", price_cents: 700, is_highlight: false },
          { name: "Verre de Côtes du Rhône rouge", price_cents: 700, is_highlight: false },
          { name: "Verre de Bordeaux rouge", price_cents: 1000, is_highlight: false },
          { name: "Pot Lyonnais de Beaujolais (46cl)", price_cents: 1000, is_highlight: true },
          { name: "Pot Lyonnais de Côtes du Rhône (46cl)", price_cents: 1000, is_highlight: false },
          { name: "Kir Aligoté", price_cents: 900, is_highlight: false },
          { name: "Spritz / Americano", price_cents: 1200, is_highlight: false }
        ]
      }
    ]
  },
  'la-basilicata': {
    on_mange_quoi_ici: "Cuisine italienne. Pizza Basilicata & Lasagna bolognese.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-basilicata/feafaefezfzaefafae.pdf"
    ],
    pint_price: 9.50,
    cocktail_price: 9.00,
    coffee_price: 2.50,
    wine_glass: 6.50,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Antipasti",
        items: [
          { name: "Antipasti dell'Orto alla Griglia (légumes grillés)", price_cents: 1100, is_highlight: false },
          { name: "Insalata caprese (tomates, mozzarella, olives)", price_cents: 850, is_highlight: false },
          { name: "Insalata carciofi (artichauts, parmesan, tomates)", price_cents: 950, is_highlight: false },
          { name: "Salumi misti (charcuterie italienne)", price_cents: 1080, is_highlight: false },
          { name: "Insalata bresaola (boeuf séché, parmesan, tomates)", price_cents: 950, is_highlight: false },
          { name: "Rucola Parmigiana (roquette, parmesan, tomates)", price_cents: 850, is_highlight: false },
          { name: "Focaccia (ail, huile d'olive, origan)", price_cents: 500, is_highlight: false },
          { name: "Marinara (ail, tomate, basilic, origan)", price_cents: 600, is_highlight: false },
          { name: "Mozzarella di Bufala (125g)", price_cents: 850, is_highlight: false },
          { name: "Burrata (125g)", price_cents: 950, is_highlight: false },
          { name: "Prosciutto di Parma con Burrata", price_cents: 1600, is_highlight: false },
          { name: "Bresaola e Carciofi con Parmigiano", price_cents: 1600, is_highlight: false },
          { name: "Antipasti Basilicata (légumes, charcuterie, bufala) - 1 Pers", price_cents: 1600, is_highlight: false },
          { name: "Antipasti Basilicata (légumes, charcuterie, bufala) - 2 Pers", price_cents: 2600, is_highlight: false },
          { name: "Antipasti di verdure - 1 Pers", price_cents: 1500, is_highlight: false },
          { name: "Antipasti di verdure - 2 Pers", price_cents: 2500, is_highlight: false },
          { name: "Antipasti Terra e Mare (légumes et fruits de mer)", price_cents: 1700, is_highlight: false },
          { name: "Calamari fritti", price_cents: 1650, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Pâtes, Pizzas & Viandes",
        items: [
          { name: "Lasagna bolognese", price_cents: 1450, is_highlight: false },
          { name: "Rigatoni alla carbonara", price_cents: 1490, is_highlight: true },
          { name: "Rigatoni all'amatriciana", price_cents: 1450, is_highlight: false },
          { name: "Rigatoni Alfredo (poulet, crème, parmesan)", price_cents: 1450, is_highlight: false },
          { name: "Pappardelle dello Chef (artichauts, foie gras, truffe noire)", price_cents: 1800, is_highlight: true },
          { name: "Linguine alle vongole (palourdes, ail, tomates)", price_cents: 1850, is_highlight: false },
          { name: "Linguine ai frutti di mare", price_cents: 2300, is_highlight: false },
          { name: "Pappardelle alle Capesante (Saint-Jacques, truffe noire)", price_cents: 2400, is_highlight: false },
          { name: "Pizza Margherita", price_cents: 1350, is_highlight: false },
          { name: "Pizza Basilicata (poulet, champignons, artichauts)", price_cents: 1550, is_highlight: true },
          { name: "Pizza Bufala", price_cents: 1600, is_highlight: false },
          { name: "Pizza Parma e rucola", price_cents: 1550, is_highlight: false },
          { name: "Scaloppina al marsala e funghi (escalope de veau)", price_cents: 1850, is_highlight: false },
          { name: "Scaloppina al gorgonzola e crema con tartufo", price_cents: 1850, is_highlight: false },
          { name: "Saltimbocca alla romana", price_cents: 1850, is_highlight: false },
          { name: "Bistecca di Manzo (entrecôte 250g)", price_cents: 2200, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Tiramisu maison (café ou chocolat)", price_cents: 750, is_highlight: true },
          { name: "Cannolo siciliano maison", price_cents: 750, is_highlight: false },
          { name: "Panna cotta ai frutti rossi", price_cents: 750, is_highlight: false },
          { name: "Moelleux au chocolat maison", price_cents: 750, is_highlight: false },
          { name: "Crème brûlée", price_cents: 750, is_highlight: false },
          { name: "Macedonia (salade de fruits frais)", price_cents: 750, is_highlight: false },
          { name: "Mousse au chocolat maison", price_cents: 750, is_highlight: false },
          { name: "Café gourmand", price_cents: 950, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Chaudes & Sans Alcool",
        items: [
          { name: "Café, décaféiné", price_cents: 250, is_highlight: false },
          { name: "Chocolat / Crème", price_cents: 450, is_highlight: false },
          { name: "Cappuccino", price_cents: 450, is_highlight: false },
          { name: "Vittel 50cl", price_cents: 400, is_highlight: false },
          { name: "San Pellegrino 50cl", price_cents: 400, is_highlight: false },
          { name: "Vittel 100cl", price_cents: 650, is_highlight: false },
          { name: "San Pellegrino 100cl", price_cents: 650, is_highlight: false },
          { name: "Coca, Coca Zero 30cl", price_cents: 500, is_highlight: false },
          { name: "Limonade 25cl", price_cents: 500, is_highlight: false },
          { name: "Orangina / Ice tea", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Bière & Apéritifs",
        items: [
          { name: "Peroni pression 25cl", price_cents: 480, is_highlight: false },
          { name: "Peroni pression 50cl (Pinte)", price_cents: 950, is_highlight: true },
          { name: "Stella Artois pression 25cl", price_cents: 450, is_highlight: false },
          { name: "Stella Artois pression 50cl (Pinte)", price_cents: 870, is_highlight: false },
          { name: "Coupe de Prosecco 10cl", price_cents: 650, is_highlight: false },
          { name: "Spritz 10cl", price_cents: 900, is_highlight: true },
          { name: "Limonello 4cl", price_cents: 700, is_highlight: false },
          { name: "Amaretto 4cl", price_cents: 700, is_highlight: false }
        ]
      }
    ]
  },
  'la-cagouille': {
    on_mange_quoi_ici: "Cuisine de la mer. Noix de Saint-Jacques & Couteaux au beurre citronné.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cagouille/Capture_d_e_cran_2026-05-23_a__20.52.19.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cagouille/Capture_d_e_cran_2026-05-23_a__20.52.23.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cagouille/Capture_d_e_cran_2026-05-23_a__20.52.25.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cagouille/Capture_d_e_cran_2026-05-23_a__20.52.28.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cagouille/Capture_d_e_cran_2026-05-23_a__20.52.33.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-cagouille/Capture_d_e_cran_2026-05-23_a__20.52.40.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: null,
    wine_glass: null,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Coquillages & Crustacés",
        items: [
          { name: "9x Huîtres de claires David Hervé Fines n°3", price_cents: 2200, is_highlight: false },
          { name: "6x Huîtres de claires David Hervé Royales n°2", price_cents: 3400, is_highlight: false },
          { name: "6x Huîtres de claires David Hervé Boudeuses n°4", price_cents: 2400, is_highlight: false },
          { name: "Langoustines froides, mayonnaise", price_cents: 3400, is_highlight: false },
          { name: "Couteaux au beurre citronné", price_cents: 1600, is_highlight: true },
          { name: "Salade de saumon cru", price_cents: 1600, is_highlight: false },
          { name: "Salade de mesclun et haddock", price_cents: 1300, is_highlight: false },
          { name: "Velouté de potimarron", price_cents: 1300, is_highlight: false },
          { name: "Calmars frits ail et oignons", price_cents: 2200, is_highlight: true },
          { name: "Anchois frais et persil en friture", price_cents: 1300, is_highlight: false },
          { name: "Poêlée de champignons forestiers", price_cents: 2000, is_highlight: false },
          { name: "Moules bio d'Irlande marinières", price_cents: 1300, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Poissons & Plats",
        items: [
          { name: "Dos de Saint-Pierre grillé, beurre et cerfeuil", price_cents: 4200, is_highlight: false },
          { name: "Steak de saumon à l'unilatéral", price_cents: 3000, is_highlight: false },
          { name: "Pavé de maigre, vinaigrette tiède", price_cents: 3800, is_highlight: false },
          { name: "Assiette Cagouille (barbue et rouget)", price_cents: 4600, is_highlight: true },
          { name: "Pavé de lieu noir en pot au feu à la coriandre", price_cents: 2400, is_highlight: false },
          { name: "Dos de daurade farci à la tapenade", price_cents: 2800, is_highlight: false },
          { name: "Rougets barbets, huile d'olive tiède", price_cents: 3800, is_highlight: false },
          { name: "Filet de mulet, beurre blanc et échalotes confites", price_cents: 2700, is_highlight: false },
          { name: "Noix de Saint-Jacques, vinaigrette balsamique", price_cents: 4000, is_highlight: true }
        ]
      }
    ]
  }
};

Object.entries(payloads).forEach(([slug, payload]) => {
  const filePath = path.join('/Users/stanbrue/Documents/AntiGraviMood/moodmap/scratch', `${slug}_payload.json`);
  fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf-8');
  console.log(`Generated payload for ${slug} at ${filePath}`);
});
console.log("All payloads successfully written!");
