import colomboImg from '../assets/one day trip/colombo.jpg';
import ellaImg from '../assets/one day trip/ella.jpg';
import galleImg from '../assets/one day trip/galle.jpg';
import hikkaduwaImg from '../assets/one day trip/hikkaduwa.jpg';
import kandyImg from '../assets/one day trip/kandy.jpg';
import mirissaImg from '../assets/one day trip/mirissa.jpg';
import nuwaraEliyaImg from '../assets/one day trip/nuwara eliya.jpg';
import sigiriyaImg from '../assets/one day trip/sigiriya.jpg';
import sinharajaImg from '../assets/one day trip/sinharaja.jpg';
import udawalawaImg from '../assets/one day trip/udawalawa.jpg';
import yalaImg from '../assets/one day trip/yala.jpg';

export const excursionCategories = [
  { id: 'one-day', label: 'One Day Trips' },
  { id: 'two-day', label: 'Two Day Trips' },
  { id: 'special', label: 'Special Trips' },
];

export const excursions = [
  // ── One-Day Trips ──────────────────────────────────────────────
  {
    id: 1,
    category: 'one-day',
    slug: 'udawalawa-safari',
    title: 'Udawalawa Safari',
    duration: '',
    fullDuration: 'Full Day (approx. 9 - 10 Hours)',
    departure: '05:30 AM from Bentota / Beruwala / Aluthgama',
    price: '',
    image: udawalawaImg,
    tag: 'Wildlife Safari',
    overview: 'Experience the untamed beauty of Udawalawe National Park, world-renowned for its thriving wild elephant herds. Located in the southern dry zone of Sri Lanka, this safari offers guaranteed sightings of elephants in their natural habitat, alongside water buffaloes, spotted deer, wild boars, crocodiles, and diverse endemic bird species.',
    highlights: [
      'Open-top 4x4 rugged Jeep safari through Udawalawe National Park',
      'Guaranteed close-up encounters with wild elephant herds & calves',
      'Visit to the Udawalawe Elephant Transit Home during feeding session',
      'Spot crocodiles, monitor lizards, water buffaloes, and endemic birds',
      'Panoramic scenic drive through lush southern countryside & reservoirs'
    ],
    included: [
      'Private air-conditioned vehicle with dedicated driver-guide',
      'Hotel pick-up and drop-off from Bentota and surrounding areas',
      'Private 4x4 safari jeep with tracker inside the park',
      'Fuel, highway tolls, and parking charges',
      'Complimentary bottled water'
    ],
    whatToBring: [
      'Comfortable lightweight cotton clothing',
      'Sun hat, sunglasses, and sunscreen',
      'Camera with zoom lens / binoculars',
      'Cash for national park entry tickets & personal lunch'
    ],
    itinerary: [
      { time: '05:30 AM', activity: 'Pick-up from your hotel in Bentota / surrounding coastal towns' },
      { time: '08:45 AM', activity: 'Arrive at Udawalawe & board your open-top 4x4 safari jeep' },
      { time: '09:00 AM', activity: '3-hour guided game drive tracking wild elephants and wildlife' },
      { time: '12:00 PM', activity: 'Visit the Udawalawe Elephant Transit Home for baby elephant feeding' },
      { time: '01:00 PM', activity: 'Traditional Sri Lankan rice and curry lunch at a local restaurant' },
      { time: '02:30 PM', activity: 'Relaxing return journey through the southern landscape' },
      { time: '05:30 PM', activity: 'Safe drop-off back at your hotel' }
    ]
  },
  {
    id: 2,
    category: 'one-day',
    slug: 'yala-safari',
    title: 'Yala Safari',
    duration: '',
    fullDuration: 'Full Day (approx. 11 - 12 Hours)',
    departure: '04:30 AM from Bentota / Beruwala',
    price: '',
    image: yalaImg,
    tag: 'Big Game Wildlife',
    overview: 'Journey to Yala National Park, Sri Lanka\'s premier wildlife sanctuary boasting one of the world\'s highest leopard densities. Traverse dense scrub jungle, brackish lagoons, and coastal plains aboard a rugged 4x4 safari jeep while tracking leopards, sloth bears, wild elephants, jackals, and majestic peacocks in their raw natural habitat.',
    highlights: [
      'Thrilling safari tracking the elusive Sri Lankan Leopard (Panthera pardus kotiya)',
      'Opportunity to spot sloth bears, wild elephants, crocodiles, and jackals',
      'Traverse stunning diverse ecosystems from coastal dunes to monsoon scrub',
      'Magnificent birdwatching around brackish lagoons & coastal wetlands',
      'Scenic southern coastal highway journey'
    ],
    included: [
      'Private air-conditioned car or van with experienced driver',
      'Hotel pick-up & drop-off anywhere in Bentota area',
      'Private open-top 4x4 Safari Jeep at Yala National Park',
      'Fuel, highway tolls, and parking fees',
      'Bottled drinking water throughout the day'
    ],
    whatToBring: [
      'Neutral-toned safari clothing (khaki, olive, light brown)',
      'Binoculars and high-zoom camera',
      'Sunscreen, hat, and sunglasses',
      'Cash for park entrance permits and lunch'
    ],
    itinerary: [
      { time: '04:30 AM', activity: 'Early morning hotel pick-up from Bentota / coastal resort' },
      { time: '08:30 AM', activity: 'Reach Yala gate and meet your expert 4x4 safari jeep driver' },
      { time: '09:00 AM', activity: 'Extensive wildlife tracking for leopards, elephants & bears' },
      { time: '01:00 PM', activity: 'Lunch break at a scenic spot or local safari lodge' },
      { time: '02:30 PM', activity: 'Scenic coastal drive back along the southern expressway' },
      { time: '05:30 PM', activity: 'Arrival back at your hotel in Bentota' }
    ]
  },
  {
    id: 3,
    category: 'one-day',
    slug: 'sinharaja-rain-forest',
    title: 'Sinharaja Rain Forest',
    duration: '',
    fullDuration: 'Full Day (approx. 8 - 9 Hours)',
    departure: '06:00 AM from Bentota',
    price: '',
    image: sinharajaImg,
    tag: 'UNESCO Biosphere Reserve',
    overview: 'Immerse yourself in the prehistoric wonder of Sinharaja Forest Reserve, a UNESCO World Heritage Site and Sri Lanka\'s last viable primary tropical rainforest. Guided by an experienced local naturalist, trek beneath towering emerald canopies, discover rare medicinal plants, and encounter vibrant endemic wildlife including the Sri Lanka Blue Magpie and purple-faced langur.',
    highlights: [
      'Guided trek inside a pristine UNESCO World Heritage virgin rainforest',
      'Encounter rare endemic bird species, reptiles, butterflies, and amphibians',
      'Marvel at towering tropical trees, wild orchids, and medicinal flora',
      'Take a refreshing swim in crystal-clear natural jungle stream pools & waterfalls',
      'Learn about deep tropical ecology from a certified local naturalist'
    ],
    included: [
      'Private air-conditioned transportation from your hotel',
      'Certified English-speaking rainforest tracker & naturalist guide',
      'Leech protection socks for safe, comfortable hiking',
      'All fuel, expressway tolls, and entry assistance',
      'Chilled bottled water and tropical fresh fruit refreshments'
    ],
    whatToBring: [
      'Comfortable hiking shoes or trainers with good grip',
      'Light breathable cotton clothing with long pants',
      'Swimwear and small towel for the waterfall dip',
      'Rain jacket or poncho (showers are common in the rainforest)',
      'Insect repellent'
    ],
    itinerary: [
      { time: '06:00 AM', activity: 'Departure from Bentota through scenic rubber and tea estates' },
      { time: '08:30 AM', activity: 'Arrive at Sinharaja Reserve entrance & meet certified naturalist' },
      { time: '09:00 AM', activity: 'Begin 3.5 to 4-hour guided trek exploring deep forest canopy' },
      { time: '11:30 AM', activity: 'Stop at secluded jungle waterfall for rest and refreshing swim' },
      { time: '01:00 PM', activity: 'Authentic village-style Sri Lankan buffet lunch overlooking the forest' },
      { time: '02:30 PM', activity: 'Return drive through rural hill country villages' },
      { time: '05:00 PM', activity: 'Arrive safely back at your hotel in Bentota' }
    ]
  },
  {
    id: 4,
    category: 'one-day',
    slug: 'galle',
    title: 'Galle',
    duration: '',
    fullDuration: 'Full Day (approx. 6 - 7 Hours)',
    departure: '08:30 AM from Bentota',
    price: '',
    image: galleImg,
    tag: 'UNESCO Heritage & Coast',
    overview: 'Step back in time within the grand ramparts of Galle Dutch Fort, a living 17th-century UNESCO World Heritage monument. Stroll along cobblestone pathways lined with colonial Dutch and Portuguese architecture, boutique cafes, artisan jewelers, and the iconic Galle Lighthouse overlooking the azure Indian Ocean.',
    highlights: [
      'Walk along the historic 17th-century ramparts and ocean-facing bastions',
      'Visit the iconic 1939 Galle Lighthouse and Dutch Reformed Church',
      'Explore charming boutique streets, artisan gem shops, and colonial cafes',
      'See traditional stilt fishermen balancing over ocean waves at Koggala',
      'Visit a Sea Turtle Conservation Project and herbal spice garden'
    ],
    included: [
      'Private luxury AC car or minivan with English-speaking chauffeur',
      'Door-to-door hotel pick-up and drop-off',
      'Guided walking tour through Galle Fort\'s key historical sites',
      'All highway tolls, fuel, and parking fees',
      'Cold bottled water'
    ],
    whatToBring: [
      'Comfortable walking shoes or sandals',
      'Camera, sun hat, and sunglasses',
      'Modest attire covering knees and shoulders for temple/church visits',
      'Spending money for shopping and dining'
    ],
    itinerary: [
      { time: '08:30 AM', activity: 'Pick-up from your hotel in Bentota' },
      { time: '09:15 AM', activity: 'Visit a Sea Turtle Hatchery & Conservation Centre' },
      { time: '10:30 AM', activity: 'Arrive at Galle Dutch Fort for a guided walking heritage tour' },
      { time: '12:30 PM', activity: 'Leisurely lunch at a historic fort courtyard restaurant' },
      { time: '01:45 PM', activity: 'Free time for artisan shopping and photos by the lighthouse' },
      { time: '03:00 PM', activity: 'Stop to witness traditional stilt fishermen along the coast' },
      { time: '04:30 PM', activity: 'Comfortable return drop-off at your hotel' }
    ]
  },
  {
    id: 5,
    category: 'one-day',
    slug: 'hikkaduwa',
    title: 'Hikkaduwa',
    duration: '',
    fullDuration: 'Half Day to Full Day (approx. 5 - 6 Hours)',
    departure: '08:30 AM from Bentota',
    price: '',
    image: hikkaduwaImg,
    tag: 'Beaches & Coral Reef',
    overview: 'Discover the lively coastal paradise of Hikkaduwa, celebrated for its golden beaches, vibrant coral reefs, and gentle giant sea turtles. Wade into the crystal-clear ocean shallows to hand-feed wild sea turtles, take an optional glass-bottom boat tour across the Marine National Park, or explore local surf breaks and vibrant beachside cafes.',
    highlights: [
      'Encounter wild giant sea turtles swimming right up to the shore',
      'Optional glass-bottom boat cruise over vibrant coral reef gardens',
      'Visit the Tsunami Memorial & Community Photo Museum at Telwatta',
      'Explore vibrant local surf shops, beach cafes, and souvenir stalls',
      'Relax on the sun-kissed golden sands of Hikkaduwa Beach'
    ],
    included: [
      'Private air-conditioned transport with dedicated driver',
      'Pick-up and return transfer to your hotel in Bentota',
      'Assistance with sea turtle viewing on the beach',
      'Highway tolls and fuel',
      'Chilled mineral water'
    ],
    whatToBring: [
      'Swimwear, beach towel, and change of clothes',
      'Sun protection (biodegradable sunscreen, hat, sunglasses)',
      'Waterproof phone pouch or underwater camera',
      'Cash for boat rides, snacks, or souvenirs'
    ],
    itinerary: [
      { time: '08:30 AM', activity: 'Depart from your Bentota accommodation' },
      { time: '09:15 AM', activity: 'Visit the Tsunami Photo Museum & towering Buddha statue' },
      { time: '10:00 AM', activity: 'Arrive at Hikkaduwa Beach and encounter giant green sea turtles' },
      { time: '11:00 AM', activity: 'Optional glass-bottom boat coral reef tour or snorkeling' },
      { time: '12:30 PM', activity: 'Relaxing lunch and fresh tropical juices at a beachside cafe' },
      { time: '02:00 PM', activity: 'Return drive back to Bentota' }
    ]
  },
  {
    id: 6,
    category: 'one-day',
    slug: 'mirissa-whale-watching',
    title: 'Mirissa (Whale Watching)',
    duration: '',
    fullDuration: 'Full Day (approx. 7 - 8 Hours)',
    departure: '05:00 AM from Bentota',
    price: '',
    image: mirissaImg,
    tag: 'Ocean Wildlife Safari',
    overview: 'Embark on an exhilarating ocean voyage into the deep waters off Mirissa, one of the best locations on earth to witness giant Blue Whales—the largest creatures to have ever lived on our planet. Watch in awe as these gentle ocean giants breach and surface alongside acrobatic pods of spinner dolphins.',
    highlights: [
      'Witness giant Blue Whales and Sperm Whales in their natural ocean migration route',
      'Watch playful pods of spinner dolphins jumping and riding boat bow waves',
      'Comfortable cruise with safety equipment, life jackets, and experienced crew',
      'Visit the iconic Coconut Tree Hill panoramic viewpoint overlooking Mirissa Bay',
      'Scenic coastal drive along southern Sri Lanka\'s picturesque beaches'
    ],
    included: [
      'Private air-conditioned car transfer from Bentota to Mirissa harbor and back',
      'Assistance at the harbor boarding point',
      'Highway tolls, fuel, and parking fees',
      'Bottled drinking water'
    ],
    whatToBring: [
      'Motion sickness tablets (if sensitive to ocean swell)',
      'Camera with good zoom and strap',
      'Light jacket or windbreaker for morning sea breeze',
      'Sunscreen and sunglasses'
    ],
    itinerary: [
      { time: '05:00 AM', activity: 'Early morning departure from Bentota via Southern Expressway' },
      { time: '06:15 AM', activity: 'Arrive at Mirissa Harbor and board your licensed whale watching vessel' },
      { time: '06:45 AM', activity: 'Set sail into the Indian Ocean; 3 to 4-hour whale & dolphin search' },
      { time: '10:30 AM', activity: 'Return to harbor and proceed to Coconut Tree Hill for stunning photos' },
      { time: '12:00 PM', activity: 'Fresh seafood lunch at a beachside restaurant in Mirissa' },
      { time: '01:30 PM', activity: 'Comfortable return drive back to Bentota' }
    ]
  },
  {
    id: 7,
    category: 'one-day',
    slug: 'kandy',
    title: 'Kandy',
    duration: '',
    fullDuration: 'Full Day (approx. 10 - 12 Hours)',
    departure: '05:30 AM from Bentota',
    price: '',
    image: kandyImg,
    tag: 'Cultural Heritage Capital',
    overview: 'Journey to the sacred cultural capital of Sri Lanka, nestled amidst misty central highlands. Visit the venerable Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), explore the lush Peradeniya Royal Botanical Gardens featuring centuries-old giant palms and orchid houses, and witness breathtaking hill country landscapes.',
    highlights: [
      'Visit the revered Temple of the Tooth Relic (Sri Dalada Maligawa)',
      'Walk among 4,000+ plant species at Peradeniya Royal Botanical Gardens',
      'Scenic scenic drive through lush rubber, spice, and pineapple plantations',
      'Stop at a spice and herbal garden to learn about traditional Ayurvedic medicine',
      'View Kandy city panorama from Upper Lake Viewpoint'
    ],
    included: [
      'Private air-conditioned vehicle with English-speaking chauffeur-guide',
      'Hotel pick-up and return to Bentota',
      'All highway tolls, fuel, and parking fees',
      'Chilled bottled drinking water'
    ],
    whatToBring: [
      'Respectful temple attire (clothing covering shoulders and knees; white preferred)',
      'Comfortable walking shoes (shoes must be removed inside temple grounds)',
      'Camera and sun hat',
      'Cash for temple and garden entrance fees'
    ],
    itinerary: [
      { time: '05:30 AM', activity: 'Hotel pick-up from Bentota and head toward the central hills' },
      { time: '08:30 AM', activity: 'Visit a traditional Spice & Herbal Garden with herbal tea tasting' },
      { time: '10:00 AM', activity: 'Explore Peradeniya Royal Botanical Gardens and Orchid House' },
      { time: '12:30 PM', activity: 'Lunch overlooking the picturesque Mahaweli River or Kandy Lake' },
      { time: '01:45 PM', activity: 'Guided visit to the sacred Temple of the Tooth Relic' },
      { time: '03:15 PM', activity: 'Kandy Viewpoint and optional traditional gem / batik showcase' },
      { time: '04:00 PM', activity: 'Scenic return drive back to Bentota' }
    ]
  },
  {
    id: 8,
    category: 'one-day',
    slug: 'sigiriya',
    title: 'Sigiriya',
    duration: '',
    fullDuration: 'Full Day (approx. 12 - 13 Hours)',
    departure: '05:00 AM from Bentota',
    price: '',
    image: sigiriyaImg,
    tag: '8th Wonder of the World',
    overview: 'Ascend King Kashyapa\'s dramatic 5th-century "Lion Rock" fortress rising 200 meters above the central jungle plains. Marvel at ancient wall frescoes, the mirrored wall, and the colossal lion paws leading to the palace summit ruins with 360-degree panoramic vistas, paired with a visit to the nearby Dambulla Golden Rock Cave Temple.',
    highlights: [
      'Climb the UNESCO World Heritage Sigiriya Rock Citadel (Lion Rock)',
      'Admire the 1,500-year-old painted frescoes and ancient mirror wall graffiti',
      'Walk through the world\'s oldest symmetrically landscaped royal water gardens',
      'Visit Dambulla Cave Temple complex with over 150 golden Buddha statues',
      'Breathtaking 360-degree panoramic jungle vistas from the fortress summit'
    ],
    included: [
      'Private air-conditioned car or van with expert English-speaking driver',
      'Direct hotel pick-up and drop-off in Bentota',
      'All toll fees, fuel charges, and parking fees',
      'Chilled bottled water provided throughout the day'
    ],
    whatToBring: [
      'Sturdy walking shoes or sneakers with good grip for climbing steps',
      'Lightweight, breathable clothing and sun hat',
      'Temple-appropriate attire covering knees and shoulders for Dambulla',
      'Plenty of sunscreen and camera with extra battery'
    ],
    itinerary: [
      { time: '05:00 AM', activity: 'Early morning pick-up from Bentota hotel' },
      { time: '09:00 AM', activity: 'Arrive at Sigiriya and begin ascent before midday heat' },
      { time: '11:30 AM', activity: 'Descend through the boulder and water gardens' },
      { time: '12:30 PM', activity: 'Authentic Sri Lankan buffet lunch at an open-air village restaurant' },
      { time: '02:00 PM', activity: 'Visit the ancient Dambulla Golden Rock Cave Temple complex' },
      { time: '03:30 PM', activity: 'Relaxing return drive through central Sri Lanka' },
      { time: '07:30 PM', activity: 'Safe arrival back at your Bentota hotel' }
    ]
  },
  {
    id: 9,
    category: 'one-day',
    slug: 'nuwara-eliya',
    title: 'Nuwara Eliya',
    duration: '',
    fullDuration: 'Full Day (approx. 11 - 13 Hours)',
    departure: '05:00 AM from Bentota',
    price: '',
    image: nuwaraEliyaImg,
    tag: 'Little England & Tea Country',
    overview: 'Ascend into Sri Lanka\'s "Little England", renowned for its crisp cool climate, emerald rolling tea valleys, colonial-era architecture, and roaring waterfalls. Tour an authentic working tea plantation and factory, sample pure Ceylon tea, stroll through Victoria Park, and admire colonial landmarks around Gregory Lake.',
    highlights: [
      'Tour a historic working Ceylon Tea plantation & factory with tea tasting',
      'Marvel at cascading waterfalls including St. Clair\'s and Devon Falls',
      'Admire British colonial architecture including the 1894 Post Office',
      'Scenic walk along picturesque Gregory Lake and Queen Victoria Park',
      'Breathtaking mountain passes through misty highland valleys'
    ],
    included: [
      'Private air-conditioned vehicle with dedicated driver-guide',
      'Pick-up and drop-off at your hotel in Bentota',
      'Guided tour of a colonial-era tea factory with tea tasting',
      'Expressway tolls, fuel, and parking fees',
      'Chilled bottled mineral water'
    ],
    whatToBring: [
      'Warm sweater, fleece, or light jacket (temperature drops to 12-18°C)',
      'Comfortable walking shoes',
      'Camera with zoom lens for waterfall landscapes',
      'Cash for personal lunch, boat rides, and fresh Ceylon tea purchases'
    ],
    itinerary: [
      { time: '05:00 AM', activity: 'Early morning pick-up from your Bentota accommodation' },
      { time: '08:30 AM', activity: 'Scenic mountain climb past roaring waterfalls with photo stops' },
      { time: '10:00 AM', activity: 'Visit a premier Tea Estate & Factory for guided tea processing tour' },
      { time: '11:45 AM', activity: 'Explore Nuwara Eliya town, colonial post office, and golf club' },
      { time: '01:00 PM', activity: 'Lunch at a colonial British style restaurant or lakeside cafe' },
      { time: '02:15 PM', activity: 'Relaxing walk around Lake Gregory and Victoria Park' },
      { time: '03:30 PM', activity: 'Scenic return journey down the mountain passes' },
      { time: '07:30 PM', activity: 'Return to your Bentota hotel' }
    ]
  },
  {
    id: 10,
    category: 'one-day',
    slug: 'colombo-city-tour',
    title: 'Colombo City Tour',
    duration: '',
    fullDuration: 'Full Day (approx. 7 - 8 Hours)',
    departure: '08:00 AM from Bentota',
    price: '',
    image: colomboImg,
    tag: 'Metropolitan Heritage',
    overview: 'Explore Sri Lanka\'s energetic commercial metropolis where historic colonial charm meets modern cosmopolitan style. Discover the bustling street bazaars of Pettah, the serene Gangaramaya Buddhist Temple on Beira Lake, the colonial Old Parliament, Galle Face Green oceanfront promenade, and Independence Memorial Hall.',
    highlights: [
      'Visit the iconic Gangaramaya Buddhist Temple and floating Seema Malaka',
      'Explore Independence Memorial Hall and colonial Cinnamon Gardens mansions',
      'Experience the bustling sights, spices, and sounds of the Pettah bazaar',
      'Stroll along the historic Galle Face Green oceanfront promenade',
      'Visit the Colombo Fort Clock Tower and Old Parliament heritage buildings'
    ],
    included: [
      'Private air-conditioned car or van transfer directly to Colombo and back',
      'Hotel pick-up and drop-off from Bentota',
      'Guided city tour with flexible photo stops',
      'Highway tolls, fuel, and parking fees',
      'Chilled bottled water'
    ],
    whatToBring: [
      'Comfortable walking shoes or sandals',
      'Modest attire covering shoulders and knees for temple entry',
      'Camera and sunglasses',
      'Spending money for shopping at Odel, Barefoot, or local artisan markets'
    ],
    itinerary: [
      { time: '08:00 AM', activity: 'Pick-up from your hotel and travel via the Southern Expressway' },
      { time: '09:30 AM', activity: 'Arrive in Colombo; visit Gangaramaya Temple and Seema Malaka' },
      { time: '11:00 AM', activity: 'Drive past Colombo Fort, Old Parliament, and Dutch Hospital' },
      { time: '12:00 PM', activity: 'Explore Independence Square and BMICH colonial avenues' },
      { time: '01:00 PM', activity: 'Lunch at a renowned Colombo restaurant (crab / authentic Sri Lankan)' },
      { time: '02:30 PM', activity: 'Shopping stop at boutique handicraft centers (Odel / Barefoot)' },
      { time: '04:00 PM', activity: 'Galle Face Green ocean walk before highway return' },
      { time: '05:30 PM', activity: 'Drop-off back at your hotel in Bentota' }
    ]
  },
  {
    id: 11,
    category: 'one-day',
    slug: 'ella',
    title: 'Ella',
    duration: '',
    fullDuration: 'Full Day (approx. 11 - 13 Hours)',
    departure: '04:30 AM from Bentota',
    price: '',
    image: ellaImg,
    tag: 'Scenic Mountain Wonderland',
    overview: 'Journey to the picturesque mountain village of Ella, famed for breathtaking mountain gaps, emerald tea gardens, and architectural wonders. Walk across the iconic Nine Arch Demodara Bridge nestled in jungle ravines, hike up Little Adam\'s Peak for sweeping valley views, and marvel at the cascading Ravana Falls.',
    highlights: [
      'Walk across the world-famous colonial Nine Arch Bridge in Demodara',
      'Hike Little Adam\'s Peak for panoramic 360-degree mountain gap views',
      'Admire the roaring Ravana Waterfall cascading down rugged rock cliffs',
      'Witness trains crossing the viaduct surrounded by lush tea hills',
      'Experience the relaxed bohemian atmosphere and cafes of Ella mountain town'
    ],
    included: [
      'Private air-conditioned transport with skilled mountain driver',
      'Hotel pick-up and return from Bentota area',
      'Assistance finding the best viewpoints for bridge and train crossings',
      'Expressway tolls, fuel, and parking fees',
      'Chilled bottled drinking water'
    ],
    whatToBring: [
      'Sturdy hiking sneakers or walking shoes',
      'Camera / smartphone with plenty of storage',
      'Sun hat, sunscreen, and sunglasses',
      'Light jacket or rain layer for mountain weather',
      'Cash for meals, zip-line (optional), and refreshments'
    ],
    itinerary: [
      { time: '04:30 AM', activity: 'Early departure from Bentota via scenic southern expressway' },
      { time: '08:45 AM', activity: 'Arrive in Ella; scenic photo stop at roaring Ravana Falls' },
      { time: '09:30 AM', activity: 'Trek to the iconic Nine Arch Bridge; catch train passing over the bridge' },
      { time: '11:45 AM', activity: 'Hike Little Adam\'s Peak for panoramic views across Ella Gap' },
      { time: '01:30 PM', activity: 'Relaxing lunch in Ella town at a vibrant mountain cafe' },
      { time: '03:00 PM', activity: 'Begin scenic drive back down through rolling tea country' },
      { time: '07:30 PM', activity: 'Safe arrival back at your Bentota hotel' }
    ]
  },

  // ── Two-Day Trips ──────────────────────────────────────────────
  {
    id: 12,
    category: 'two-day',
    slug: 'kandy-nuwara-eliya-2-day',
    title: 'Kandy & Nuwara Eliya Highland Discovery',
    duration: '2 Days / 1 Night',
    fullDuration: '2 Days / 1 Night',
    departure: '06:00 AM from Bentota',
    price: '',
    image: kandyImg,
    tag: 'Two-Day Highlands',
    overview: 'A magnificent two-day journey into the cool central highlands of Sri Lanka. Discover the sacred Temple of the Tooth Relic in royal Kandy, explore world-class botanical gardens, and climb through cascading waterfalls to the colonial charm of Nuwara Eliya\'s tea estates.',
    highlights: [
      'Temple of the Tooth Relic and traditional cultural dance show in Kandy',
      'Royal Botanical Gardens at Peradeniya',
      'Scenic drive past Ramboda Waterfalls to tea plantations',
      'Authentic working Ceylon tea factory tour and tea tasting',
      'Overnight stay in a scenic highland hotel'
    ],
    included: [
      'Private air-conditioned vehicle with dedicated driver-guide for 2 days',
      'Pick-up and drop-off at your hotel in Bentota',
      'All fuel, expressway tolls, and driver accommodation',
      'Bottled drinking water throughout the journey'
    ],
    whatToBring: ['Warm clothing for the evening', 'Temple attire', 'Comfortable shoes', 'Camera'],
    itinerary: [
      { time: 'Day 1 - 06:00 AM', activity: 'Depart Bentota; visit herbal garden, Peradeniya Gardens & Temple of the Tooth. Overnight in Kandy.' },
      { time: 'Day 2 - 08:00 AM', activity: 'Scenic drive to Nuwara Eliya via waterfalls, tea factory tour, Gregory Lake, and return to Bentota by evening.' }
    ]
  },
  {
    id: 13,
    category: 'two-day',
    slug: 'yala-udawalawe-safari-2-day',
    title: 'Yala & Udawalawe Wildlife Adventure',
    duration: '2 Days / 1 Night',
    fullDuration: '2 Days / 1 Night',
    departure: '06:00 AM from Bentota',
    price: '',
    image: yalaImg,
    tag: 'Two-Day Wildlife',
    overview: 'The ultimate Sri Lankan wildlife expedition combining the world-famous leopard territory of Yala with the massive elephant herds of Udawalawe. Stay overnight near the wilderness and enjoy multiple game drives for maximum wildlife sightings.',
    highlights: [
      'Evening and morning 4x4 safaris in Yala National Park',
      'Elephant Transit Home feeding session and Udawalawe safari',
      'High probability of spotting leopards, sloth bears, and wild elephants',
      'Overnight stay near the jungle sanctuary'
    ],
    included: [
      'Private air-conditioned vehicle with driver-guide for both days',
      'Hotel transfers from Bentota',
      'All vehicle fuel, toll charges, and driver expenses',
      'Chilled mineral water'
    ],
    whatToBring: ['Safari clothing (neutral colors)', 'Binoculars and camera', 'Sunscreen and hat'],
    itinerary: [
      { time: 'Day 1 - 06:00 AM', activity: 'Depart Bentota toward Yala. Afternoon 4x4 leopard safari in Yala. Overnight near park.' },
      { time: 'Day 2 - 07:00 AM', activity: 'Morning safari / visit Udawalawe Elephant Transit Home & park. Return to Bentota by evening.' }
    ]
  },
  {
    id: 14,
    category: 'two-day',
    slug: 'sigiriya-polonnaruwa-cultural-2-day',
    title: 'Sigiriya & Cultural Triangle Discovery',
    duration: '2 Days / 1 Night',
    fullDuration: '2 Days / 1 Night',
    departure: '05:30 AM from Bentota',
    price: '',
    image: sigiriyaImg,
    tag: 'Two-Day Ancient Kingdoms',
    overview: 'Immerse yourself in thousands of years of Sri Lankan royalty and architectural marvels. Climb the towering Sigiriya Rock Citadel, explore ancient cave temples at Dambulla, and walk through the royal ruins of Polonnaruwa.',
    highlights: [
      'Climb the 5th-century Sigiriya Rock Fortress at sunrise or late afternoon',
      'Dambulla Golden Cave Temples with ancient frescoes & statues',
      'Ancient Kingdom ruins of Polonnaruwa',
      'Overnight stay in the heart of the Cultural Triangle'
    ],
    included: [
      'Private air-conditioned transportation for 2 days',
      'Door-to-door hotel pick-up and drop-off in Bentota',
      'All toll fees, fuel, and driver expenses',
      'Bottled drinking water'
    ],
    whatToBring: ['Temple-appropriate clothing', 'Walking shoes with good grip', 'Sun protection'],
    itinerary: [
      { time: 'Day 1 - 05:30 AM', activity: 'Depart Bentota; explore Dambulla Cave Temple and climb Sigiriya. Overnight in Sigiriya.' },
      { time: 'Day 2 - 08:30 AM', activity: 'Explore Polonnaruwa ancient kingdom ruins or Minneriya elephant safari. Return to Bentota.' }
    ]
  },

  // ── Special Trips ──────────────────────────────────────────────
  {
    id: 15,
    category: 'special',
    slug: 'bentota-river-mangrove-safari',
    title: 'Bentota River & Mangrove Lagoon Safari',
    duration: 'Special Tour',
    fullDuration: 'Half Day (approx. 3 - 4 Hours)',
    departure: 'Flexible morning or afternoon from Bentota',
    price: '',
    image: udawalawaImg,
    tag: 'Special Local Safari',
    overview: 'Experience the signature local excursion of Bentota along the tranquil waters of the Bentota River and Madu Ganga mangrove lagoons. Glide through natural mangrove tunnels, visit cinnamon peelers on secluded islands, experience natural fish therapy, and visit baby turtles at a conservation hatchery.',
    highlights: [
      'Motorboat safari through natural arched mangrove tunnels',
      'Spot water monitors, river birds, bats, and baby crocodiles',
      'Visit Cinnamon Island to witness traditional cinnamon preparation',
      'Relax with natural open-water fish massage therapy',
      'Visit a local Sea Turtle Conservation Hatchery'
    ],
    included: [
      'Private boat safari with experienced captain',
      'Hotel pick-up and drop-off in Bentota area',
      'Life jackets and safety gear',
      'Chilled king coconut water or bottled water'
    ],
    whatToBring: ['Light casual beach clothing', 'Camera or smartphone', 'Sunglasses and sunscreen'],
    itinerary: [
      { time: '09:00 AM', activity: 'Hotel pick-up and transfer to the river pier' },
      { time: '09:15 AM', activity: 'Board private boat and cruise through mangrove canopies' },
      { time: '10:30 AM', activity: 'Visit Cinnamon Island and enjoy natural fish spa' },
      { time: '11:45 AM', activity: 'Visit Sea Turtle Hatchery; return to hotel' }
    ]
  },
  {
    id: 16,
    category: 'special',
    slug: 'deep-sea-fishing-sunset-cruise',
    title: 'Deep Sea Game Fishing & Sunset Cruise',
    duration: 'Special Tour',
    fullDuration: 'Half Day (approx. 4 - 5 Hours)',
    departure: '06:00 AM (Morning Game Fishing) or 03:30 PM (Sunset Cruise)',
    price: '',
    image: mirissaImg,
    tag: 'Exclusive Ocean Charter',
    overview: 'Head out into the deep azure waters of the Indian Ocean off the coast of Bentota on a private boat charter. Try your hand at catching marlin, sailfish, yellowfin tuna, barracuda, and wahoo with top-quality fishing gear and guidance from seasoned local fishermen.',
    highlights: [
      'Private boat charter into the Indian Ocean game fishing grounds',
      'Target yellowfin tuna, sailfish, wahoo, barracuda, and king mackerel',
      'Modern rods, reels, lures, and live bait included',
      'Breathtaking open-ocean views and spectacular tropical sunset'
    ],
    included: [
      'Private boat charter with licensed captain and crew',
      'All high-grade trolling and jigging fishing gear',
      'Life jackets and marine safety equipment',
      'Refreshments, soft drinks, and bottled water'
    ],
    whatToBring: ['Polarized sunglasses and sun protection', 'Motion sickness tablets if needed', 'Comfortable deck shoes or sandals'],
    itinerary: [
      { time: '06:00 AM / 03:30 PM', activity: 'Meet at Bentota marina / beach launch point' },
      { time: '06:30 AM / 04:00 PM', activity: 'Cruise past coastal reef into deep drop-offs and begin trolling' },
      { time: '09:30 AM / 06:00 PM', activity: 'Exciting fishing action, photo opportunities, and sunset views' },
      { time: '10:30 AM / 06:45 PM', activity: 'Return to shore and transfer back to hotel' }
    ]
  },
  {
    id: 17,
    category: 'special',
    slug: 'sinharaja-birdwatching-rainforest-special',
    title: 'Sinharaja Naturalist Birdwatching Expedition',
    duration: 'Special Tour',
    fullDuration: 'Special Full Day',
    departure: '05:30 AM from Bentota',
    price: '',
    image: sinharajaImg,
    tag: 'Specialist Eco Tour',
    overview: 'A specialized eco-expedition designed for birdwatchers, photographers, and nature enthusiasts. Led by an expert ornithologist, venture into deep microhabitats to track mixed-species bird feeding flocks and spot rare endemics like the Serendib Scops Owl, Sri Lanka Spurfowl, and Red-faced Malkoha.',
    highlights: [
      'Dedicated expedition led by an expert ornithologist and naturalist tracker',
      'High success rate of spotting Sri Lanka\'s rare endemic bird species',
      'Early morning entrance for peak bird activity and flock sightings',
      'Pristine nature photography opportunities in ancient rainforest'
    ],
    included: [
      'Private roundtrip transport from Bentota in AC vehicle',
      'Specialist naturalist bird guide with spotting scope',
      'Leech socks, entry permits, and rainforest access',
      'Packed breakfast, hot tea, and bottled water'
    ],
    whatToBring: ['Binoculars and DSLR camera with telephoto lens', 'Muted jungle colors clothing', 'Waterproof pack'],
    itinerary: [
      { time: '05:30 AM', activity: 'Early departure for morning bird activity' },
      { time: '07:30 AM', activity: 'Enter reserve; begin slow naturalist tracking through canopy corridors' },
      { time: '12:00 PM', activity: 'Jungle stream rest stop and picnic lunch' },
      { time: '02:30 PM', activity: 'Afternoon trail and return to Bentota by evening' }
    ]
  }
];
