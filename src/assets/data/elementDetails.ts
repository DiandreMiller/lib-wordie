export type ElementDetails = {
    symbol: string;
    atomicNumber: number;
    shortFact: string;
    overview: string;
    uses: string[];
    funFact: string;
  };
  
  export const ELEMENT_DETAILS: Record<string, ElementDetails> = {
    hydrogen: { symbol: 'H', atomicNumber: 1, shortFact: 'Lightest and most abundant element.', overview: 'Hydrogen is a colorless gas and the simplest element, found in stars and the universe.', uses: ['Fuel cells', 'Rocket fuel', 'Ammonia production'], funFact: 'Stars are mostly hydrogen.' },
    helium: { symbol: 'He', atomicNumber: 2, shortFact: 'A noble gas lighter than air.', overview: 'Helium is an inert gas used in balloons and cooling systems.', uses: ['Balloons', 'Cryogenics'], funFact: 'Helium makes your voice higher.' },
    lithium: { symbol: 'Li', atomicNumber: 3, shortFact: 'Used in rechargeable batteries.', overview: 'Lithium is a soft metal essential for modern energy storage.', uses: ['Batteries', 'Medication'], funFact: 'Used in mood stabilizers.' },
    beryllium: { symbol: 'Be', atomicNumber: 4, shortFact: 'Strong, lightweight metal.', overview: 'Beryllium is used in aerospace and is toxic if inhaled.', uses: ['Aerospace', 'X-ray windows'], funFact: 'Stronger than steel for its weight.' },
    boron: { symbol: 'B', atomicNumber: 5, shortFact: 'Used in glass and detergents.', overview: 'Boron is a metalloid used in heat-resistant glass.', uses: ['Glass', 'Cleaning products'], funFact: 'Essential for plant growth.' },
    carbon: { symbol: 'C', atomicNumber: 6, shortFact: 'Basis of life.', overview: 'Carbon forms the backbone of organic molecules.', uses: ['Fuel', 'Steel', 'Plastics'], funFact: 'Diamonds are carbon.' },
    nitrogen: { symbol: 'N', atomicNumber: 7, shortFact: 'Makes up most of air.', overview: 'Nitrogen is a stable gas essential for life.', uses: ['Fertilizer', 'Cooling'], funFact: '78% of air is nitrogen.' },
    oxygen: { symbol: 'O', atomicNumber: 8, shortFact: 'Essential for breathing.', overview: 'Oxygen supports life and combustion.', uses: ['Medical oxygen', 'Welding'], funFact: 'Liquid oxygen is blue.' },
    fluorine: { symbol: 'F', atomicNumber: 9, shortFact: 'Most reactive element.', overview: 'Fluorine reacts with nearly everything.', uses: ['Toothpaste', 'Teflon'], funFact: 'Extremely dangerous in pure form.' },
    neon: { symbol: 'Ne', atomicNumber: 10, shortFact: 'Glows in signs.', overview: 'Neon is a noble gas used in lighting.', uses: ['Signs'], funFact: 'Neon lights are reddish-orange.' },
  
    sodium: { symbol: 'Na', atomicNumber: 11, shortFact: 'Highly reactive metal.', overview: 'Sodium reacts violently with water.', uses: ['Salt'], funFact: 'Explodes in water.' },
    magnesium: { symbol: 'Mg', atomicNumber: 12, shortFact: 'Burns bright white.', overview: 'Magnesium is used in flares and alloys.', uses: ['Fireworks'], funFact: 'Used in flash photography.' },
    aluminum: { symbol: 'Al', atomicNumber: 13, shortFact: 'Lightweight metal.', overview: 'Aluminum is corrosion-resistant and widely used.', uses: ['Cans', 'Aircraft'], funFact: 'Once more valuable than gold.' },
    silicon: { symbol: 'Si', atomicNumber: 14, shortFact: 'Used in computer chips.', overview: 'Silicon is key to electronics and semiconductors.', uses: ['Chips', 'Solar panels'], funFact: 'Silicon Valley is named after it.' },
    phosphorus: { symbol: 'P', atomicNumber: 15, shortFact: 'Essential for DNA.', overview: 'Phosphorus is vital for energy and life.', uses: ['Fertilizer'], funFact: 'Glows in the dark.' },
    sulfur: { symbol: 'S', atomicNumber: 16, shortFact: 'Yellow element with smell.', overview: 'Sulfur is used in chemicals and matches.', uses: ['Fertilizer', 'Chemicals'], funFact: 'Smells like rotten eggs.' },
    chlorine: { symbol: 'Cl', atomicNumber: 17, shortFact: 'Disinfects water.', overview: 'Chlorine kills bacteria in water.', uses: ['Pools', 'Cleaning'], funFact: 'Toxic gas in pure form.' },
    argon: { symbol: 'Ar', atomicNumber: 18, shortFact: 'Inert noble gas.', overview: 'Argon does not react easily.', uses: ['Light bulbs'], funFact: '3rd most common gas in air.' },
    potassium: { symbol: 'K', atomicNumber: 19, shortFact: 'Important for muscles.', overview: 'Potassium helps nerve signals.', uses: ['Fertilizer'], funFact: 'React violently with water.' },
    calcium: { symbol: 'Ca', atomicNumber: 20, shortFact: 'Builds bones.', overview: 'Calcium is essential for bones and teeth.', uses: ['Supplements'], funFact: 'Also used in cement.' },
    scandium: { symbol: 'Sc', atomicNumber: 21, shortFact: 'Used in alloys.', overview: 'Scandium strengthens aluminum alloys.', uses: ['Aerospace'], funFact: 'Rare element.' },
    titanium: { symbol: 'Ti', atomicNumber: 22, shortFact: 'Strong and light.', overview: 'Titanium is used in aircraft and implants.', uses: ['Aircraft', 'Medical'], funFact: 'Resists corrosion.' },
    vanadium: { symbol: 'V', atomicNumber: 23, shortFact: 'Strengthens steel.', overview: 'Vanadium improves metal durability.', uses: ['Steel'], funFact: 'Named after a goddess.' },
    chromium: { symbol: 'Cr', atomicNumber: 24, shortFact: 'Gives shine.', overview: 'Chromium is used for plating metals.', uses: ['Chrome plating'], funFact: 'Used in stainless steel.' },
    manganese: { symbol: 'Mn', atomicNumber: 25, shortFact: 'Used in steel.', overview: 'Manganese improves metal strength.', uses: ['Steel'], funFact: 'Essential nutrient.' },
    iron: { symbol: 'Fe', atomicNumber: 26, shortFact: 'In blood and steel.', overview: 'Iron carries oxygen in blood.', uses: ['Construction'], funFact: 'Earth core is mostly iron.' },
    cobalt: { symbol: 'Co', atomicNumber: 27, shortFact: 'Used in batteries.', overview: 'Cobalt is used in rechargeable batteries.', uses: ['Batteries'], funFact: 'Gives glass blue color.' },
    nickel: { symbol: 'Ni', atomicNumber: 28, shortFact: 'Used in coins.', overview: 'Nickel resists corrosion.', uses: ['Coins'], funFact: 'Named after a myth.' },
    copper: { symbol: 'Cu', atomicNumber: 29, shortFact: 'Great conductor.', overview: 'Copper is widely used in wiring.', uses: ['Electrical wires'], funFact: 'Turns green over time.' },
    zinc: { symbol: 'Zn', atomicNumber: 30, shortFact: 'Prevents rust.', overview: 'Zinc protects metals from corrosion.', uses: ['Galvanizing'], funFact: 'Essential for immune system.' },
    gallium: {
        symbol: 'Ga',
        atomicNumber: 31,
        shortFact: 'A soft metal with a very low melting point.',
        overview:
          'Gallium is a post-transition metal that can melt just above room temperature. It is used in electronics and in compounds that help power LEDs and solar cells.',
        uses: [
          'LEDs',
          'Semiconductors',
          'Solar cells',
        ],
        funFact: 'A piece of gallium can melt in your hand because your body temperature is higher than its melting point.',
      },
    
      germanium: {
        symbol: 'Ge',
        atomicNumber: 32,
        shortFact: 'A metalloid used in electronics and fiber optics.',
        overview:
          'Germanium is a shiny gray metalloid that became important in early transistor technology. Today it is still used in semiconductors, infrared optics, and fiber optic systems.',
        uses: [
          'Semiconductors',
          'Fiber optics',
          'Infrared optics',
        ],
        funFact: 'Before silicon took over, germanium was one of the most important materials used in early electronics.',
      },
    
      arsenic: {
        symbol: 'As',
        atomicNumber: 33,
        shortFact: 'A toxic metalloid known for its historical use as a poison.',
        overview:
          'Arsenic is a brittle metalloid that can be found in several forms. It is toxic in many compounds, but it also has industrial uses in semiconductors and wood treatments.',
        uses: [
          'Semiconductors',
          'Wood preservatives',
          'Alloys',
        ],
        funFact: 'Arsenic became infamous in history because it was once a common poison in murder stories and real crimes.',
      },
    
      selenium: {
        symbol: 'Se',
        atomicNumber: 34,
        shortFact: 'A nonmetal used in electronics, glass, and nutrition.',
        overview:
          'Selenium is a nonmetal with properties that make it useful in photocells, glassmaking, and electronics. In very small amounts, it is also an essential nutrient for humans.',
        uses: [
          'Glassmaking',
          'Electronics',
          'Photocells',
        ],
        funFact: 'Your body needs a tiny amount of selenium to stay healthy, but too much can be harmful.',
      },
    
      bromine: {
        symbol: 'Br',
        atomicNumber: 35,
        shortFact: 'A reddish-brown liquid nonmetal at room temperature.',
        overview:
          'Bromine is one of the very few elements that is liquid at room temperature. It is reactive and is used in flame retardants, water treatment, and some chemical manufacturing.',
        uses: [
          'Flame retardants',
          'Water treatment',
          'Chemicals',
        ],
        funFact: 'Bromine is one of only two elements that are liquid at room temperature, the other being mercury.',
      },
    
      krypton: {
        symbol: 'Kr',
        atomicNumber: 36,
        shortFact: 'A noble gas used in lighting and lasers.',
        overview:
          'Krypton is a colorless noble gas that does not react easily with other elements. It is used in specialty lighting, lasers, and insulating window panels.',
        uses: [
          'Lighting',
          'Lasers',
          'Insulated windows',
        ],
        funFact: 'Krypton gas can glow with a pale whitish light when electricity passes through it.',
      },
    
      rubidium: {
        symbol: 'Rb',
        atomicNumber: 37,
        shortFact: 'A highly reactive alkali metal.',
        overview:
          'Rubidium is a soft, silvery metal that reacts quickly with water and air. Because of its extreme reactivity, it is mainly used in research and specialized electronics.',
        uses: [
          'Research',
          'Electronics',
          'Atomic clocks',
        ],
        funFact: 'Rubidium is so reactive that it has to be stored carefully to keep it from reacting with moisture in the air.',
      },
    
      strontium: {
        symbol: 'Sr',
        atomicNumber: 38,
        shortFact: 'An alkaline earth metal famous for making fireworks red.',
        overview:
          'Strontium is a soft metal that reacts with air and water. Its compounds are especially known for producing bright red colors in fireworks and signal flares.',
        uses: [
          'Fireworks',
          'Signal flares',
          'Ceramics',
        ],
        funFact: 'The bright red color in many fireworks displays often comes from strontium compounds.',
      },
    
      yttrium: {
        symbol: 'Y',
        atomicNumber: 39,
        shortFact: 'A transition metal used in LEDs and advanced materials.',
        overview:
          'Yttrium is a silvery metal often grouped with the rare earth elements because of where it is found and how it behaves. It is useful in phosphors, lasers, and superconductors.',
        uses: [
          'LEDs',
          'Lasers',
          'Superconductors',
        ],
        funFact: 'Yttrium is named after Ytterby, a village in Sweden that inspired the names of several elements.',
      },
    
      zirconium: {
        symbol: 'Zr',
        atomicNumber: 40,
        shortFact: 'A corrosion-resistant metal used in nuclear reactors.',
        overview:
          'Zirconium is a strong metal that resists corrosion and heat. It is especially important in nuclear technology because it does not easily absorb neutrons.',
        uses: [
          'Nuclear reactors',
          'Ceramics',
          'Chemical equipment',
        ],
        funFact: 'Zirconium is related to the mineral zircon, which is sometimes used as a gemstone.',
      },
    
      niobium: {
        symbol: 'Nb',
        atomicNumber: 41,
        shortFact: 'A metal used in superconductors and strong alloys.',
        overview:
          'Niobium is a shiny transition metal valued for improving the strength of steel and for its use in superconducting materials. It is found in specialty metals and electronics.',
        uses: [
          'Steel alloys',
          'Superconductors',
          'Jet engines',
        ],
        funFact: 'Niobium was named after Niobe from Greek mythology.',
      },
    
      molybdenum: {
        symbol: 'Mo',
        atomicNumber: 42,
        shortFact: 'A metal that helps steel resist heat and pressure.',
        overview:
          'Molybdenum is a hard transition metal often added to steel to make it stronger and more resistant to heat. It is important in construction, machinery, and high-temperature equipment.',
        uses: [
          'Steel alloys',
          'Industrial machinery',
          'High-temperature equipment',
        ],
        funFact: 'Molybdenum helps some steels stay strong even in extreme heat.',
      },
    
      technetium: {
        symbol: 'Tc',
        atomicNumber: 43,
        shortFact: 'The first element made artificially.',
        overview:
          'Technetium is a radioactive transition metal and was the first element to be produced artificially rather than discovered naturally. It is especially important in medical imaging.',
        uses: [
          'Medical imaging',
          'Research',
          'Radiotracers',
        ],
        funFact: 'Its name comes from a Greek word meaning artificial.',
      },
    
      ruthenium: {
        symbol: 'Ru',
        atomicNumber: 44,
        shortFact: 'A hard metal used in electronics and catalysts.',
        overview:
          'Ruthenium is a transition metal in the platinum group. It is used to improve the hardness and durability of metals and is also useful in electronics and chemical catalysts.',
        uses: [
          'Electronics',
          'Catalysts',
          'Metal alloys',
        ],
        funFact: 'Ruthenium belongs to the same broader family of metals as platinum and palladium.',
      },
    
      rhodium: {
        symbol: 'Rh',
        atomicNumber: 45,
        shortFact: 'A rare metal used in catalytic converters.',
        overview:
          'Rhodium is a silvery, highly reflective metal that resists corrosion. It is widely used in catalytic converters to help reduce harmful car emissions.',
        uses: [
          'Catalytic converters',
          'Jewelry plating',
          'Mirrors',
        ],
        funFact: 'Rhodium is often one of the most expensive metals in the world.',
      },
    
      palladium: {
        symbol: 'Pd',
        atomicNumber: 46,
        shortFact: 'A valuable metal used in catalysts and electronics.',
        overview:
          'Palladium is a soft, silvery metal in the platinum group. It is especially useful in catalytic converters, electronics, and processes involving hydrogen.',
        uses: [
          'Catalytic converters',
          'Electronics',
          'Hydrogen purification',
        ],
        funFact: 'Palladium can absorb large amounts of hydrogen compared with its own volume.',
      },
    
      silver: {
        symbol: 'Ag',
        atomicNumber: 47,
        shortFact: 'The best electrical conductor of all metals.',
        overview:
          'Silver is a shiny precious metal known for its beauty and extremely high electrical conductivity. It is used in jewelry, electronics, and solar technology.',
        uses: [
          'Jewelry',
          'Electronics',
          'Solar panels',
        ],
        funFact: 'Silver conducts electricity better than copper or gold.',
      },
    
      cadmium: {
        symbol: 'Cd',
        atomicNumber: 48,
        shortFact: 'A toxic metal used in batteries and coatings.',
        overview:
          'Cadmium is a soft bluish metal that is toxic to living things. It has been used in rechargeable batteries, pigments, and corrosion-resistant coatings.',
        uses: [
          'Rechargeable batteries',
          'Pigments',
          'Metal coatings',
        ],
        funFact: 'Cadmium yellow became a famous pigment in paints and art materials.',
      },
    
      indium: {
        symbol: 'In',
        atomicNumber: 49,
        shortFact: 'A soft metal used in touchscreens and displays.',
        overview:
          'Indium is a very soft post-transition metal that is important in modern display technology. It is used in compounds that help screens respond to touch and display clear images.',
        uses: [
          'Touchscreens',
          'LCDs',
          'Semiconductors',
        ],
        funFact: 'Indium is soft enough that it can be cut with a knife.',
      },
    
      tin: {
        symbol: 'Sn',
        atomicNumber: 50,
        shortFact: 'A useful metal often used to coat other metals.',
        overview:
          'Tin is a soft, silvery metal that resists corrosion. It has long been used to coat steel in cans and to make alloys such as bronze and solder.',
        uses: [
          'Cans',
          'Solder',
          'Alloys',
        ],
        funFact: 'The chemical symbol Sn comes from the Latin word stannum.',
      },
    
      antimony: {
        symbol: 'Sb',
        atomicNumber: 51,
        shortFact: 'A brittle metalloid used in flame retardants.',
        overview:
          'Antimony is a shiny, brittle metalloid that is used in alloys, electronics, and flame-resistant materials. It has been known since ancient times.',
        uses: [
          'Flame retardants',
          'Alloys',
          'Electronics',
        ],
        funFact: 'Its symbol Sb comes from the Latin name stibium.',
      },
    
      tellurium: {
        symbol: 'Te',
        atomicNumber: 52,
        shortFact: 'A rare metalloid used in solar technology.',
        overview:
          'Tellurium is a brittle metalloid used in some solar panels and metal alloys. It is relatively rare and has properties that make it useful in electronics.',
        uses: [
          'Solar panels',
          'Alloys',
          'Electronics',
        ],
        funFact: 'Tellurium is named after the Latin word for Earth.',
      },
    
      iodine: {
        symbol: 'I',
        atomicNumber: 53,
        shortFact: 'An essential element for thyroid health.',
        overview:
          'Iodine is a nonmetal that is important for the human body because it helps the thyroid gland function properly. It is also used in medicine and sanitation.',
        uses: [
          'Medicine',
          'Disinfectants',
          'Nutrition',
        ],
        funFact: 'Iodine can form a deep purple vapor when heated.',
      },
    
      xenon: {
        symbol: 'Xe',
        atomicNumber: 54,
        shortFact: 'A noble gas used in powerful lamps and flashes.',
        overview:
          'Xenon is a heavy noble gas that is chemically unreactive under normal conditions. It is used in high-intensity lamps, flashes, and some medical applications.',
        uses: [
          'Flash lamps',
          'Headlights',
          'Medical imaging',
        ],
        funFact: 'Xenon is used in some very bright car headlights.',
      },
    
      cesium: {
        symbol: 'Cs',
        atomicNumber: 55,
        shortFact: 'A reactive metal crucial to atomic clocks.',
        overview:
          'Cesium is a soft, gold-colored alkali metal that reacts quickly with water. It is famous for its role in atomic clocks, which keep extremely precise time.',
        uses: [
          'Atomic clocks',
          'Research',
          'Electronics',
        ],
        funFact: 'The official definition of a second is based on cesium atom vibrations.',
      },
    
      barium: {
        symbol: 'Ba',
        atomicNumber: 56,
        shortFact: 'A metal whose compounds are used in medical imaging.',
        overview:
          'Barium is a reactive alkaline earth metal. Some of its compounds are used in X-ray imaging, and others are used in drilling fluids and pyrotechnics.',
        uses: [
          'Medical imaging',
          'Drilling fluids',
          'Fireworks',
        ],
        funFact: 'Barium sulfate is used in medical scans because it helps block X-rays.',
      },
    
      lanthanum: {
        symbol: 'La',
        atomicNumber: 57,
        shortFact: 'A rare earth metal used in lenses and batteries.',
        overview:
          'Lanthanum is a soft, silvery rare earth metal used in optical glass, batteries, and catalysts. It is the first element in the lanthanide series.',
        uses: [
          'Camera lenses',
          'Batteries',
          'Catalysts',
        ],
        funFact: 'Lanthanum compounds help make some camera lenses clearer and more precise.',
      },
    
      cerium: {
        symbol: 'Ce',
        atomicNumber: 58,
        shortFact: 'A rare earth metal used in catalysts and polishing.',
        overview:
          'Cerium is a soft rare earth metal commonly used in catalytic converters, polishing powders, and lighter flints. It is one of the more abundant rare earth elements.',
        uses: [
          'Catalytic converters',
          'Glass polishing',
          'Lighter flints',
        ],
        funFact: 'Cerium oxide is widely used to polish glass to a very smooth finish.',
      },
    
      praseodymium: {
        symbol: 'Pr',
        atomicNumber: 59,
        shortFact: 'A rare earth metal used in magnets and glass coloring.',
        overview:
          'Praseodymium is a soft, silvery rare earth element used in powerful magnets, aircraft alloys, and colored glass. It has important magnetic and optical properties.',
        uses: [
          'Magnets',
          'Aircraft alloys',
          'Colored glass',
        ],
        funFact: 'Praseodymium compounds can give glass a yellow-green color.',
      },
    
      neodymium: {
        symbol: 'Nd',
        atomicNumber: 60,
        shortFact: 'Used to make some of the strongest magnets in the world.',
        overview:
          'Neodymium is a rare earth metal best known for its role in neodymium magnets, which are extremely powerful and useful in many modern technologies.',
        uses: [
          'Magnets',
          'Headphones',
          'Electric motors',
        ],
        funFact: 'Neodymium magnets are strong enough to power many headphones, speakers, and electric vehicles.',
      },
      promethium: {
        symbol: 'Pm',
        atomicNumber: 61,
        shortFact: 'A rare radioactive element with no stable isotopes.',
        overview:
          'Promethium is a radioactive rare earth element that is not found naturally in significant amounts on Earth. It is mainly produced in nuclear reactors and used in specialized applications.',
        uses: [
          'Nuclear batteries',
          'Research',
          'Luminous paint',
        ],
        funFact: 'Promethium is named after Prometheus, the mythological figure who gave fire to humans.',
      },
    
      samarium: {
        symbol: 'Sm',
        atomicNumber: 62,
        shortFact: 'A rare earth element used in powerful magnets.',
        overview:
          'Samarium is a silvery metal used in samarium-cobalt magnets, which remain strong even at high temperatures.',
        uses: [
          'Magnets',
          'Nuclear reactors',
          'Electronics',
        ],
        funFact: 'Samarium magnets are often used in aerospace applications.',
      },
    
      europium: {
        symbol: 'Eu',
        atomicNumber: 63,
        shortFact: 'Used to produce red and blue colors in displays.',
        overview:
          'Europium is a rare earth metal used in phosphors for TVs and LED screens. It plays a key role in display technology.',
        uses: [
          'TV screens',
          'LED lighting',
          'Fluorescent lamps',
        ],
        funFact: 'Europium helps create the red color in many digital displays.',
      },
    
      gadolinium: {
        symbol: 'Gd',
        atomicNumber: 64,
        shortFact: 'Used in MRI scans.',
        overview:
          'Gadolinium is a rare earth metal with strong magnetic properties. It is used in medical imaging to enhance MRI scans.',
        uses: [
          'MRI contrast agents',
          'Magnets',
          'Nuclear reactors',
        ],
        funFact: 'Gadolinium is highly effective at improving MRI image clarity.',
      },
    
      terbium: {
        symbol: 'Tb',
        atomicNumber: 65,
        shortFact: 'Used in green phosphors.',
        overview:
          'Terbium is a rare earth element used in lighting and display technologies. It helps produce green colors in screens.',
        uses: [
          'Displays',
          'Lighting',
          'Electronics',
        ],
        funFact: 'Terbium compounds glow bright green under certain conditions.',
      },
    
      dysprosium: {
        symbol: 'Dy',
        atomicNumber: 66,
        shortFact: 'Improves heat resistance in magnets.',
        overview:
          'Dysprosium is used in high-performance magnets that must operate in extreme heat, such as in electric vehicles and wind turbines.',
        uses: [
          'Magnets',
          'Electric vehicles',
          'Wind turbines',
        ],
        funFact: 'Dysprosium helps magnets stay strong even at high temperatures.',
      },
    
      holmium: {
        symbol: 'Ho',
        atomicNumber: 67,
        shortFact: 'Has one of the strongest magnetic properties.',
        overview:
          'Holmium is a rare earth metal with extremely high magnetic strength. It is used in specialized magnets and lasers.',
        uses: [
          'Magnets',
          'Lasers',
          'Nuclear control rods',
        ],
        funFact: 'Holmium has the highest magnetic moment of any element.',
      },
    
      erbium: {
        symbol: 'Er',
        atomicNumber: 68,
        shortFact: 'Used in fiber optic communication.',
        overview:
          'Erbium is a rare earth element used to amplify signals in fiber optic cables, making long-distance communication possible.',
        uses: [
          'Fiber optics',
          'Lasers',
          'Alloys',
        ],
        funFact: 'Erbium helps carry internet signals across oceans.',
      },
    
      thulium: {
        symbol: 'Tm',
        atomicNumber: 69,
        shortFact: 'One of the rarest rare earth elements.',
        overview:
          'Thulium is a soft metal that is rarely found and mainly used in portable X-ray machines and lasers.',
        uses: [
          'Portable X-rays',
          'Lasers',
          'Research',
        ],
        funFact: 'Thulium is the least abundant rare earth element.',
      },
    
      ytterbium: {
        symbol: 'Yb',
        atomicNumber: 70,
        shortFact: 'Used in lasers and atomic clocks.',
        overview:
          'Ytterbium is a soft metal used in laser technology and precision timekeeping systems.',
        uses: [
          'Lasers',
          'Atomic clocks',
          'Alloys',
        ],
        funFact: 'Ytterbium is named after the same village as yttrium.',
      },
    
      lutetium: {
        symbol: 'Lu',
        atomicNumber: 71,
        shortFact: 'A dense rare earth element used in medical imaging.',
        overview:
          'Lutetium is the last element in the lanthanide series and is used in PET scan detectors and research.',
        uses: [
          'Medical imaging',
          'Research',
          'Catalysts',
        ],
        funFact: 'Lutetium is one of the most expensive rare earth elements.',
      },
    
      hafnium: {
        symbol: 'Hf',
        atomicNumber: 72,
        shortFact: 'Used in nuclear control rods.',
        overview:
          'Hafnium is a metal that absorbs neutrons effectively, making it useful in nuclear reactors.',
        uses: [
          'Nuclear reactors',
          'Alloys',
          'Electronics',
        ],
        funFact: 'Hafnium is often found together with zirconium.',
      },
    
      tantalum: {
        symbol: 'Ta',
        atomicNumber: 73,
        shortFact: 'Highly resistant to corrosion.',
        overview:
          'Tantalum is a durable metal used in electronics and surgical implants due to its resistance to corrosion.',
        uses: [
          'Electronics',
          'Medical implants',
          'Capacitors',
        ],
        funFact: 'Tantalum can withstand body fluids without reacting.',
      },
    
      tungsten: {
        symbol: 'W',
        atomicNumber: 74,
        shortFact: 'Has the highest melting point of any metal.',
        overview:
          'Tungsten is an extremely heat-resistant metal used in light bulb filaments and high-temperature applications.',
        uses: [
          'Light bulbs',
          'Machinery',
          'Alloys',
        ],
        funFact: 'Tungsten can withstand temperatures over 3400°C.',
      },
    
      rhenium: {
        symbol: 'Re',
        atomicNumber: 75,
        shortFact: 'Used in jet engines.',
        overview:
          'Rhenium is a rare metal used in high-temperature superalloys, especially in jet engines.',
        uses: [
          'Jet engines',
          'Alloys',
          'Catalysts',
        ],
        funFact: 'Rhenium is one of the rarest elements in Earth’s crust.',
      },
    
      osmium: {
        symbol: 'Os',
        atomicNumber: 76,
        shortFact: 'One of the densest elements.',
        overview:
          'Osmium is a dense, hard metal used in specialized alloys and instruments.',
        uses: [
          'Alloys',
          'Scientific instruments',
        ],
        funFact: 'Osmium is so dense that a small cube would feel extremely heavy.',
      },
    
      iridium: {
        symbol: 'Ir',
        atomicNumber: 77,
        shortFact: 'Extremely corrosion-resistant.',
        overview:
          'Iridium is one of the most corrosion-resistant elements and is used in high-temperature equipment.',
        uses: [
          'Electronics',
          'Crucibles',
          'Spark plugs',
        ],
        funFact: 'Iridium is often found in meteorites.',
      },
    
      platinum: {
        symbol: 'Pt',
        atomicNumber: 78,
        shortFact: 'A valuable precious metal.',
        overview:
          'Platinum is a dense, corrosion-resistant metal used in jewelry and catalytic converters.',
        uses: [
          'Jewelry',
          'Catalytic converters',
          'Electronics',
        ],
        funFact: 'Platinum is rarer than gold.',
      },
    
      gold: {
        symbol: 'Au',
        atomicNumber: 79,
        shortFact: 'A highly valued, non-reactive metal.',
        overview:
          'Gold is a soft, shiny metal that does not tarnish, making it ideal for jewelry and electronics.',
        uses: [
          'Jewelry',
          'Electronics',
          'Currency',
        ],
        funFact: 'Gold can be stretched into extremely thin sheets.',
      },
    
      mercury: {
        symbol: 'Hg',
        atomicNumber: 80,
        shortFact: 'A liquid metal at room temperature.',
        overview:
          'Mercury is a dense metal that remains liquid at room temperature and has been used in thermometers and scientific instruments.',
        uses: [
          'Thermometers',
          'Scientific instruments',
        ],
        funFact: 'Mercury is highly toxic to humans.',
      },
    
      thallium: {
        symbol: 'Tl',
        atomicNumber: 81,
        shortFact: 'A highly toxic metal.',
        overview:
          'Thallium is a soft metal that is extremely toxic and has been used in electronics and historically in poisons.',
        uses: [
          'Electronics',
          'Research',
        ],
        funFact: 'Thallium poisoning can cause hair loss.',
      },
    
      lead: {
        symbol: 'Pb',
        atomicNumber: 82,
        shortFact: 'A heavy metal used in batteries.',
        overview:
          'Lead is a dense metal used in batteries and shielding, but it is toxic and harmful to health.',
        uses: [
          'Batteries',
          'Radiation shielding',
        ],
        funFact: 'Lead blocks radiation effectively.',
      },
    
      bismuth: {
        symbol: 'Bi',
        atomicNumber: 83,
        shortFact: 'A low-toxicity heavy metal.',
        overview:
          'Bismuth is a brittle metal used in cosmetics, medicines, and alloys.',
        uses: [
          'Medicine',
          'Cosmetics',
          'Alloys',
        ],
        funFact: 'Bismuth crystals can form colorful geometric shapes.',
      },
    
      polonium: {
        symbol: 'Po',
        atomicNumber: 84,
        shortFact: 'A highly radioactive element.',
        overview:
          'Polonium is a rare radioactive metal discovered by Marie Curie and is extremely dangerous.',
        uses: [
          'Research',
        ],
        funFact: 'Even tiny amounts of polonium can be deadly.',
      },
    
      astatine: {
        symbol: 'At',
        atomicNumber: 85,
        shortFact: 'One of the rarest elements on Earth.',
        overview:
          'Astatine is a highly radioactive element that exists only in trace amounts.',
        uses: [
          'Research',
        ],
        funFact: 'There may be less than a gram of astatine on Earth at any time.',
      },
    
      radon: {
        symbol: 'Rn',
        atomicNumber: 86,
        shortFact: 'A radioactive noble gas.',
        overview:
          'Radon is a colorless gas that forms naturally from radioactive decay and can accumulate in buildings.',
        uses: [
          'Research',
        ],
        funFact: 'Radon exposure is a leading cause of lung cancer after smoking.',
      },
    
      francium: {
        symbol: 'Fr',
        atomicNumber: 87,
        shortFact: 'One of the rarest elements.',
        overview:
          'Francium is an extremely unstable radioactive metal that exists only briefly.',
        uses: [
          'Research',
        ],
        funFact: 'Only a tiny amount of francium exists on Earth at any time.',
      },
    
      radium: {
        symbol: 'Ra',
        atomicNumber: 88,
        shortFact: 'A highly radioactive metal.',
        overview:
          'Radium is a radioactive metal once used in glowing paints before its dangers were understood.',
        uses: [
          'Research',
        ],
        funFact: 'Radium glows faintly in the dark.',
      },
    
      actinium: {
        symbol: 'Ac',
        atomicNumber: 89,
        shortFact: 'A radioactive element that glows.',
        overview:
          'Actinium is a soft radioactive metal that emits a faint blue glow due to its radioactivity.',
        uses: [
          'Research',
          'Cancer treatment',
        ],
        funFact: 'Actinium glows because it ionizes the air around it.',
      },
    
      thorium: {
        symbol: 'Th',
        atomicNumber: 90,
        shortFact: 'A potential nuclear fuel.',
        overview:
          'Thorium is a radioactive metal that may be used as a safer alternative to uranium in nuclear reactors.',
        uses: [
          'Nuclear fuel',
          'Alloys',
        ],
        funFact: 'Thorium is more abundant than uranium.',
      },
      protactinium: {
        symbol: 'Pa',
        atomicNumber: 91,
        shortFact: 'A rare and highly radioactive element.',
        overview:
          'Protactinium is a dense, radioactive metal found in uranium ores in extremely small amounts. It is mainly used for scientific research.',
        uses: [
          'Research',
        ],
        funFact: 'Protactinium is one of the rarest naturally occurring elements.',
      },
    
      uranium: {
        symbol: 'U',
        atomicNumber: 92,
        shortFact: 'Used as fuel in nuclear power.',
        overview:
          'Uranium is a heavy radioactive metal used in nuclear reactors and weapons. It can release large amounts of energy through nuclear fission.',
        uses: [
          'Nuclear power',
          'Weapons',
          'Research',
        ],
        funFact: 'Uranium was the first element used to discover radioactivity.',
      },
    
      neptunium: {
        symbol: 'Np',
        atomicNumber: 93,
        shortFact: 'A radioactive element produced in reactors.',
        overview:
          'Neptunium is a synthetic radioactive element formed during nuclear reactions. It is used mainly in research.',
        uses: [
          'Research',
        ],
        funFact: 'Neptunium is named after the planet Neptune.',
      },
    
      plutonium: {
        symbol: 'Pu',
        atomicNumber: 94,
        shortFact: 'Used in nuclear weapons and reactors.',
        overview:
          'Plutonium is a highly radioactive element used in nuclear weapons and power generation. It is one of the most dangerous elements.',
        uses: [
          'Nuclear reactors',
          'Weapons',
        ],
        funFact: 'Plutonium can generate heat as it decays.',
      },
    
      americium: {
        symbol: 'Am',
        atomicNumber: 95,
        shortFact: 'Used in smoke detectors.',
        overview:
          'Americium is a radioactive metal commonly used in household smoke detectors to detect smoke particles.',
        uses: [
          'Smoke detectors',
          'Research',
        ],
        funFact: 'Most home smoke detectors contain a tiny amount of americium.',
      },
    
      curium: {
        symbol: 'Cm',
        atomicNumber: 96,
        shortFact: 'A radioactive element used in research.',
        overview:
          'Curium is a heavy radioactive element used in scientific research and in producing other elements.',
        uses: [
          'Research',
        ],
        funFact: 'Curium is named after Marie and Pierre Curie.',
      },
    
      berkelium: {
        symbol: 'Bk',
        atomicNumber: 97,
        shortFact: 'A synthetic element used in research.',
        overview:
          'Berkelium is a radioactive element produced in laboratories. It has no commercial use and is mainly used for scientific study.',
        uses: [
          'Research',
        ],
        funFact: 'Berkelium is named after Berkeley, California.',
      },
    
      californium: {
        symbol: 'Cf',
        atomicNumber: 98,
        shortFact: 'A powerful neutron emitter.',
        overview:
          'Californium is a radioactive element that emits neutrons, making it useful in nuclear reactors and certain medical applications.',
        uses: [
          'Neutron sources',
          'Medical treatment',
          'Research',
        ],
        funFact: 'Californium can help detect gold and oil deposits.',
      },
    
      einsteinium: {
        symbol: 'Es',
        atomicNumber: 99,
        shortFact: 'A synthetic radioactive element.',
        overview:
          'Einsteinium is produced in nuclear explosions and reactors. It is extremely rare and used only for research.',
        uses: [
          'Research',
        ],
        funFact: 'Einsteinium is named after Albert Einstein.',
      },
    
      fermium: {
        symbol: 'Fm',
        atomicNumber: 100,
        shortFact: 'A lab-made radioactive element.',
        overview:
          'Fermium is a synthetic element produced in nuclear reactions and studied for its properties.',
        uses: [
          'Research',
        ],
        funFact: 'Fermium was discovered in the debris of a hydrogen bomb test.',
      },
    
      mendelevium: {
        symbol: 'Md',
        atomicNumber: 101,
        shortFact: 'A synthetic element named after a scientist.',
        overview:
          'Mendelevium is a radioactive element created in labs and studied for nuclear chemistry.',
        uses: [
          'Research',
        ],
        funFact: 'Named after Dmitri Mendeleev, creator of the periodic table.',
      },
    
      nobelium: {
        symbol: 'No',
        atomicNumber: 102,
        shortFact: 'A radioactive element with no practical use.',
        overview:
          'Nobelium is a synthetic element used only for research and understanding atomic structure.',
        uses: [
          'Research',
        ],
        funFact: 'Named after Alfred Nobel, inventor of dynamite.',
      },
    
      lawrencium: {
        symbol: 'Lr',
        atomicNumber: 103,
        shortFact: 'The final actinide element.',
        overview:
          'Lawrencium is a synthetic radioactive element that marks the end of the actinide series.',
        uses: [
          'Research',
        ],
        funFact: 'Named after Ernest Lawrence, inventor of the cyclotron.',
      },
    
      rutherfordium: {
        symbol: 'Rf',
        atomicNumber: 104,
        shortFact: 'A synthetic heavy element.',
        overview:
          'Rutherfordium is a lab-created element with no stable isotopes and is used for research.',
        uses: [
          'Research',
        ],
        funFact: 'Named after physicist Ernest Rutherford.',
      },
    
      dubnium: {
        symbol: 'Db',
        atomicNumber: 105,
        shortFact: 'A short-lived synthetic element.',
        overview:
          'Dubnium is a radioactive element produced in particle accelerators.',
        uses: [
          'Research',
        ],
        funFact: 'Named after the city of Dubna in Russia.',
      },
    
      seaborgium: {
        symbol: 'Sg',
        atomicNumber: 106,
        shortFact: 'A lab-created element.',
        overview:
          'Seaborgium is a synthetic element studied for its chemical properties.',
        uses: [
          'Research',
        ],
        funFact: 'Named after scientist Glenn Seaborg.',
      },
    
      bohrium: {
        symbol: 'Bh',
        atomicNumber: 107,
        shortFact: 'A highly unstable synthetic element.',
        overview:
          'Bohrium is created in labs and exists only for a very short time.',
        uses: [
          'Research',
        ],
        funFact: 'Named after physicist Niels Bohr.',
      },
    
      hassium: {
        symbol: 'Hs',
        atomicNumber: 108,
        shortFact: 'A very heavy synthetic element.',
        overview:
          'Hassium is produced in particle accelerators and is highly radioactive.',
        uses: [
          'Research',
        ],
        funFact: 'Named after the German state of Hesse.',
      },
    
      meitnerium: {
        symbol: 'Mt',
        atomicNumber: 109,
        shortFact: 'A synthetic element with very short lifespan.',
        overview:
          'Meitnerium is a man-made element that decays quickly and is studied in laboratories.',
        uses: [
          'Research',
        ],
        funFact: 'Named after physicist Lise Meitner.',
      },
    
      darmstadtium: {
        symbol: 'Ds',
        atomicNumber: 110,
        shortFact: 'A synthetic element discovered in Germany.',
        overview:
          'Darmstadtium is produced in particle accelerators and is highly unstable.',
        uses: [
          'Research',
        ],
        funFact: 'Named after Darmstadt, Germany.',
      },
    
      roentgenium: {
        symbol: 'Rg',
        atomicNumber: 111,
        shortFact: 'A heavy synthetic element.',
        overview:
          'Roentgenium is a lab-created element that exists for only a short time.',
        uses: [
          'Research',
        ],
        funFact: 'Named after Wilhelm Röntgen, discoverer of X-rays.',
      },
    
      copernicium: {
        symbol: 'Cn',
        atomicNumber: 112,
        shortFact: 'A very heavy metal created in labs.',
        overview:
          'Copernicium is a synthetic element that is highly unstable and studied in research.',
        uses: [
          'Research',
        ],
        funFact: 'Named after astronomer Nicolaus Copernicus.',
      },
    
      nihonium: {
        symbol: 'Nh',
        atomicNumber: 113,
        shortFact: 'The first element discovered in Japan.',
        overview:
          'Nihonium is a synthetic element created in laboratories and studied for its properties.',
        uses: [
          'Research',
        ],
        funFact: 'Its name means “Japan” in Japanese.',
      },
    
      flerovium: {
        symbol: 'Fl',
        atomicNumber: 114,
        shortFact: 'A synthetic superheavy element.',
        overview:
          'Flerovium is an extremely unstable element produced in particle accelerators.',
        uses: [
          'Research',
        ],
        funFact: 'Named after the Flerov Laboratory of Nuclear Reactions.',
      },
    
      moscovium: {
        symbol: 'Mc',
        atomicNumber: 115,
        shortFact: 'A synthetic element with very short lifespan.',
        overview:
          'Moscovium is created in labs and decays almost instantly.',
        uses: [
          'Research',
        ],
        funFact: 'Named after the Moscow region.',
      },
    
      livermorium: {
        symbol: 'Lv',
        atomicNumber: 116,
        shortFact: 'A heavy synthetic element.',
        overview:
          'Livermorium is produced in particle accelerators and is highly unstable.',
        uses: [
          'Research',
        ],
        funFact: 'Named after Livermore National Laboratory.',
      },
    
      tennessine: {
        symbol: 'Ts',
        atomicNumber: 117,
        shortFact: 'A rare synthetic element.',
        overview:
          'Tennessine is a highly unstable element created in laboratories.',
        uses: [
          'Research',
        ],
        funFact: 'Named after the state of Tennessee.',
      },
    
      oganesson: {
        symbol: 'Og',
        atomicNumber: 118,
        shortFact: 'The heaviest known element.',
        overview:
          'Oganesson is a synthetic element with extremely short lifespan and unusual properties for a noble gas.',
        uses: [
          'Research',
        ],
        funFact: 'Oganesson may not behave like a typical noble gas.',
      },
  };
