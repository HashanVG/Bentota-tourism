// One Day Trip Assets
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

// Two Day Trip Assets
import dambulla2Img from '../assets/2 nd day/dambulla.jpg';
import ella2Img from '../assets/2 nd day/ella.jpg';
import galle2Img from '../assets/2 nd day/galle.jpg';
import kandy2Img from '../assets/2 nd day/kandy.jpg';
import nuwaraEliya2Img from '../assets/2 nd day/nuwara eliya.jpg';
import sigiriya2Img from '../assets/2 nd day/sigiriya.jpg';
import udawalawa2Img from '../assets/2 nd day/udawalawa.jpg';
import yala2Img from '../assets/2 nd day/yala.jpg';

// Special Trip Assets
import bentotaBoatImg from '../assets/special/1.webp';
import birdWatchingImg from '../assets/special/bird watching.jpg';

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
    image: udawalawaImg,
    tag: 'One Day',
    overview: 'Udawalawe National Park is Sri Lanka\'s premier sanctuary for wild Asian elephants, home to over 500 elephants roaming freely across 30,000 hectares of dry-zone savannah, reservoirs, and scrublands.',
    paragraphs: [
      'Udawalawe National Park is Sri Lanka\'s premier sanctuary for wild Asian elephants, established in 1972 to provide a protected haven for wildlife displaced by the construction of the massive Udawalawe Reservoir. Covering over 30,000 hectares of southern dry-zone savannah, scrublands, and riverine forests framed by the dramatic Kaltota mountain range, it is celebrated as one of the best places on earth to observe wild elephants interacting freely in their natural herds.',
      'Unlike dense jungle parks where animals can be difficult to spot, Udawalawe\'s open grasslands and scattered teak forests provide unobstructed visibility. An open-top 4x4 safari jeep allows visitors to encounter herds of mothers and playful baby calves bathing along the reservoir shores, mud-wallowing in watering holes, and feeding on tall guinea grass. The park supports a thriving population of over 500 elephants year-round, making sightings virtually guaranteed on every safari.',
      'Beyond elephants, Udawalawe is rich in biodiversity. Sluggish mugger crocodiles bask along the muddy banks of the Walawe River, while spotted deer, sambar, golden jackals, wild boars, and water buffaloes roam the plains. Birdwatchers are treated to over 180 avian species, including crested serpent eagles, grey-headed fish eagles, painted storks, white-bellied sea eagles, and dazzling flocks of green bee-eaters and peacocks.',
      'A highlight of visiting Udawalawe is the nearby Elephant Transit Home (ETH), supported by the Born Free Foundation. Here, orphaned baby elephants rescued from across the island are cared for, bottle-fed, and rehabilitated in a natural environment until they are strong enough to be released back into the wild herds.'
    ]
  },
  {
    id: 2,
    category: 'one-day',
    slug: 'yala-safari',
    title: 'Yala Safari',
    duration: '',
    image: yalaImg,
    tag: 'One Day',
    overview: 'Yala National Park is Sri Lanka\'s most famous wildlife destination, renowned worldwide for boasting one of the highest leopard densities on the planet alongside sloth bears and wild elephants.',
    paragraphs: [
      'Yala National Park, situated along Sri Lanka\'s southeastern coastline, is the island\'s most celebrated and second-largest national park. Spanning nearly 1,000 square kilometers, Yala is world-renowned for having one of the highest densities of leopards on the planet (Panthera pardus kotiya), an endemic subspecies that reigns as the apex predator of Sri Lanka\'s wilderness.',
      'The park\'s terrain is remarkably diverse and photogenic, transitioning from dense semi-deciduous monsoon forest to open thorny scrubland, freshwater lakes, brackish coastal lagoons, and towering granite boulder outcrops. These dramatic rock formations often serve as vantage points and sunbathing rocks for leopards, offering thrilling opportunities for wildlife photographers and safari travelers.',
      'In addition to the famous leopards, Yala is home to the shaggy Sri Lankan sloth bear, herds of wild Asian elephants, elusive fishing cats, spotted deer, wild boars, jackals, and both mugger and estuarine crocodiles. The park\'s coastal boundary and saltwater lagoons attract tremendous flocks of waterbirds, including black-necked storks, flamingos, pelicans, and Eurasian spoonbills.',
      'Yala also holds deep historical and spiritual significance. Ancient monastic cave hermitages and stupa ruins dating back to the 2nd century BC, such as Sithulpawwa Rock Temple and Magul Maha Viharaya, lie nestled within the jungle, indicating that this untamed wilderness once thrived as part of the ancient Ruhuna Kingdom.'
    ]
  },
  {
    id: 3,
    category: 'one-day',
    slug: 'sinharaja-rain-forest',
    title: 'Sinharaja Rain Forest',
    duration: '',
    image: sinharajaImg,
    tag: 'One Day',
    overview: 'Sinharaja Forest Reserve is a UNESCO World Heritage Site and Sri Lanka\'s last remaining viable tract of primary tropical rainforest, teeming with rare endemic wildlife and prehistoric canopies.',
    paragraphs: [
      'Sinharaja Forest Reserve, inscribed as a UNESCO World Heritage Site and Biosphere Reserve, is Sri Lanka\'s last remaining viable tract of primary lowland tropical rainforest. Stretching across a rugged east-west ridge in the southwestern wet zone, this ancient jungle has evolved over millions of years, escaping major glaciation and resulting in an extraordinary concentration of endemic species found nowhere else on earth.',
      'Stepping beneath Sinharaja\'s towering emerald canopy immerses you in an ancient, living world. Dense curtains of climbing lianas, giant ferns, wild orchids, and medicinal flora thrive in the humid, misty atmosphere. Over 60% of the trees in Sinharaja are endemic to Sri Lanka, with many towering over 40 meters high to form a multi-layered canopy that shelters rare wildlife from forest floor to canopy crown.',
      'Sinharaja is world-famous among naturalists for its remarkable \'mixed-species bird feeding flocks\'—an incredible phenomenon where up to 40 different bird species travel and forage together through the trees. Visitors can spot striking endemics including the Sri Lanka Blue Magpie, Red-faced Malkoha, Serendib Scops Owl, Green-billed Coucal, and Orange-billed Babbler, alongside purple-faced langurs and the endangered Sri Lanka leopard.',
      'Pristine mountain streams and hidden waterfalls weave throughout the forest trails. A guided trek along the leafy paths leads to cascading pools of crystalline mountain water, where travelers can take a refreshing, rejuvenating swim surrounded by the sounds of singing cicadas and tropical birds.'
    ]
  },
  {
    id: 4,
    category: 'one-day',
    slug: 'galle',
    title: 'Galle',
    duration: '',
    image: galleImg,
    tag: 'One Day',
    overview: 'Galle Dutch Fort is a 17th-century UNESCO World Heritage monument where ancient stone ramparts meet cobblestone streets, colonial villas, boutique cafes, and the iconic oceanfront lighthouse.',
    paragraphs: [
      'Galle is the jewel of Sri Lanka\'s southern coastline, celebrated for its legendary Dutch Fort—a UNESCO World Heritage Site originally founded by the Portuguese in 1505 and extensively fortified by the Dutch East India Company throughout the 17th century. Enclosed by massive coral and granite ramparts, this fortified living citadel has stood resilient for over four centuries against ocean swells and historic sieges, serving as a crossroads of world trade and colonial maritime heritage.',
      'Walking through the historic stone archway of the fort feels like stepping into a romantic bygone era. The narrow cobblestone streets are flanked by red-tiled Dutch colonial villas with pillared verandas, blooming bougainvillea, and ornate wrought-iron gates. Today, these heritage buildings house artisan gemstone jewelers, boutique perfume houses, handmade lace workshops, antique galleries, and atmospheric open-air cafes offering aromatic Ceylon tea and international cuisine.',
      'Key landmarks within the ramparts include the towering 1939 white Galle Lighthouse perched on the oceanfront Point Utrecht Bastion, the historic Dutch Reformed Church built in 1755 with carved tombstones embedded into the floor, the Dutch Hospital heritage shopping precinct, and the historic Clock Tower overlooking the cricket stadium. From the elevated western ramparts, travelers gather in the late afternoon to witness unforgettable golden sunsets over the Indian Ocean while local cliff divers plunge into the turquoise waves below.',
      'Beyond the ramparts, the journey along the southern coastline treats visitors to unique coastal culture, including traditional stilt fishermen balancing on narrow wooden poles at Koggala, nearby sea turtle conservation hatcheries protecting vulnerable olive ridley and green turtles, and traditional southern mask-carving workshops.'
    ]
  },
  {
    id: 5,
    category: 'one-day',
    slug: 'hikkaduwa',
    title: 'Hikkaduwa',
    duration: '',
    image: hikkaduwaImg,
    tag: 'One Day',
    overview: 'Hikkaduwa is a lively coastal paradise famous for its golden sand beaches, marine national park, coral gardens, and giant sea turtles that swim directly to the beach shoreline.',
    paragraphs: [
      'Hikkaduwa is one of Sri Lanka\'s most iconic coastal destinations, famous since the 1970s for its sun-drenched golden beaches, world-class surf breaks, and magnificent coral reef sanctuary. Located just south of Bentota along the scenic Galle Road, Hikkaduwa combines laid-back tropical beach charm with lively seaside cafes, surf schools, and marine adventures.',
      'The town\'s crown jewel is the Hikkaduwa Coral Sanctuary, Sri Lanka\'s first marine national park. This shallow coastal reef system is home to over 60 species of hard corals and an astonishing diversity of colorful reef fish, including angel fish, butterfly fish, moray eels, and blacktip reef sharks. Visitors can easily explore this underwater wonderland by snorkeling or taking a leisurely glass-bottom boat excursion.',
      'One of Hikkaduwa\'s most beloved attractions is the shoreline turtle gathering. Every morning and afternoon, giant wild green sea turtles swim directly up to the calm shallow waters right off the beach. Visitors can stand knee-deep in the gentle ocean waves and hand-feed these gentle giants fresh seaweed under the care of local conservation volunteers.',
      'The town also preserves touching history and culture. Nearby in Telwatta stands the towering 30-meter Tsunami Buddha Memorial statue, a poignant gift from Japan, and the Tsunami Community Museum which commemorates the resilience of the southern coastal communities.'
    ]
  },
  {
    id: 6,
    category: 'one-day',
    slug: 'mirissa-whale-watching',
    title: 'Mirissa (Whale Watching)',
    duration: '',
    image: mirissaImg,
    tag: 'One Day',
    overview: 'Mirissa is world-famous as one of the best spots on earth to witness giant Blue Whales, sperm whales, and super-pods of acrobatic spinner dolphins in their natural ocean migration route.',
    paragraphs: [
      'Mirissa is a breathtaking crescent bay on the southern tip of Sri Lanka, globally celebrated as one of the premier locations on earth for whale and dolphin watching. Just a few nautical miles off the coast of Mirissa, the continental shelf plunges precipitously into deep oceanic trenches, bringing nutrient-rich deep currents close to the shore and attracting migratory marine megafauna.',
      'Between November and April, the ocean waters off Mirissa become a prime gathering and feeding route for Blue Whales—the largest creatures to have ever existed on planet Earth, growing up to 30 meters in length and weighing over 150 tons. Witnessing the colossal blue-grey back of a blue whale surface, blast a powerful vapor spout 10 meters into the morning sky, and gracefully lift its massive tail fluke before diving into the abyss is a truly humbling, once-in-a-lifetime experience.',
      'In addition to blue whales, these rich waters are frequently visited by sperm whales, fin whales, Bryde\'s whales, and occasional pods of killer whales (orcas). Enormous super-pods of acrobatic spinner dolphins and bottlenose dolphins often accompany the tour boats, leaping high out of the sparkling ocean swells and riding the bow waves in joyful synchrony.',
      'Back on terra firma, Mirissa charms visitors with its picturesque curved beach, coconut palms swaying over turquoise waters, and the famous Coconut Tree Hill—a scenic red-dirt promontory studded with towering palm trees overlooking the azure bay, renowned worldwide as one of Sri Lanka\'s most photogenic coastal viewpoints.'
    ]
  },
  {
    id: 7,
    category: 'one-day',
    slug: 'kandy',
    title: 'Kandy',
    duration: '',
    image: kandyImg,
    tag: 'One Day',
    overview: 'Kandy is Sri Lanka\'s sacred cultural capital, home to the revered Temple of the Sacred Tooth Relic, the royal palace, and the 150-acre Peradeniya Royal Botanical Gardens.',
    paragraphs: [
      'Kandy, the revered hill capital of Sri Lanka and a UNESCO World Heritage Site, was the last stronghold of the independent Sinhalese monarchy, holding out against Portuguese and Dutch colonizers for centuries before finally falling to the British in 1815. Cradled in a lush green valley surrounded by mist-veiled mountain ranges and the winding Mahaweli River, Kandy remains the spiritual and cultural heart of the island.',
      'At the center of Kandy\'s spiritual life stands the magnificent Temple of the Sacred Tooth Relic (Sri Dalada Maligawa), located within the royal palace complex alongside the tranquil Kandy Lake. The temple houses the left canine tooth of Gautama Buddha, Sri Lanka\'s most venerated religious relic, which has symbolized divine royal sovereignty for millennia. Visitors can experience the atmospheric daily \'Thevava\' puja ceremonies filled with rhythmic traditional drumming, blowing of conch shells, and the scent of fresh lotus and jasmine blossoms.',
      'Just outside the city center lies the world-renowned Royal Botanic Gardens of Peradeniya, dating back to 1371 as a royal pleasure garden. Spanning nearly 150 acres bounded by the Mahaweli River, it houses over 4,000 documented plant species, an internationally acclaimed orchid house, giant century-old Javan fig trees whose roots sprawl like sculptures, and grand avenues of royal palms.',
      'The scenic route between the coast and Kandy winds through rubber plantations, pineapples farms, and aromatic spice gardens where cinnamon, cardamom, nutmeg, and vanilla are grown. In Kandy town, travelers can explore traditional artisan centers specializing in intricate silver and brass metalwork, handwoven batiks, and precious Ceylon blue sapphires.'
    ]
  },
  {
    id: 8,
    category: 'one-day',
    slug: 'sigiriya',
    title: 'Sigiriya',
    duration: '',
    image: sigiriyaImg,
    tag: 'One Day',
    overview: 'Sigiriya Lion Rock is an ancient 5th-century sky fortress rising 200 meters above the jungle, featuring world-famous frescoes, mirror walls, and the ruins of King Kashyapa\'s palace.',
    paragraphs: [
      'Sigiriya, famously hailed as the 8th Wonder of the World and a UNESCO World Heritage Site, is an awe-inspiring archaeological masterpiece rising dramatically 200 meters above the central jungle plains. In the 5th century AD, King Kashyapa transformed this colossal sheer granite monolith into an impregnable royal fortress and pleasure palace, blending natural geography with extraordinary urban planning and artistic brilliance.',
      'At the base of the rock lies one of the oldest surviving landscaped gardens in Asia. Symmetrically planned royal water gardens feature intricate hydraulic systems of underground conduits, fountains that still spray water during rainy seasons, geometric moats, and natural boulder gardens. Walking through these ruins reveals the visionary engineering of ancient Sri Lankan civilization.',
      'Ascending the sheer western rock face via spiral staircases leads to the sheltered rock gallery, home to the world-famous Sigiriya Frescoes—exquisite 1,500-year-old painted portraits of celestial maidens or apsaras adorned with golden jewelry and lotus flowers. Just beyond lies the \'Mirror Wall\', polished so brilliantly in antiquity that the king could see his reflection, and inscribed with poetic graffiti written by visitors between the 6th and 14th centuries.',
      'Higher up at the northern terrace, visitors pass through the colossal carved stone paws of the Lion Gate—the remnants of a gigantic seated lion whose open jaws once formed the entrance to the summit stairway. The 1.6-hectare summit rewards climbers with the terraced stone foundations of the royal palace, bathing pools, and breathtaking 360-degree vistas stretching across endless emerald canopies, lakes, and distant mountain peaks.'
    ]
  },
  {
    id: 9,
    category: 'one-day',
    slug: 'nuwara-eliya',
    title: 'Nuwara Eliya',
    duration: '',
    image: nuwaraEliyaImg,
    tag: 'One Day',
    overview: 'Nuwara Eliya is Sri Lanka\'s \'Little England\', celebrated for its cool highland climate, endless rolling tea valleys, colonial British architecture, and roaring waterfalls.',
    paragraphs: [
      'Perched at an elevation of 1,868 meters in the central highlands, Nuwara Eliya is affectionately known as \'Little England\' for its cool temperate climate, rolling hills cloaked in manicured tea bushes, and charming British colonial architecture. Founded in the 19th century by British explorer Sir Samuel Baker, it became a favored mountain retreat for colonial tea planters escaping the tropical heat of the lowlands.',
      'The journey to Nuwara Eliya is a spectacular visual feast, climbing through winding mountain passes adorned with thundering waterfalls such as Ramboda Falls and Devon Falls. The mountain slopes are carpeted in endless geometric terraces of bright emerald green Ceylon tea bushes, dotted with the colorful saris of tea pluckers expertly harvesting the tender \'two leaves and a bud\'.',
      'Visiting an authentic working colonial-era tea plantation and factory provides an unforgettable look into how world-renowned Ceylon Tea is processed—from withering and rolling to fermentation, drying, and grading. Visitors can experience a guided tea-tasting session to savor the subtle aromas and golden liquor of single-estate high-grown black, green, and silver tip teas.',
      'In the heart of Nuwara Eliya town, colonial nostalgia endures in landmarks like the red-brick Tudor-style 1894 Post Office, the colonial Grand Hotel, the 1889 Nuwara Eliya Golf Club, and landscaped Queen Victoria Park. Travelers can stroll around picturesque Gregory Lake, take a scenic pony ride, or rent a pedal boat beneath cool misty mountain breezes.'
    ]
  },
  {
    id: 10,
    category: 'one-day',
    slug: 'colombo-city-tour',
    title: 'Colombo City Tour',
    duration: '',
    image: colomboImg,
    tag: 'One Day',
    overview: 'Colombo is Sri Lanka\'s cosmopolitan commercial capital, combining vibrant street markets, colonial Dutch architecture, tranquil Buddhist temples, and scenic ocean promenades.',
    paragraphs: [
      'Colombo is Sri Lanka\'s vibrant commercial capital and largest city, where centuries of maritime history meet modern South Asian cosmopolitan energy. Situated on the western coast along historic sea routes, Colombo has welcomed Arab, Chinese, Portuguese, Dutch, and British traders for over two thousand years, leaving behind a rich tapestry of cultures, architecture, and culinary traditions.',
      'The city offers striking contrasts between old and new. In the bustling commercial hub of Pettah, colorful open-air street bazaars overflow with exotic spices, textiles, jewelry, electronics, and fresh tropical fruit. Just moments away stand grand colonial monuments like the Old Dutch Hospital—now a premier dining and lifestyle precinct—the historic Colombo Fort Clock Tower, and the neoclassical Old Parliament Building facing the Indian Ocean.',
      'A visit to the renowned Gangaramaya Temple on the edge of Beira Lake reveals an extraordinary sanctuary of Buddhist art, antique collections, and spiritual tranquility. Just across the water sits the serene floating Seema Malaka pavilion, redesigned by Sri Lanka\'s legendary architect Geoffrey Bawa, offering peaceful reflection amidst the city skyline.',
      'In the leafy, affluent district of Cinnamon Gardens, wide avenues are lined with majestic rain trees, colonial mansions, the National Museum, and the majestic Independence Memorial Hall commemorating freedom from British rule in 1948. The city tour finishes along the expansive Galle Face Green promenade, where locals and visitors gather to fly kites, taste crispy street-food \'isso wade\' (prawn fritters), and watch the sun dip below the horizon.'
    ]
  },
  {
    id: 11,
    category: 'one-day',
    slug: 'ella',
    title: 'Ella',
    duration: '',
    image: ellaImg,
    tag: 'One Day',
    overview: 'Ella is a picturesque mountain paradise famous for the iconic colonial Nine Arch Bridge, hiking Little Adam\'s Peak, the roaring Ravana Falls, and panoramic gap views.',
    paragraphs: [
      'Nestled in the southern highlands at an elevation of 1,041 meters, Ella is one of Sri Lanka\'s most enchanting mountain villages, beloved for its relaxed bohemian charm, panoramic mountain gaps, and dramatic scenery. Surrounded by cloud-kissed peaks, dense pine forests, and sweeping tea estates, Ella provides an inspiring escape into pristine natural beauty.',
      'Ella\'s most iconic architectural marvel is the Nine Arch Demodara Bridge (also known as the \'Bridge in the Sky\'). Commissioned during British colonial rule in 1921, this majestic 91-meter-long railway viaduct was constructed entirely out of solid granite bricks and cement without a single piece of structural steel. Watching the iconic blue passenger train slowly cross the high stone arches surrounded by dense tropical jungle and tea bushes is a bucket-list spectacle for travelers.',
      'For hikers, Ella offers rewarding and accessible trails. The hike to Little Adam\'s Peak (Punchi Sri Pada) winds gently through fragrant tea plantations before ascending to a series of panoramic ridgelines that offer breathtaking 360-degree views across the deep Ella Gap to the southern plains far below. Adventurous travelers can also admire the dramatic Ella Rock towering across the valley.',
      'Ella is steeped in ancient mythology linked to the Indian epic Ramayana. A short drive down the valley brings visitors to the thundering Ravana Falls, cascading 25 meters down rugged rock amphitheaters into natural plunge pools. According to legend, King Ravana hid Princess Sita in the subterranean Ravana Cave behind these very waterfalls.'
    ]
  },

  // ── Two-Day Trips ──────────────────────────────────────────────
  {
    id: 12,
    category: 'two-day',
    slug: 'kandy-nuwara-eliya',
    title: 'Kandy-Nuwara Eliya',
    duration: '',
    image: kandy2Img,
    tag: 'Two Day',
    overview: 'A magnificent two-day journey through Sri Lanka\'s central highlands, exploring the sacred royal city of Kandy and the misty colonial tea valleys of Nuwara Eliya.',
    locations: [
      {
        name: 'Kandy',
        image: kandy2Img,
        paragraphs: [
          'Kandy is the revered spiritual and cultural capital of Sri Lanka, nestled in a lush valley encircled by mist-veiled mountain ranges and the winding Mahaweli River. As the final stronghold of the Sinhalese monarchy, Kandy preserves an extraordinarily rich legacy of royal traditions, architecture, and religious veneration.',
          'The sacred heart of the city is the Temple of the Tooth Relic (Sri Dalada Maligawa), located inside the historic royal palace complex along the tranquil waters of Kandy Lake. The temple houses the sacred tooth of the Buddha, revered by pilgrims worldwide. Surrounding the city lies the magnificent Peradeniya Royal Botanical Gardens, home to over 4,000 plant species, sprawling centuries-old fig trees, and royal palm avenues.'
        ]
      },
      {
        name: 'Nuwara Eliya',
        image: nuwaraEliya2Img,
        paragraphs: [
          'Rising to an elevation of nearly 1,900 meters, Nuwara Eliya is known as \'Little England\' for its cool mountain climate, rolling emerald tea estates, and colonial British charm. The road ascends past thundering waterfalls such as Ramboda and Devon Falls before opening into valleys carpeted in tea bushes.',
          'Visitors can explore working colonial tea estates and factories to witness the traditional processing of world-famous Ceylon Tea, sample single-estate brews, and wander past historic landmarks like the 1894 Post Office, Gregory Lake, and Queen Victoria Park.'
        ]
      }
    ]
  },
  {
    id: 13,
    category: 'two-day',
    slug: 'sigiriya-dambulla',
    title: 'Sigiriya-Dambulla',
    duration: '',
    image: sigiriya2Img,
    tag: 'Two Day',
    overview: 'Immerse yourself in the golden age of Sri Lankan civilization, scaling the dramatic 5th-century Sigiriya Sky Citadel and walking through the sacred Dambulla Golden Rock Cave Temples.',
    locations: [
      {
        name: 'Sigiriya',
        image: sigiriya2Img,
        paragraphs: [
          'Sigiriya, hailed as the 8th Wonder of the World and a UNESCO World Heritage Site, is a colossal 200-meter sheer granite monolith that was transformed into a fortified royal palace citadel in the 5th century by King Kashyapa.',
          'At the base lie Asia\'s oldest landscaped water gardens with subterranean hydraulics. Halfway up the rock face, sheltered galleries display the legendary 1,500-year-old celestial Sigiriya frescoes, while the summit preserves palace foundations, royal bathing pools, and breathtaking 360-degree vistas across jungle plains.'
        ]
      },
      {
        name: 'Dambulla',
        image: dambulla2Img,
        paragraphs: [
          'The Dambulla Rock Cave Temple complex (Golden Temple of Dambulla) is the largest and best-preserved cave sanctuary in Sri Lanka. Dating back to the 1st century BC, King Valagamba sought refuge in these massive granite caves before transforming them into sacred Buddhist shrines.',
          'Across five grand cavernous sanctuaries, visitors discover over 150 exquisitely crafted golden Buddha statues, intricate royal figures, and more than 2,000 square meters of vibrant religious murals painted across the natural cave ceilings.'
        ]
      }
    ]
  },
  {
    id: 14,
    category: 'two-day',
    slug: 'sigiriya-dambulla-kandy',
    title: 'Sigiriya-Dambulla-Kandy',
    duration: '',
    image: sigiriya2Img,
    tag: 'Two Day',
    overview: 'The definitive Cultural Triangle expedition combining three UNESCO World Heritage masterpieces: the ancient fortress of Sigiriya, the golden cave temples of Dambulla, and the sacred royal capital of Kandy.',
    locations: [
      {
        name: 'Sigiriya',
        image: sigiriya2Img,
        paragraphs: [
          'Sigiriya is an extraordinary archaeological marvel where ancient engineering, art, and nature fuse into one. Rising 200 meters into the sky, climbers ascend through the colossal stone lion paws to stand atop the palace ruins of King Kashyapa overlooking panoramic jungle canopies.',
          'The climb features the world-renowned frescoes of celestial maidens, the ancient Mirror Wall with centuries-old traveler poetry, and landscaped water gardens that still function with remarkable hydraulic ingenuity.'
        ]
      },
      {
        name: 'Dambulla',
        image: dambulla2Img,
        paragraphs: [
          'Dambulla Cave Temple sits majestically atop a massive granite ridge with sweeping views of the surrounding countryside, including Sigiriya in the distance. Its five sacred caverns have served as an active place of pilgrimage and worship for over twenty-two centuries.',
          'Inside, the cool cave chambers house awe-inspiring 14-meter reclining Buddha statues carved directly from living rock, surrounded by intricate ceiling frescoes depicting the life of the Buddha and historic moments in Sri Lankan history.'
        ]
      },
      {
        name: 'Kandy',
        image: kandy2Img,
        paragraphs: [
          'Continuing south into the hills brings you to Kandy, the final royal capital of the island. Surrounded by the forested peaks of the Hanthana mountains, Kandy is famed for the Temple of the Sacred Tooth Relic and its atmospheric lakeside promenades.',
          'The city is also a sanctuary of rich craftsmanship, showcasing centuries of traditional gem cutting, hand-beaten copper work, and traditional Kandyan dance performances with fire-walking rituals.'
        ]
      }
    ]
  },
  {
    id: 15,
    category: 'two-day',
    slug: 'yala-galle',
    title: 'Yala-Galle',
    duration: '',
    image: yala2Img,
    tag: 'Two Day',
    overview: 'An unforgettable two-day journey contrasting the raw wilderness and leopard tracking of Yala National Park with the romantic colonial charm and ocean ramparts of Galle Dutch Fort.',
    locations: [
      {
        name: 'Yala',
        image: yala2Img,
        paragraphs: [
          'Yala National Park is Sri Lanka\'s premier big-game safari sanctuary, globally famous for holding one of the highest leopard densities in the world. An open-top 4x4 safari jeep takes you deep into the park\'s diverse landscapes of monsoon scrub, coastal lagoons, and granite outcrops.',
          'Beyond leopards, travelers regularly spot herds of wild Asian elephants, sloth bears foraging among termitaries, crocodiles basking in wetlands, and vibrant flocks of waterbirds gathered along the Indian Ocean shores.'
        ]
      },
      {
        name: 'Galle',
        image: galle2Img,
        paragraphs: [
          'Galle Dutch Fort is a 17th-century UNESCO World Heritage living citadel standing proudly on a southern ocean promontory. Walking its massive stone ramparts and bastions reveals panoramic ocean views and the iconic 1939 white lighthouse.',
          'Within the fort, cobblestone lanes are lined with Dutch colonial architecture, boutique cafes, artisan jewelers, and spice merchants, making it a peaceful and romantic coastal haven.'
        ]
      }
    ]
  },
  {
    id: 16,
    category: 'two-day',
    slug: 'udawalawa-galle',
    title: 'Udawalawa-Galle',
    duration: '',
    image: udawalawa2Img,
    tag: 'Two Day',
    overview: 'Experience the best of southern Sri Lanka, combining the guaranteed wild elephant encounters of Udawalawe National Park with the colonial maritime history and ocean ramparts of Galle Dutch Fort.',
    locations: [
      {
        name: 'Udawalawa',
        image: udawalawa2Img,
        paragraphs: [
          'Udawalawe National Park is celebrated worldwide as the best destination in Sri Lanka for observing wild Asian elephants in their natural habitat. Over 500 wild elephants roam the open grasslands, reservoirs, and scrub forests of the park.',
          'The safari provides open vistas where herds of elephants and playful calves graze and bathe in watering holes, complemented by a visit to the nearby Elephant Transit Home during the baby elephant feeding session.'
        ]
      },
      {
        name: 'Galle',
        image: galle2Img,
        paragraphs: [
          'Galle Fort is an extraordinary living monument founded by the Portuguese in 1505 and fortified by the Dutch. Massive ocean-facing bastions enclose a charming historic town filled with colonial villas, the Dutch Reformed Church, and the historic maritime museum.',
          'Strolling along the cobblestone pathways, browsing artisan craft galleries, and watching golden Indian Ocean sunsets from the western ramparts creates an unforgettable coastal conclusion.'
        ]
      }
    ]
  },
  {
    id: 17,
    category: 'two-day',
    slug: 'ella-nuwara-eliya-train',
    title: 'Ella-Nuwara Eliya(include Train Journey)',
    duration: '',
    image: ella2Img,
    tag: 'Two Day',
    overview: 'The quintessential Sri Lankan hill country experience featuring the iconic Nine Arch Bridge, Little Adam\'s Peak, the scenic mountain train journey, and the colonial tea country of Nuwara Eliya.',
    locations: [
      {
        name: 'Ella',
        image: ella2Img,
        paragraphs: [
          'Ella is a breathtaking mountain village nestled amidst green peaks and tea plantations. It is home to the world-famous Demodara Nine Arch Bridge, an engineering marvel built entirely of stone and brick without steel, surrounded by emerald jungle.',
          'Hikers can scale Little Adam\'s Peak for sweeping 360-degree vistas across Ella Gap and marvel at the roaring cascades of Ravana Falls tumbling down rock faces steeped in ancient Ramayana mythology.'
        ]
      },
      {
        name: 'Nuwara Eliya',
        image: nuwaraEliya2Img,
        paragraphs: [
          'Travel between Ella and Nuwara Eliya via the world-famous scenic mountain railway, winding through misty cloud forests, deep ravines, and endless rolling tea plantations in what is widely celebrated as one of the most beautiful train rides in the world.',
          'In Nuwara Eliya, experience \'Little England\' with visits to working colonial Ceylon tea estates, tasting fresh high-grown tea, strolling around Lake Gregory, and enjoying the crisp mountain air.'
        ]
      }
    ]
  },
  {
    id: 18,
    category: 'two-day',
    slug: 'udawalawa-yala',
    title: 'Udawalawa-Yala',
    duration: '',
    image: udawalawa2Img,
    tag: 'Two Day',
    overview: 'The ultimate dual-park wildlife safari expedition, pairing the guaranteed wild elephant herds of Udawalawe with the world-renowned leopard and sloth bear territory of Yala.',
    locations: [
      {
        name: 'Udawalawa',
        image: udawalawa2Img,
        paragraphs: [
          'Udawalawe National Park provides unmatched open-savannah game drives where wild elephant families, spotted deer, wild boars, and water buffaloes roam free around the immense Udawalawe reservoir.',
          'The open landscape allows clear close-up observations of elephant herd dynamics and playful baby calves, alongside the rehabilitation work of the nearby Elephant Transit Home.'
        ]
      },
      {
        name: 'Yala',
        image: yala2Img,
        paragraphs: [
          'Yala National Park takes wildlife tracking to the next level with its rugged coastal scrublands, freshwater lagoons, and towering granite boulders that serve as home to the elusive Sri Lankan Leopard.',
          'Safari jeeps navigate diverse tracks tracking leopards, shaggy sloth bears, jackals, crocodiles, and vast flocks of migratory waterbirds, making this dual-park journey the complete Sri Lankan safari.'
        ]
      }
    ]
  },

  // ── Special Trips ──────────────────────────────────────────────
  {
    id: 19,
    category: 'special',
    slug: 'bentota-boat-safari',
    title: 'Bentota Boat safari',
    duration: '',
    image: bentotaBoatImg,
    overview: 'Experience the tranquil beauty of the Bentota River and its intricate mangrove waterways on an exclusive private boat safari, discovering vibrant riverine wildlife, secret islands, and peaceful natural channels.',
    paragraphs: [
      'The Bentota River Boat Safari is one of the most beloved and enchanting nature excursions on Sri Lanka\'s southwestern coast. Boarding a comfortable private motorboat, you set out along the tranquil, glass-like waters of the Bentota Ganga, where the river winds peacefully through lush tropical foliage, bamboo groves, and intricate mangrove estuaries.',
      'As your boat glides deep into the shaded river bends, you will navigate through natural mangrove tunnels where massive aerial root networks drape into the water, creating a cool green canopy sheltered from the tropical sun. Keep your eyes peeled for riverine wildlife in their natural habitat, including large water monitor lizards sunbathing on low branches, colorful river kingfishers (pied, common, and white-throated) darting across the water, and colonies of fruit bats roosting high in riverside trees.',
      'The river journey also takes you past idyllic secluded river islands. You can stop at a traditional cinnamon island to observe how skilled local artisans harvest and peel authentic Ceylon cinnamon bark using age-old hand tools, and enjoy the refreshing herbal aroma of freshly prepared cinnamon quills. You can also experience natural riverside fish therapy, dipping your feet into clear netted enclosures where tiny doctor fish provide a soothing, ticklish massage.',
      'Whether you choose an early morning tour to catch the morning mist rising off the river and peak bird activity, or a peaceful late afternoon cruise as the sun dips below the coconut palms, the Bentota Boat Safari offers an unforgettable, family-friendly encounter with coastal Sri Lanka\'s natural charm.'
    ]
  },
  {
    id: 20,
    category: 'special',
    slug: 'bird-watching',
    title: 'Bird watching',
    duration: '',
    image: birdWatchingImg,
    overview: 'Embark on a specialized birdwatching expedition guided by seasoned naturalists, exploring diverse habitats to observe an astonishing variety of endemic, resident, and migratory bird species.',
    paragraphs: [
      'Sri Lanka is globally celebrated as one of the world\'s most remarkable birdwatching havens. Due to its unique geographic position at the southern tip of the Central Asian Flyway and its diverse microclimates—spanning coastal lagoons, wetlands, riverine forests, and lush tropical canopies—the island provides sanctuary to over 450 recorded avian species, including more than 30 precious endemics found nowhere else on earth.',
      'Our dedicated Bird Watching excursion is designed for nature lovers, avid ornithologists, and wildlife photographers seeking a quiet, immersive wilderness encounter. Guided by knowledgeable local naturalists equipped with keen eyes and ears for bird calls, you will venture into rich birding corridors during early morning and late afternoon hours when feeding and singing activity is at its height.',
      'Throughout the excursion, you will have opportunities to observe an extraordinary diversity of species. Watch for dazzling Asian paradise flycatchers flitting between trees, vivid green bee-eaters perched along branches, purple herons and white-breasted waterhens stalking the shallows, hornbills gliding through the canopy, and majestic raptors such as the crested serpent eagle and white-bellied sea eagle circling high above.',
      'During the migratory season from October to April, the habitats come alive with thousands of winter visitors, including sandpipers, plovers, terns, and ducks escaping the northern hemisphere cold. Whether observing rare forest endemics or spectacular gatherings of wetland waterbirds, this tour guarantees peaceful contemplation and unforgettable photographic moments in pristine nature.'
    ]
  }
];
