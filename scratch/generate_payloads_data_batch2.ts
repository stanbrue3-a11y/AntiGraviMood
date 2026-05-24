import fs from 'fs';
import path from 'path';

const payloads: Record<string, any> = {
  'la-creperie-de-josselin': {
    on_mange_quoi_ici: "Cuisine de crêperie. Galette complète & Galette Josselin aux champignons.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.32.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.38.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.41.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.45.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.53.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.56.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.47.59.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.48.04.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-creperie-de-josselin/Capture_d_e_cran_2026-05-23_a__21.48.13.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: 2.50,
    wine_glass: null,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Salades",
        items: [
          { name: "Salade verte", price_cents: 500, is_highlight: false },
          { name: "Salade verte aux noix", price_cents: 600, is_highlight: false },
          { name: "Salade verte Roquefort ou Chèvre", price_cents: 800, is_highlight: false },
          { name: "Salade verte Roquefort Noix ou Chèvre Noix", price_cents: 900, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Galettes",
        items: [
          { name: "Galette Beurre Salé", price_cents: 690, is_highlight: false },
          { name: "Galette Jambon", price_cents: 990, is_highlight: false },
          { name: "Galette Fromage", price_cents: 990, is_highlight: false },
          { name: "Galette Oeuf", price_cents: 990, is_highlight: false },
          { name: "Galette Saucisse", price_cents: 990, is_highlight: false },
          { name: "Galette Oignon", price_cents: 990, is_highlight: false },
          { name: "Galette Forestière (Champignon)", price_cents: 990, is_highlight: false },
          { name: "Galette Lard", price_cents: 990, is_highlight: false },
          { name: "Galette Purée d'aubergine", price_cents: 990, is_highlight: false },
          { name: "Galette Jambon Fromage", price_cents: 1090, is_highlight: false },
          { name: "Galette Poulet Fromage", price_cents: 1090, is_highlight: false },
          { name: "Galette Saucisse Fromage", price_cents: 1090, is_highlight: false },
          { name: "Galette Complète (Oeuf, Jambon, Fromage)", price_cents: 1190, is_highlight: false },
          { name: "Galette Lard Oignon", price_cents: 1190, is_highlight: false },
          { name: "Galette Roquefort ou Chèvre", price_cents: 1150, is_highlight: false },
          { name: "Galette Roquefort Noix ou Chèvre Noix", price_cents: 1190, is_highlight: false },
          { name: "Galette Chèvre Miel", price_cents: 1190, is_highlight: false },
          { name: "Galette Meneac (Épinard, Chèvre, Crème)", price_cents: 1190, is_highlight: false },
          { name: "Galette Andouille de Guéméné", price_cents: 1290, is_highlight: false },
          { name: "Galette Saumon Fumé, Citron, Crème", price_cents: 1290, is_highlight: false },
          { name: "Spécialité Josselin (Oeuf, Jambon, Fromage, Champignon)", price_cents: 1390, is_highlight: true },
          { name: "Spécialité Morbihannaise (Oeuf, Jambon, Fromage, Tomate fraîche)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Bretonne (Saucisse, Fromage, Tomate fraîche)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Maraîchère (Épinard, Oeuf miroir, Lard, Fromage, Crème)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Finistère (Purée d'aubergine, Oeuf miroir, Lard)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Bertine (Oeuf, Jambon, Fromage, Oignon)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Végétarienne (Oeuf, Fromage, Tomate fraîche, Oignon, Champignon)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Paysanne (Oeuf miroir, Lard, Oignon, Fromage)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Galinette (Poulet, Fromage, Champignon, Crème)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Brocéliande (Confiture de figue, Chèvre, Lard)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Korrigan (Jambon de pays, Chèvre, Tomate fraîche)", price_cents: 1390, is_highlight: false },
          { name: "Spécialité Armor (Andouille de Guéméné, Fromage, Oeuf miroir)", price_cents: 1390, is_highlight: true }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Crêpes sucrées & Desserts",
        items: [
          { name: "Crêpe Beurre Sucre", price_cents: 500, is_highlight: false },
          { name: "Crêpe Confiture (Fraise, Framboise, Abricot ou Myrtille)", price_cents: 600, is_highlight: false },
          { name: "Crêpe Chocolat Maison", price_cents: 800, is_highlight: false },
          { name: "Crêpe Chocolat Maison + 1 Garniture", price_cents: 900, is_highlight: false },
          { name: "Crêpe Nutella", price_cents: 800, is_highlight: false },
          { name: "Crêpe Nutella + 1 Garniture", price_cents: 900, is_highlight: false },
          { name: "Crêpe Compote de Pomme Maison", price_cents: 800, is_highlight: false },
          { name: "Crêpe Compote de Pomme Maison + Garniture", price_cents: 900, is_highlight: false },
          { name: "Crêpe Caramel au Beurre Salé Maison", price_cents: 800, is_highlight: true },
          { name: "Crêpe Caramel au Beurre Salé Maison + 1 Garniture", price_cents: 900, is_highlight: false },
          { name: "Crêpe Frangipane Maison", price_cents: 800, is_highlight: false },
          { name: "Crêpe Frangipane Maison + 1 Garniture", price_cents: 900, is_highlight: false },
          { name: "Crêpe Miel", price_cents: 800, is_highlight: false },
          { name: "Crêpe Miel + 1 Garniture", price_cents: 900, is_highlight: false },
          { name: "Crêpe Citron Pressé", price_cents: 800, is_highlight: false },
          { name: "Crêpe Crème de Marron", price_cents: 800, is_highlight: false },
          { name: "Crêpe Mont-Blanc (Crème de marrons, Crème fraîche)", price_cents: 900, is_highlight: false },
          { name: "Crêpe Sirop d'Érable", price_cents: 800, is_highlight: false },
          { name: "Crêpe Flambée (Rhum, Calvados, Cointreau, Mandarine ou Grand Marnier)", price_cents: 990, is_highlight: false },
          { name: "Crêpe Banane Flambée au Rhum", price_cents: 990, is_highlight: false },
          { name: "Coupe Colonel (Citron artisanal & Vodka)", price_cents: 990, is_highlight: false },
          { name: "Coupe Belle Ile (Vanille artisanale, Caramel, Amandes & Chantilly)", price_cents: 990, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons Alcoolisées",
        items: [
          { name: "Kir Breton 16cl", price_cents: 450, is_highlight: false },
          { name: "Pommeau Breton 7cl", price_cents: 450, is_highlight: false },
          { name: "Kir vin blanc 16cl", price_cents: 450, is_highlight: false },
          { name: "Chouchen 12cl", price_cents: 550, is_highlight: false },
          { name: "Pichet Cidre Brut Pression 25cl", price_cents: 550, is_highlight: false },
          { name: "Pichet Cidre Brut Pression 50cl", price_cents: 990, is_highlight: false },
          { name: "Pichet Cidre Brut Pression 100cl", price_cents: 1490, is_highlight: false },
          { name: "Cidre Bouché Brut 75cl", price_cents: 1390, is_highlight: false },
          { name: "Cidre Bouché Doux 75cl", price_cents: 1390, is_highlight: false },
          { name: "Cidre Bouché Brut Biologique 75cl", price_cents: 1490, is_highlight: false },
          { name: "Cidre Bouché Brut Artisanal 75cl", price_cents: 1490, is_highlight: false },
          { name: "Cidre Bouché Doux Poiré Artisanal 75cl", price_cents: 1490, is_highlight: false },
          { name: "Heineken 33cl", price_cents: 600, is_highlight: false },
          { name: "Bière Bretonne 33cl", price_cents: 700, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Sans Alcool",
        items: [
          { name: "Café Expresso", price_cents: 250, is_highlight: false },
          { name: "Café Décaféiné", price_cents: 250, is_highlight: false },
          { name: "Café Crème", price_cents: 490, is_highlight: false },
          { name: "Jus d'Orange Bio 25cl", price_cents: 490, is_highlight: false },
          { name: "Jus de Pomme Artisanal 25cl", price_cents: 490, is_highlight: false },
          { name: "Coca-Cola / Zéro 33cl", price_cents: 490, is_highlight: false },
          { name: "Evian 50cl", price_cents: 490, is_highlight: false },
          { name: "Evian 1L", price_cents: 780, is_highlight: false },
          { name: "Badoit 50cl", price_cents: 490, is_highlight: false },
          { name: "Badoit 1L", price_cents: 780, is_highlight: false }
        ]
      }
    ]
  },
  'la-manifattura': {
    on_mange_quoi_ici: "Cuisine italienne. Pizza C.P.2019 & Gnocchi alla sorrentina.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-manifattura/feafaefezfzazdfzd.pdf"
    ],
    pint_price: 10.00,
    cocktail_price: 12.00,
    coffee_price: 2.50,
    wine_glass: 7.00,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Antipasti & Insalate",
        items: [
          { name: "Burratina 125g, roquette, huile de basilic", price_cents: 1000, is_highlight: false },
          { name: "Stracciatella fumé, croûtons, huile de basilic", price_cents: 1200, is_highlight: false },
          { name: "La fritturina (calamars, gambas, aïoli)", price_cents: 1800, is_highlight: false },
          { name: "Stella della Manifattura 2.0 (à partager)", price_cents: 2800, is_highlight: true },
          { name: "Polpette e mulignan frits - 6pcs", price_cents: 900, is_highlight: false },
          { name: "Mini calzoni frits - 5pcs", price_cents: 1000, is_highlight: false },
          { name: "Bruschetta (mozza di bufala, balsamique)", price_cents: 1200, is_highlight: false },
          { name: "Carpaccio di gamberi de Sicile", price_cents: 2000, is_highlight: false },
          { name: "Insalata Caprese 250g", price_cents: 1600, is_highlight: false },
          { name: "Carpaccio de bœuf et champignons", price_cents: 1700, is_highlight: false },
          { name: "Insalata Cesar", price_cents: 1800, is_highlight: false },
          { name: "Parmigiana fredda", price_cents: 1800, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Pizze & Paste",
        items: [
          { name: "Polpette di manzo e bufala fondente", price_cents: 2000, is_highlight: false },
          { name: "La véritable Milanaise, frites", price_cents: 2200, is_highlight: false },
          { name: "Stracciatella di manzo (300g)", price_cents: 2500, is_highlight: false },
          { name: "Polipetti alla luciana (poulpe sauce tomate)", price_cents: 2000, is_highlight: false },
          { name: "Tonno grigliato (thon grillé, haricots)", price_cents: 2200, is_highlight: false },
          { name: "Pizza Margherita", price_cents: 1200, is_highlight: false },
          { name: "Pizza Bufala La Vraie", price_cents: 1600, is_highlight: false },
          { name: "Pizza Quattro formaggi", price_cents: 1800, is_highlight: false },
          { name: "Pizza Regina", price_cents: 1800, is_highlight: false },
          { name: "Pizza Salsiccia e friatielli", price_cents: 1800, is_highlight: false },
          { name: "Pizza Cetara (thon, oignons rouges)", price_cents: 1800, is_highlight: false },
          { name: "Pizza Parmigiana (aubergines frites)", price_cents: 1800, is_highlight: false },
          { name: "Pizza Ortolana", price_cents: 1800, is_highlight: false },
          { name: "Pizza Napoli", price_cents: 1800, is_highlight: false },
          { name: "Pizza Diavola piccante", price_cents: 1800, is_highlight: false },
          { name: "Pizza Burratissima", price_cents: 1900, is_highlight: false },
          { name: "Pizza La Manifattura (Bresaola, burrata)", price_cents: 2000, is_highlight: true },
          { name: "Pizza Parma D.O.P (Jambon de Parme 24 mois)", price_cents: 2000, is_highlight: false },
          { name: "Pizza Favolosa (Mortadelle, pistache)", price_cents: 2000, is_highlight: false },
          { name: "Pizza Tricolore", price_cents: 2500, is_highlight: false },
          { name: "Pizza Guagliò", price_cents: 2500, is_highlight: false },
          { name: "Pizza Tartufo & Parma", price_cents: 2500, is_highlight: false },
          { name: "Pizza C.P.2019 (Championne de Paris)", price_cents: 2500, is_highlight: true },
          { name: "Linguine sciue sciue", price_cents: 1200, is_highlight: false },
          { name: "Gnocchi alla sorrentina", price_cents: 1500, is_highlight: false },
          { name: "L'autentica carbonara", price_cents: 1800, is_highlight: false },
          { name: "Penne salmone", price_cents: 1800, is_highlight: false },
          { name: "Trofie pesto e burrata", price_cents: 1900, is_highlight: false },
          { name: "Linguine al tonno", price_cents: 1800, is_highlight: false },
          { name: "Linguine alle vongole (palourdes)", price_cents: 2100, is_highlight: false },
          { name: "Tagliatelles al tartufo", price_cents: 2200, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Dolci",
        items: [
          { name: "Panna Cotta fruits rouges", price_cents: 800, is_highlight: false },
          { name: "Tiramisu", price_cents: 900, is_highlight: false },
          { name: "Profiteroles à l'italienne au chocolat", price_cents: 900, is_highlight: false },
          { name: "Profiteroles à l'italienne aux pistaches", price_cents: 900, is_highlight: false },
          { name: "Tarte de la nonna", price_cents: 900, is_highlight: false },
          { name: "Baba napolitain au limoncello", price_cents: 900, is_highlight: false },
          { name: "Tarte aux 3 chocolats", price_cents: 900, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Birra & Cocktails & Vini",
        items: [
          { name: "Bouteille Peroni 33cl", price_cents: 600, is_highlight: false },
          { name: "Peroni pression 25cl", price_cents: 600, is_highlight: false },
          { name: "Peroni pression 50cl (Pinte)", price_cents: 1000, is_highlight: true },
          { name: "Paulaner pression 50cl (Pinte)", price_cents: 1000, is_highlight: false },
          { name: "1664 blanche pression 50cl", price_cents: 1100, is_highlight: false },
          { name: "Grimbergen ambrée pression 50cl", price_cents: 1200, is_highlight: false },
          { name: "Aperol Spritz", price_cents: 1200, is_highlight: false },
          { name: "Passion Spritz", price_cents: 1200, is_highlight: false },
          { name: "Hugo", price_cents: 1200, is_highlight: false },
          { name: "Cocktail La Manifattura", price_cents: 1400, is_highlight: false },
          { name: "Moscow Mule", price_cents: 1200, is_highlight: false },
          { name: "Mojito", price_cents: 1200, is_highlight: false },
          { name: "Bellini", price_cents: 1200, is_highlight: false },
          { name: "Verre de vin rouge Montepulciano 14cl", price_cents: 700, is_highlight: false },
          { name: "Verre de vin rouge Primitivo 14cl", price_cents: 800, is_highlight: false },
          { name: "Verre de vin rouge Chianti 14cl", price_cents: 800, is_highlight: false },
          { name: "Verre de vin rosé Chiaretto Di Bartolino 14cl", price_cents: 700, is_highlight: false },
          { name: "Verre de vin blanc Chardonnay 14cl", price_cents: 800, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Analcolici & Caffeteria",
        items: [
          { name: "Espresso", price_cents: 250, is_highlight: false },
          { name: "Double expresso", price_cents: 350, is_highlight: false },
          { name: "Allongé", price_cents: 250, is_highlight: false },
          { name: "Cappuccino", price_cents: 500, is_highlight: false },
          { name: "Thé, Infusion", price_cents: 500, is_highlight: false },
          { name: "San Benedetto plate 50cl", price_cents: 500, is_highlight: false },
          { name: "San Benedetto gazeuse 50cl", price_cents: 500, is_highlight: false },
          { name: "Coca-Cola / Zéro 33cl", price_cents: 500, is_highlight: false },
          { name: "Limonade Italienne 33cl", price_cents: 600, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Bambino",
        items: [
          { name: "Menu Bambino (Pâtes ou pizza + boisson)", price_cents: 1200, is_highlight: false }
        ]
      }
    ]
  },
  'la-petite-soeur': {
    on_mange_quoi_ici: "Cuisine méditerranéenne. Épaule d'agneau confite & Panouss au panais.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-petite-soeur/LPS-Menu-Mai-2026.pdf"
    ],
    pint_price: null,
    cocktail_price: 9.50,
    coffee_price: 3.00,
    wine_glass: 6.00,
    menu_items: [
      {
        category_type: "sharing",
        display_label: "Tapas",
        items: [
          { name: "Assiette de fromages sélection du moment", price_cents: 1400, is_highlight: false },
          { name: "Panouss (Houmous au panais et ail noir)", price_cents: 900, is_highlight: true },
          { name: "Tirokafteri (Toast à la grecque, feta)", price_cents: 900, is_highlight: false },
          { name: "L'Œuf et demi mayo au paprika fumé", price_cents: 900, is_highlight: false },
          { name: "Fêta rôtie au miel fermenté et thym", price_cents: 1000, is_highlight: false },
          { name: "Fava (Crème de fèves jaunes, anchois)", price_cents: 1000, is_highlight: false },
          { name: "Crème de gorgonzola aux noix et pomme", price_cents: 1000, is_highlight: false },
          { name: "Fuet Catalan", price_cents: 1000, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats à partager",
        items: [
          { name: "Épaule d'agneau confite, crème de maïs", price_cents: 2000, is_highlight: true },
          { name: "Farinata de légumes rôtis aux épices", price_cents: 1800, is_highlight: false },
          { name: "Dolma (Boulettes de sardines au citron confit)", price_cents: 1900, is_highlight: false },
          { name: "Börek (Feuilleté au fenouil et brebis)", price_cents: 1800, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Pomme rôtie au miel miso et halva", price_cents: 1000, is_highlight: false },
          { name: "Pithiviers (Fondant amande citronné)", price_cents: 900, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Vins & Cocktails",
        items: [
          { name: "Verre de vin nature (Rouge, Blanc, Rosé)", price_cents: 600, is_highlight: false },
          { name: "Cocktail Ginto (Gin du 14e)", price_cents: 950, is_highlight: false },
          { name: "Cocktail Mexico Mule", price_cents: 950, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Chaudes & Softs",
        items: [
          { name: "Expresso", price_cents: 300, is_highlight: false },
          { name: "Double expresso", price_cents: 400, is_highlight: false },
          { name: "Thé / Infusion", price_cents: 400, is_highlight: false },
          { name: "Lemonaid 33cl", price_cents: 600, is_highlight: false },
          { name: "Community Cola 33cl", price_cents: 600, is_highlight: false }
        ]
      }
    ]
  },
  'la-taverne-de-zhao': {
    on_mange_quoi_ici: "Cuisine chinoise. Pâtes Biang Biang au bœuf & Tong Guan Mo au porc.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/la-taverne-de-zhao/zczczvzrvrzv.pdf"
    ],
    pint_price: 7.00,
    cocktail_price: null,
    coffee_price: 2.50,
    wine_glass: 5.00,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées Froides & Chaudes",
        items: [
          { name: "Platycodon (Poulet effiloché, sésame blanc)", price_cents: 780, is_highlight: true },
          { name: "Forêt Noire (Champignons noirs, radis, coriandre)", price_cents: 680, is_highlight: false },
          { name: "Salade d'Algues épicée", price_cents: 680, is_highlight: false },
          { name: "Bœuf au Piment", price_cents: 850, is_highlight: false },
          { name: "Raviolis Dorés Classique (x6)", price_cents: 780, is_highlight: false },
          { name: "Raviolis à la Vapeur (x6)", price_cents: 780, is_highlight: false },
          { name: "Raviolis Végétariens Dorés (x6)", price_cents: 780, is_highlight: false },
          { name: "Xiao Long Bao au porc (x4)", price_cents: 850, is_highlight: false },
          { name: "Poulet Frit de ZHAO", price_cents: 850, is_highlight: false },
          { name: "Mo N°1 au porc mijoté", price_cents: 750, is_highlight: true },
          { name: "Mo Ji au poulet mariné", price_cents: 750, is_highlight: false },
          { name: "Mo Végé au tofu et œuf", price_cents: 750, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Liang Pi & Pâtes & Riz",
        items: [
          { name: "Liang Pi Classique (Pâtes froides, sésame)", price_cents: 1180, is_highlight: false },
          { name: "Liang Pi XO au poulet", price_cents: 1280, is_highlight: false },
          { name: "Pâtes Biang Biang Tomate", price_cents: 1280, is_highlight: false },
          { name: "Pâtes Biang Biang Porc", price_cents: 1380, is_highlight: false },
          { name: "Pâtes Biang Biang Bœuf", price_cents: 1380, is_highlight: true },
          { name: "Pâtes Biang Biang Tomate + Porc", price_cents: 1380, is_highlight: false },
          { name: "Pâtes Biang Biang Tomate + Bœuf", price_cents: 1380, is_highlight: false },
          { name: "Pâtes aux épinards Tomate", price_cents: 1280, is_highlight: false },
          { name: "Pâtes aux épinards Porc", price_cents: 1380, is_highlight: false },
          { name: "Pâtes aux épinards Bœuf", price_cents: 1380, is_highlight: false },
          { name: "Pâtes d'Épinards Fraîches de ZHAO (froides)", price_cents: 1380, is_highlight: false },
          { name: "Marmite de Vermicelles de Riz au poulet", price_cents: 1380, is_highlight: false },
          { name: "Marmite de Nouilles de Patate Douce au poulet", price_cents: 1380, is_highlight: false },
          { name: "Marmite d'Udon Chinois au poulet", price_cents: 1380, is_highlight: false },
          { name: "Riz au Porc mijoté", price_cents: 1380, is_highlight: false },
          { name: "Riz au Calamar sauté", price_cents: 1450, is_highlight: false },
          { name: "Riz au Poulet mariné", price_cents: 1380, is_highlight: false },
          { name: "Riz aux Œufs Brouillés à la Tomate", price_cents: 1280, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Mangue Fraîche au Riz noir et Lait de Coco", price_cents: 650, is_highlight: true },
          { name: "Glace au Sésame Noir avec Sablé d'Œuf", price_cents: 650, is_highlight: false },
          { name: "Flan au Thé Vert avec Haricot Rouge", price_cents: 650, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Bière & Vins",
        items: [
          { name: "Tsingtao Pression 25cl", price_cents: 400, is_highlight: false },
          { name: "Tsingtao Pression 50cl (Pinte)", price_cents: 700, is_highlight: true },
          { name: "Tsing Tao bouteille 33cl", price_cents: 480, is_highlight: false },
          { name: "Tsing Tao IPA Bière 6.2° 33cl", price_cents: 580, is_highlight: false },
          { name: "Verre de vin rouge Côtes-du-Rhône 14cl", price_cents: 500, is_highlight: false },
          { name: "Verre de vin blanc Riesling 14cl", price_cents: 500, is_highlight: false },
          { name: "Verre de vin rosé Côtes-de-Provence 14cl", price_cents: 500, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Sans Alcool",
        items: [
          { name: "Café / Déca", price_cents: 250, is_highlight: false },
          { name: "Thé Pu-erh au Citron Vert Séché", price_cents: 550, is_highlight: false },
          { name: "Thé Oolong à la Pêche Blanche", price_cents: 550, is_highlight: false },
          { name: "Sirop de Prune Acidulée (Fait Maison)", price_cents: 550, is_highlight: false },
          { name: "Thé Glacé au Pamplemousse (Fait Maison)", price_cents: 550, is_highlight: false },
          { name: "Coca-Cola / Zéro 33cl", price_cents: 350, is_highlight: false },
          { name: "Evian 50cl", price_cents: 350, is_highlight: false }
        ]
      }
    ]
  },
  'le-bistrot-des-campagnes-paris-14': {
    on_mange_quoi_ici: "Cuisine française de terroir. Joues de porc braisées & Tatin de boudin noir.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.54.40.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.54.44.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.54.53.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.54.59.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.55.02.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.55.44.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.55.53.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-des-campagnes-paris-14/Capture_d_e_cran_2026-05-23_a__21.55.59.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: 2.50,
    wine_glass: 6.50,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "Chèvre fondant aux piquillos, sablé parmesan", price_cents: 1050, is_highlight: false },
          { name: "Poêlée de pleurotes grises, ail et persil, oeuf poché", price_cents: 1050, is_highlight: false },
          { name: "Tartare de saumon, aneth mangue et citron vert", price_cents: 1050, is_highlight: false },
          { name: "Tatin de boudin noir aux pommes", price_cents: 1050, is_highlight: true },
          { name: "Terrine de campagne aux épices Rabelais, pickles", price_cents: 1050, is_highlight: false },
          { name: "Foie gras de canard mi-cuit au torchon à l'Armagnac", price_cents: 2500, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Plats",
        items: [
          { name: "Pavé de rumsteck de boeuf grillé aux herbes, frites", price_cents: 2600, is_highlight: false },
          { name: "Tartare de boeuf du bistrot, version rafraîchissante, frites", price_cents: 2600, is_highlight: false },
          { name: "Suprême de poulet jaune, sauce cacahuète, patate douce", price_cents: 2600, is_highlight: false },
          { name: "Joues de porc marinées au vin de Loire, rattes", price_cents: 2600, is_highlight: true },
          { name: "Poisson sauvage vapeur, yuzu, risotto d'épeautre", price_cents: 2600, is_highlight: false },
          { name: "Risotto végétarien d'épeautre", price_cents: 2600, is_highlight: false },
          { name: "Confit de canard traditionnel, sauce moutarde", price_cents: 2600, is_highlight: false },
          { name: "Magret de canard poêlé aux fruits rouges", price_cents: 3100, is_highlight: false },
          { name: "Rognons de veau flambés à l'Armagnac", price_cents: 3100, is_highlight: false },
          { name: "Côte de boeuf véritable grillée pour 2", price_cents: 7500, is_highlight: false }
        ]
      },
      {
        category_type: "dessert",
        display_label: "Desserts",
        items: [
          { name: "Plateau sélection de fromages AOC au lait cru", price_cents: 1350, is_highlight: false },
          { name: "Crème viennoise au chocolat noir 50% cacao", price_cents: 1050, is_highlight: false },
          { name: "Vacherin du bistrot", price_cents: 1050, is_highlight: false },
          { name: "Profiteroles traditionnelles sauce chocolat noir", price_cents: 1350, is_highlight: false },
          { name: "Crème brûlée vanille flambée au Grand Marnier", price_cents: 1050, is_highlight: true },
          { name: "Gros baba bouchon au rhum Saint James", price_cents: 1250, is_highlight: false },
          { name: "Pomme confite à l'anis étoilé", price_cents: 1050, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Vins & Apéritifs",
        items: [
          { name: "Verre de vin rosé Côtes de Provence 14cl", price_cents: 650, is_highlight: false },
          { name: "Verre de vin rouge Côtes de Bordeaux 14cl", price_cents: 750, is_highlight: false },
          { name: "Verre de vin blanc Anjou Chenin 14cl", price_cents: 800, is_highlight: false },
          { name: "Kir vin blanc 14cl", price_cents: 650, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Sans Alcool",
        items: [
          { name: "Café Expresso", price_cents: 250, is_highlight: false },
          { name: "Café Crème", price_cents: 550, is_highlight: false },
          { name: "Chocolat chaud", price_cents: 650, is_highlight: false }
        ]
      },
      {
        category_type: "formula",
        display_label: "Formules",
        items: [
          { name: "Menu Bistrot Midi (plat + entrée ou dessert)", price_cents: 2550, is_highlight: false },
          { name: "Menu Bistrot Soir (plat + entrée ou dessert)", price_cents: 3550, is_highlight: false },
          { name: "Menu Campagne Soir (entrée + plat + dessert)", price_cents: 4450, is_highlight: false },
          { name: "Menu Enfant (plat et dessert)", price_cents: 1500, is_highlight: false }
        ]
      }
    ]
  },
  'le-bistrot-du-dome-paris-14': {
    on_mange_quoi_ici: "Cuisine marine de tradition. Aile de raie aux câpres & Sole meunière.",
    Url_Photos_Menu: [
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-du-dome-paris-14/Capture_d_e_cran_2026-05-23_a__21.56.50.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-du-dome-paris-14/Capture_d_e_cran_2026-05-23_a__21.56.53.png",
      "https://sfirkmmgkorhblpejrnw.supabase.co/storage/v1/object/public/place-media/menus/le-bistrot-du-dome-paris-14/Capture_d_e_cran_2026-05-23_a__21.56.56.png"
    ],
    pint_price: null,
    cocktail_price: null,
    coffee_price: 3.00,
    wine_glass: 5.70,
    menu_items: [
      {
        category_type: "starter",
        display_label: "Entrées",
        items: [
          { name: "L'assiette d'huîtres (12)", price_cents: 1800, is_highlight: false },
          { name: "Salade de Langoustines", price_cents: 1450, is_highlight: false },
          { name: "Soupe de Poissons", price_cents: 950, is_highlight: true },
          { name: "Friture de Joels", price_cents: 1150, is_highlight: false },
          { name: "Pimientos Farcis", price_cents: 1130, is_highlight: false },
          { name: "Salade de Tourteaux", price_cents: 1650, is_highlight: false },
          { name: "Tartare de Saumon", price_cents: 1210, is_highlight: false },
          { name: "Moules Marinières", price_cents: 1010, is_highlight: false },
          { name: "Carpaccio de Saint-Jacques", price_cents: 1390, is_highlight: false },
          { name: "Soupe de poisson Bouillabaisse", price_cents: 1500, is_highlight: false },
          { name: "Guacamole et crabe", price_cents: 1800, is_highlight: false },
          { name: "Carpaccio de haddock", price_cents: 1700, is_highlight: false },
          { name: "Encornet à la plancha", price_cents: 1500, is_highlight: false }
        ]
      },
      {
        category_type: "main",
        display_label: "Poissons & Plats",
        items: [
          { name: "Sole meunière", price_cents: 2790, is_highlight: true },
          { name: "Filet de Dorade aux Encres", price_cents: 2310, is_highlight: false },
          { name: "Lotte aux Citrons confits", price_cents: 2150, is_highlight: false },
          { name: "Rouget au Basilic", price_cents: 2190, is_highlight: false },
          { name: "Risotto aux Saint-Jacques", price_cents: 2390, is_highlight: false },
          { name: "Filet de Bar Sauce Vierge", price_cents: 2400, is_highlight: false },
          { name: "Filet de Barbue à la coriandre", price_cents: 2190, is_highlight: false },
          { name: "Côte de veau poêlée", price_cents: 2800, is_highlight: false },
          { name: "Aile de Raie aux Câpres", price_cents: 2800, is_highlight: false },
          { name: "Saint-Jacques aux épinards", price_cents: 3100, is_highlight: false }
        ]
      },
      {
        category_type: "alcohol_drink",
        display_label: "Boissons Alcoolisées & Vins",
        items: [
          { name: "Coupe de Champagne Brut", price_cents: 1000, is_highlight: false },
          { name: "Kir au vin blanc", price_cents: 400, is_highlight: false },
          { name: "Verre de vin de pays au comptoir 14cl", price_cents: 570, is_highlight: false },
          { name: "Bouteille Pouilly-Fumé Petit Fumé 75cl", price_cents: 2410, is_highlight: false },
          { name: "Bouteille Chablis Les Beaumonts 75cl", price_cents: 5000, is_highlight: false }
        ]
      },
      {
        category_type: "soft_drink",
        display_label: "Boissons Sans Alcool",
        items: [
          { name: "Café Expresso / Décaféiné", price_cents: 300, is_highlight: false },
          { name: "Infusions / Thés", price_cents: 310, is_highlight: false },
          { name: "Evian 1/2", price_cents: 350, is_highlight: false },
          { name: "Badoit 1/2", price_cents: 350, is_highlight: false }
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
