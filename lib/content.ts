import { Service, Location, BlogPost, Testimonial } from '@/types';

// ─── SERVICES ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'automotive-locksmith',
    name: 'Automotive Locksmith',
    slug: 'automotive-locksmith',
    description: 'Professional car lockout, key replacement, and ignition repair services in Bed-Stuy. 24/7 mobile service for all vehicle types.',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    keywords: ['automotive locksmith', 'car lockout', 'car key replacement', 'ignition repair', 'transponder programming'],
    updatedAt: new Date('2026-05-06'),
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    content: `[[H2:Fast Car Unlocking]]
You are locked out of your car. Our mobile units are ready. We use specialized tools to unlock your car. We leave no scratches on the paint. We protect the window seals.

[[H3:Car Key Replacement]]
You lost your keys. We cut and program a new transponder key. We do this at your location.

[[CTA:PHONE]]

[[H3:Ignition Repair]]
Your key is stuck. Do not force it. We repair stuck ignitions for most cars. You avoid an expensive dealership trip.`,
  },
  {
    id: 'lock-installation',
    name: 'Lock Installation',
    slug: 'lock-installation',
    description: 'Expert lock installation for residential & commercial. Deadbolts, smart locks, mortise, and high-security hardware.',
    icon: '🔒',
    keywords: ['lock installation', 'install deadbolt', 'smart lock installation', 'high security locks', 'mortise lock install'],
    updatedAt: new Date('2026-05-06'),
    content: `[[H2:Secure Your Home]]
You are moving into a new apartment. You want better security. New locks protect your property.

[[H3:Smart Locks]]
We install heavy-duty deadbolts. We install smart locks. You control access from your phone.

[[CTA:QUOTE]]

[[H3:Professional Help]]
A lock needs proper installation. We align your locks perfectly. We reinforce the door frame. The locks work smoothly. They protect your family.`,
  },
  {
    id: 'lock-replacement',
    name: 'Lock Replacement',
    slug: 'lock-replacement',
    description: 'Professional lock replacement for homes and businesses. Upgrade your security with modern, high-quality hardware.',
    icon: '🔄',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80',
    keywords: ['lock replacement', 'change locks', 'new door locks', 'high security lock upgrade'],
    updatedAt: new Date('2026-05-06'),
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
    content: `[[H2:Quick Lock Replacement]]
Your lock is broken. You lost track of spare keys. You need a replacement. We carry high-quality locks in our vans. We replace your locks in one visit.

[[CTA:BOOKING]]

[[H3:Commercial Upgrades]]
We match the right hardware to your door. We help you choose a lock. It looks great. It keeps intruders out.`,
  },
  {
    id: 'lock-repair',
    name: 'Lock Repair',
    slug: 'lock-repair',
    description: 'Expert lock repair for residential & commercial properties. Stuck locks, broken keys, and emergency repairs.',
    icon: '🛠️',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    keywords: ['lock repair', 'fix lock', 'stuck door lock', 'broken key extraction'],
    updatedAt: new Date('2026-05-06'),
    content: `[[H2:Fix Your Lock]]
A jammed lock does not mean a new purchase. We clean and lubricate the lock. We make minor alignment adjustments. Your lock works perfectly again.

[[CTA:PHONE]]

[[H3:Honest Assessments]]
We give you a transparent assessment. Repairing the lock saves money. We fix it. A lock is beyond saving. We explain the problem. We offer affordable replacement options.`,
  },
  {
    id: 'lock-rekeying',
    name: 'Lock Rekeying',
    slug: 'lock-rekeying',
    description: 'Change your keys without replacing your locks. 50% cheaper than replacement. Residential & commercial rekeying.',
    icon: '🔐',
    image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?auto=format&fit=crop&q=80',
    keywords: ['lock rekeying', 'rekey locks', 'change lock combination', 'master key system'],
    updatedAt: new Date('2026-05-06'),
    content: `[[H2:Change Your Keys]]
You just moved in. You fired an employee. You lost a spare key. You do not need to buy all new locks. We rekey your existing locks. We change the internal pins. The old keys stop working. We give you a new set of keys.

[[H3:Save Money]]
Rekeying is fast. It costs less than replacing all your hardware. It provides the exact same peace of mind.

[[CTA:QUOTE]]`,
  },
  {
    id: 'residential-lockout',
    name: 'Residential Lockout',
    slug: 'residential-lockout',
    description: 'Locked out of your home? Fast, damage-free entry. 20-minute response guarantee in Bed-Stuy. Available 24/7.',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1506784911079-53d9e945034b?auto=format&fit=crop&q=80',
    keywords: ['residential lockout', 'house lockout', 'locked out of home', 'emergency entry'],
    updatedAt: new Date('2026-05-06'),
    content: `[[H2:Fast Home Lockout Service]]
You are locked out of your home. You left your keys inside. The lock is jammed. We get you back inside quickly and safely.

[[H3:Damage-Free Entry]]
Our technicians use specialized lock-picking techniques. We open your door. We do not damage the lock. We do not damage the door frame. You save money on replacement costs.

[[CTA:PHONE]]`,
  },
  {
    id: '24-hour-emergency-locksmith',
    name: '24-Hour Emergency',
    slug: '24-hour-emergency-locksmith',
    description: 'Fast 24/7 emergency locksmith in Bed-Stuy. Car unlock, home, and business lockouts. 15-20 minute response time.',
    icon: '🚨',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    keywords: ['24 hour locksmith', 'emergency locksmith', '24/7 locksmith', 'immediate locksmith help'],
    updatedAt: new Date('2026-05-06'),
    content: `[[H2:Here For You]]
Emergencies happen at any time. Our dispatchers and mobile units are available 24 hours a day. We work 7 days a week. We work on weekends and holidays.

[[H3:Fast Response Times]]
You call us in the middle of the night. You speak to a real local technician. We arrive within 30 minutes anywhere in our service area. You are not left waiting outside in the dark.

[[CTA:PHONE]]`,
  },
];

// ─── LOCATIONS ────────────────────────────────────────────────────────────────

export const locations: Location[] = [
  {
    id: 'bed-stuy',
    name: 'Bed-Stuy',
    slug: 'bed-stuy',
    description: "The neighborhood's primary security partner since 2010. Expert locksmith service for Bed-Stuy's historic brownstones and commercial centers.",
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Stuyvesant Ave', 'Myrtle Ave', 'Nostrand Ave', 'Halsey St', 'Madison St', 'Marcy Ave', 'Tompkins Ave', 'Hancock St'],
    neighborhoods: ['Bed-Stuyvesant'],
    content: `[[H2:Fast Locksmith in Bed-Stuy]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Bed-Stuy locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Bed-Stuy. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Bed-Stuy. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'crown-heights',
    name: 'Crown Heights',
    slug: 'crown-heights',
    description: 'Expert locksmith service for Crown Heights. Fast 24/7 response on Nostrand Ave, Franklin Ave, and beyond.',
    image: 'https://images.unsplash.com/photo-1577058693126-77894101e44a?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Nostrand Ave', 'Utica Ave', 'Franklin Ave', 'Classon Ave', 'Underhill Ave', 'Prospect Place', 'St. Johns Place'],
    neighborhoods: ['Crown Heights'],
    content: `[[H2:Fast Locksmith in Crown Heights]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Crown Heights locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Crown Heights. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Crown Heights. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'prospect-heights',
    name: 'Prospect Heights',
    slug: 'prospect-heights',
    description: 'Sophisticated security solutions for Prospect Heights. Professional locksmith near Prospect Park and Vanderbilt Ave.',
    image: 'https://images.unsplash.com/photo-1577058693126-77894101e44a?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Vanderbilt Ave', 'Flatbush Ave', 'Classon Ave', 'Underhill Ave', 'Prospect Place', 'Sterling Place', 'St. Johns Place'],
    neighborhoods: ['Prospect Heights'],
    content: `[[H2:Fast Locksmith in Prospect Heights]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Prospect Heights locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Prospect Heights. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Prospect Heights. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'williamsburg',
    name: 'Williamsburg',
    slug: 'williamsburg',
    description: 'Williamsburg locksmith service for professionals and families. Fast response on Bedford Ave and Wythe Ave.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Bedford Ave', 'North 6th St', 'North 7th St', 'North 8th St', 'Wythe Ave', 'Kent Ave', 'East River Waterfront'],
    neighborhoods: ['Williamsburg'],
    content: `[[H2:Fast Locksmith in Williamsburg]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Williamsburg locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Williamsburg. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Williamsburg. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'greenpoint',
    name: 'Greenpoint',
    slug: 'greenpoint',
    description: 'Waterfront security experts. Professional locksmith service for Greenpoint homes and creative studios.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Franklin St', 'McGraw Ave', 'Greenpoint Ave', 'Noble St', 'Calyer St', 'Huron St', 'Newtown Creek'],
    neighborhoods: ['Greenpoint'],
    content: `[[H2:Fast Locksmith in Greenpoint]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Greenpoint locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Greenpoint. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Greenpoint. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'bushwick',
    name: 'Bushwick',
    slug: 'bushwick',
    description: 'Creative security for Bushwick lofts and residential homes. Fast 24/7 response on Myrtle Ave and Wyckoff Ave.',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Knickerbocker Ave', 'Myrtle Ave', 'Wyckoff Ave', 'Dekalb Ave', 'Jefferson St', 'Troutman St', 'Cypress Ave'],
    neighborhoods: ['Bushwick'],
    content: `[[H2:Fast Locksmith in Bushwick]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Bushwick locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Bushwick. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Bushwick. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'astoria',
    name: 'Astoria',
    slug: 'astoria',
    description: 'Trusted locksmith service for Astoria and Northwest Queens. Fast response for car keys and home security.',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Ditmars Blvd', 'Steinway St', '30th Ave', 'Broadway', 'Astoria Park', 'Vernon Blvd', '23rd Ave'],
    neighborhoods: ['Astoria', 'Queens'],
    content: `[[H2:Fast Locksmith in Astoria]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Astoria locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Astoria. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Astoria. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'long-island-city',
    name: 'Long Island City',
    slug: 'long-island-city',
    description: 'High-tech security for Long Island City residents and businesses. Fast response on Jackson Ave and Queens Plaza.',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Jackson Ave', 'Queens Plaza', 'Greenpoint Ave', 'Thomson Ave', '44th Drive', '45th Ave', 'Waterfront Park'],
    neighborhoods: ['Long Island City', 'LIC', 'Queens'],
    content: `[[H2:Fast Locksmith in Long Island City]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Long Island City locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Long Island City. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Long Island City. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'stuyvesant-heights',
    name: 'Stuyvesant Heights',
    slug: 'stuyvesant-heights',
    description: 'Specialized security for historic Stuyvesant Heights brownstones. We preserve architectural integrity while providing 2026-level protection.',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Stuyvesant Ave', 'MacDonough St', 'Decatur St', 'Bainbridge St', 'Chauncey St', 'Fulton St', 'Lewis Ave'],
    neighborhoods: ['Stuyvesant Heights', 'Bed-Stuy'],
    content: `[[H2:Fast Locksmith in Stuyvesant Heights]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Stuyvesant Heights locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Stuyvesant Heights. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Stuyvesant Heights. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
  {
    id: 'ocean-hill',
    name: 'Ocean Hill',
    slug: 'ocean-hill',
    description: 'Reliable 24/7 locksmith services for Ocean Hill residents. Fast emergency lockout response and lock replacement.',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    updatedAt: new Date('2026-05-06'),
    serviceAreas: ['Broadway', 'Rockaway Ave', 'Saratoga Ave', 'Eastern Pkwy', 'Atlantic Ave', 'Hull St', 'Somers St'],
    neighborhoods: ['Ocean Hill', 'Bed-Stuy'],
    content: `[[H2:Fast Locksmith in Ocean Hill]]
You are locked out of your apartment. You need to change the locks on a new business. You lost your car keys. We are your local Ocean Hill locksmith. Lock and key issues are stressful. We prioritize fast arrival times. We offer honest pricing.

[[H3:Emergency Lockout Services]]
You are locked out in Ocean Hill. Do not panic. Our mobile technicians are always nearby. We usually reach you within 30 minutes. We use damage-free techniques. We get you back inside quickly.

[[CTA:PHONE]]

[[H3:Lock Upgrades]]
You just moved into Ocean Hill. You want to improve your property security. We offer professional lock installation and replacement. We show you the best deadbolts and smart locks. We fit your door and budget.

[[CTA:QUOTE]]

[[H3:Automotive Services]]
Car lockouts happen. Lost keys happen. Ignition issues happen. Our vans are fully equipped. We cut and program new keys on the spot. You get back on the road. You avoid a tow truck.`,
  },
];

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: 'locked-out-car',
    title: 'Locked Out of Your Car? The Ultimate 2026 Guide to Safe Entry in Brooklyn',
    slug: 'locked-out-car',
    image: '/images/blog/car-lockout.png',
    description: "The most comprehensive guide to handling a car lockout in Bed-Stuy and NYC. From basic DIY safety to advanced Lishi decoding and 20-minute professional response strategies.",
    content: `[[H2:What to Do First]]
You are locked out of your car. This is frustrating. Take a deep breath. Check all the doors and the trunk. A back door is sometimes unlocked.

[[H3:Avoid Force]]
A coat hanger or wedge seems like a good idea. Modern car doors have complex wiring and airbags inside the panels. Forcing the door open causes expensive damage.

[[CTA:PHONE]]

[[H3:Call a Professional]]
A professional locksmith has the right tools. We unlock your car safely and quickly. We use specialized air wedges and precise decoding tools. We open your door. We do not leave a scratch.`,
    keywords: ['locked out of car', 'car lockout Bed-Stuy', 'professional car unlock NYC', 'non-destructive entry', 'Lishi decoding', 'Brooklyn locksmith'],
    publishedAt: new Date('2026-05-01'),
    updatedAt: new Date('2026-05-01'),
    author: 'Marcus D.',
    category: 'Emergency',
  },
  {
    id: 'prevent-lockouts',
    title: 'The Master Guide to Never Getting Locked Out Again: Behavioral & Tech Solutions',
    slug: 'prevent-lockouts',
    image: '/images/blog/prevent-lockouts.png',
    description: 'A deep dive into the psychology and technology of lockout prevention. From 2026 smart fobs to the "Key-in-Hand" rule, learn how to secure your freedom.',
    content: `[[H2:Simple Habits]]
We see it every day. You lock keys in the trunk. You leave them on the driver seat. A few simple habits save you a lot of hassle.

[[H3:The Carabiner Trick]]
Keep your car keys attached to a carabiner. Clip it to your belt loop or bag. The keys are always attached to you. You cannot lock them in the car.

[[H3:Get a Spare Key]]
The best prevention is a spare key. Keep it at home. Give it to a trusted friend or family member.

[[CTA:QUOTE]]`,
    keywords: ['prevent car lockout', 'spare key strategy', 'smart lock benefits', 'lockout prevention NYC', 'digital keys 2026', 'NFC car keys'],
    publishedAt: new Date('2026-05-02'),
    updatedAt: new Date('2026-05-02'),
    author: 'Sarah J.',
    category: 'Tips',
  },
  {
    id: 'car-key-replacement-guide',
    title: 'The 2026 Ultimate Guide to Car Key Replacement: Tech, Cost, and Speed',
    slug: 'car-key-replacement-guide',
    image: '/images/blog/car-key-replacement.png',
    description: 'Lost your only car key? Modern keys are complex computers. Learn how laser cutting and transponder programming work in this 2500-word authority guide.',
    content: `[[H2:Lost Your Car Keys]]
You lost your only car key. We can help you get a new one. You do not tow your car to the dealership.

[[H3:What We Need]]
We cut and program a new key on the spot. We need to know the make and model of your car. We need the year of your car. We need to see proof of ownership. We need your registration and ID.

[[CTA:PHONE]]

[[H3:Transponder Keys]]
Most modern cars use keys with chips inside them. We have computer equipment in our vans. We program these keys to your car computer. We delete the lost key. Nobody can use it to steal your car.`,
    keywords: ['car key replacement', 'transponder key programming', 'laser cut keys', 'lost car keys Brooklyn', 'VIN key decoding', 'NYC automotive locksmith'],
    publishedAt: new Date('2026-05-03'),
    updatedAt: new Date('2026-05-03'),
    author: 'David L.',
    category: 'Guide',
  },
  {
    id: 'ignition-problems',
    title: 'Stuck Car Ignition? The 2026 Master Guide to Repair & Replacement',
    slug: 'ignition-problems',
    image: '/images/blog/ignition-problems.png',
    description: "When your key won't turn, it's a mechanical emergency. Learn the technical science of ignition wafers, steering locks, and why a locksmith is your best choice for repair.",
    content: `[[H2:Key Stuck]]
Your key is stuck in the ignition. Your key will not turn. Do not force it. You can break the key off inside the cylinder. This makes the problem much worse.

[[H3:Common Causes]]
The steering wheel is sometimes locked tightly against the ignition mechanism. Gently wiggle the steering wheel back and forth. Turn the key at the same time. The key might be worn out. The internal pins in the ignition might be damaged.

[[CTA:PHONE]]

[[H3:Mobile Service]]
Ignition repair is tricky. Our mobile technicians diagnose and fix the problem. We do this right where your car is parked.`,
    keywords: ['car ignition repair', 'stuck ignition key', 'ignition cylinder replacement', 'Brooklyn automotive locksmith', 're-pinning ignition', 'steering lock failure'],
    publishedAt: new Date('2026-05-04'),
    updatedAt: new Date('2026-05-04'),
    author: 'David L.',
    category: 'Technical',
  },
  {
    id: 'home-security-checklist',
    title: 'The 2026 Definitive Brooklyn Home Security Audit: A Master Checklist',
    slug: 'home-security-checklist',
    image: '/images/blog/home-security.png',
    description: "Secure your brownstone or condo with our 2500-word deep dive into professional residential security. From strike plate physics to smart home integration.",
    content: `[[H2:Home Security Checklist]]
Keeping your home safe is simple. Start by checking the basics.

[[H3:Check Your Deadbolts]]
Every exterior door needs a deadbolt. The bolt must fully extend into the door frame. You push or pull the door hard to lock it. The strike plate needs adjustment.

[[CTA:QUOTE]]

[[H3:Secure Windows]]
Do not forget the back of the house. Sliding doors need a rod in the track. They need a specialized pin lock. All ground-floor windows must lock securely.`,
    keywords: ['home security checklist', 'Brooklyn residential security', 'brownstone security tips', 'high security locks NYC', 'strike plate reinforcement', 'smart lock installation'],
    publishedAt: new Date('2026-05-05'),
    updatedAt: new Date('2026-05-05'),
    author: 'Sarah J.',
    category: 'Security',
  },
  {
    id: 'lock-replacement-guide',
    title: 'The 2026 Homeowner’s Master Guide to Lock Replacement: Hardware & Security',
    slug: 'lock-replacement-guide',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80',
    description: "Upgrade your security with confidence. Our 2500-word guide covers every technical aspect of lock replacement for Brooklyn properties, from Grade 1 hardware to smart integration.",
    content: `[[H2:Time for New Locks]]
Locks wear out over time. You jiggle your key to make it work. The lock is nearing the end of its life.

[[H3:Moving In]]
The number one rule of moving into a new apartment is to change the locks. You never know who has spare keys.

[[CTA:BOOKING]]

[[H3:Better Security]]
Older locks are easily picked or bumped. You upgrade to modern pick-resistant deadbolts. This improves your home security.`,
    keywords: ['lock replacement guide', 'when to change locks', 'high security door locks Brooklyn', 'ANSI Grade 1 locks', 'new home lock upgrade', 'NYC lock installation'],
    publishedAt: new Date('2026-05-06'),
    updatedAt: new Date('2026-05-06'),
    author: 'Robert K.',
    category: 'Guide',
    videoUrl: 'https://www.youtube.com/embed/tgbNymZ7vqY',
  },
  {
    id: 'lock-repair-vs-replacement',
    title: 'Lock Repair vs. Replacement: The 2026 Economics of Security',
    slug: 'lock-repair-vs-replacement',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80',
    description: "Don't overspend on security. Our 2500-word deep dive helps you choose between repair and replacement based on mechanical health, historic value, and total cost of ownership.",
    content: `[[H2:Fix It or Replace It]]
A lock stops working. You wonder what to do. You can buy a new one or fix the old one.

[[H3:When to Repair]]
The lock is high-quality but sticky. It just needs cleaning and lubrication. The door sags. The lock just needs realignment with the frame.

[[CTA:PHONE]]

[[H3:When to Replace]]
The internal parts are rusted. The internal parts are worn down. The lock is a cheap model. Replacement is the safer choice. It saves money in the long run.`,
    keywords: ['lock repair vs replacement', 'cost to fix locks NYC', 'rekeying vs replacing', 'historic lock preservation', 'locksmith advice Brooklyn', 'mortise lock repair'],
    publishedAt: new Date('2026-05-07'),
    updatedAt: new Date('2026-05-07'),
    author: 'Marcus D.',
    category: 'Guide',
  },
  {
    id: 'high-security-locks',
    title: 'The Master’s Guide to High-Security Locks: Physics, Law, and 2026 Tech',
    slug: 'high-security-locks',
    image: 'https://images.unsplash.com/photo-1614362948307-319d9b7f1225?auto=format&fit=crop&q=80',
    description: "Don't settle for standard protection. Our 2500-word authority guide explores the world of UL 437 rated locks, pick-proof technology, and patented key control for Brooklyn properties.",
    content: `[[H2:High Security]]
Not all locks are created equal. The deadbolts at a hardware store offer basic protection. High-security locks offer a different level of safety.

[[H3:Pick Resistance]]
High-security locks use complex pin systems. They are nearly impossible to pick. They feature hardened steel inserts. These stop drills from destroying the lock cylinder.

[[CTA:QUOTE]]

[[H3:Key Control]]
High-security locks have key control. You cannot get a copy of the key made without a special authorization card.`,
    keywords: ['high security locks', 'Mul-T-Lock Brooklyn', 'Medeco locks NYC', 'UL 437 standards', 'pick proof locks', 'patented key control', 'locksmith expertise'],
    publishedAt: new Date('2026-05-08'),
    updatedAt: new Date('2026-05-08'),
    author: 'Robert K.',
    category: 'Security',
  },
  {
    id: 'emergency-locksmith-tips',
    title: 'Locked Out at 3 AM? The 2026 Survival Guide to Finding a Real Locksmith',
    slug: 'emergency-locksmith-tips',
    image: 'https://images.unsplash.com/photo-1543674892-7d64d45df18b?auto=format&fit=crop&q=80',
    description: "Don't fall for a scam during a crisis. Our 2500-word survival guide explains NYC locksmith laws, how to spot 'Bait and Switch' tactics, and how to verify professional credentials.",
    content: `[[H2:Find a Reliable Locksmith]]
You are locked out. You call the first number you see online. Verify the locksmith first. This saves you from a scam.

[[H3:Local Roots]]
The locksmith needs a local presence. Avoid out-of-state call centers. Ask them for a realistic arrival time. Ask for a clear price estimate.

[[CTA:PHONE]]

[[H3:Verify Licensing]]
In New York City, locksmiths require a license. The Department of Consumer Affairs issues this. A professional locksmith shows you their license.`,
    keywords: ['emergency locksmith tips', 'avoid locksmith scams NYC', 'licensed locksmith Brooklyn', '24 hour locksmith Bed-Stuy', 'lockout help', 'NYC locksmith law'],
    publishedAt: new Date('2026-05-09'),
    updatedAt: new Date('2026-05-09'),
    author: 'Marcus D.',
    category: 'Emergency',
  },
  {
    id: 'lock-maintenance',
    title: 'The 2026 Master Guide to Lock Maintenance: Chemistry & Structural Health',
    slug: 'lock-maintenance',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80',
    description: "Save thousands in replacement costs. Our 2500-word deep dive explains the technical science of lock lubrication, door alignment, and preventative care for Brooklyn properties.",
    content: `[[H2:Lock Maintenance]]
A little maintenance prevents a lockout.

[[H3:Use the Right Lubricant]]
Do not use WD-40 in a lock. It attracts dirt and dust. It jams the pins. Use a dry Teflon or graphite powder lubricant once a year. The key turns smoothly.

[[CTA:BOOKING]]

[[H3:Door Alignment]]
You lift or push the door to turn the deadbolt. You put a lot of stress on the lock mechanism. Realign the door. Adjust the strike plate. This saves your lock from breaking.`,
    keywords: ['lock maintenance guide', 'how to lubricate locks', 'door alignment tips', 'PTFE vs Graphite', 'NYC home maintenance', 'extend lock life', 'smart lock battery care'],
    publishedAt: new Date('2026-05-10'),
    updatedAt: new Date('2026-05-10'),
    author: 'Robert K.',
    category: 'Tips',
  },
  {
    id: 'bed-stuy-locksmith-guide',
    title: 'The Bed-Stuy Community Safety Guide: Architecture & Security',
    slug: 'bed-stuy-locksmith-guide',
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&q=80',
    description: "We've been part of the Bed-Stuy community since 2010. Our 2500-word guide explores the specific security trends of our neighborhood and how to protect our historic assets.",
    content: `[[H2:Your Local Partner]]
We serve the Bed-Stuy community. We know the neighborhood. We know the historic brownstone doors. We know our neighbors.

[[H3:More Than Emergencies]]
We are always here for a lockout. Our real passion is community safety. We offer free security walk-throughs. We point out vulnerabilities. We offer common-sense solutions.

[[CTA:PHONE]]

[[H3:Supporting Local]]
You hire us. You hire a local business. We care about the community. We are the locksmith Bed-Stuy trusts.`,
    keywords: ['Bed-Stuy locksmith guide', 'Brooklyn community safety', 'brownstone security specialist', 'local locksmith Bed-Stuy', 'historic lock repair', 'NYC neighborhood security'],
    publishedAt: new Date('2026-05-11'),
    updatedAt: new Date('2026-05-11'),
    author: 'Marcus D.',
    category: 'Local',
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Maria R.',
    location: 'Bed-Stuy',
    content: 'I was locked out of my car on a Saturday night. They arrived in 18 minutes and had me back in my car in 5 minutes. Professional, quick, and fair price. Highly recommend!',
    rating: 5,
    date: new Date('2026-03-15'),
  },
  {
    id: '2',
    author: 'James T.',
    location: 'Williamsburg',
    content: 'Called for a residential lockout. The technician was courteous, quick, and didn\'t damage my door. Will definitely call again.',
    rating: 5,
    date: new Date('2026-03-08'),
  },
  {
    id: '3',
    author: 'David L.',
    location: 'Greenpoint',
    content: 'Best locksmith in Brooklyn. Fast response, honest pricing, and they actually know what they\'re doing. Five stars!',
    rating: 5,
    date: new Date('2026-02-28'),
  },
  {
    id: '4',
    author: 'Sarah M.',
    location: 'Crown Heights',
    content: 'Locked out of my house with my kids inside. They responded in 15 minutes and got me back inside safely. Thank you!',
    rating: 5,
    date: new Date('2026-02-20'),
  },
  {
    id: '5',
    author: 'Michael T.',
    location: 'Prospect Heights',
    content: "I've used them multiple times. Always trustworthy, always fair pricing, always professional. Highly recommend.",
    rating: 5,
    date: new Date('2026-02-12'),
  },
  {
    id: '6',
    author: 'Jennifer L.',
    location: 'Bushwick',
    content: 'Called for a car lockout. They opened my car without any damage. No hassle, fair price, great service.',
    rating: 5,
    date: new Date('2026-01-30'),
  },
  {
    id: '7',
    author: 'Robert K.',
    location: 'Astoria',
    content: 'Locked out at 2 AM. They answered immediately and arrived within 20 minutes. Professional and fair. Thank you!',
    rating: 5,
    date: new Date('2026-01-15'),
  },
  {
    id: '8',
    author: 'Patricia W.',
    location: 'Long Island City',
    content: 'They told me I could rekey my locks instead of replacing them, which saved me money. Honest and reliable. Highly recommend.',
    rating: 4,
    date: new Date('2026-01-05'),
  },
];

// ─── FAQS ─────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    question: 'How quickly can you respond?',
    answer: 'We aim for 20-minute arrival in most cases across Bed-Stuy and surrounding areas. Call (718) 568-6597 for specific timing.',
  },
  {
    question: 'Are you available 24/7?',
    answer: 'Yes, we are available 24 hours a day, 7 days a week — including nights, weekends, and holidays. Call (718) 568-6597 anytime.',
  },
  {
    question: 'Do you charge extra for emergency or after-hours service?',
    answer: "No. We do not charge emergency surcharges or after-hours fees. What you see is what you pay — always fair, transparent pricing.",
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and insured. We operate professionally and stand behind our work.',
  },
  {
    question: 'What areas do you serve?',
    answer: 'We serve Bed-Stuy and a 5-mile radius: Crown Heights, Prospect Heights, Williamsburg, Greenpoint, Bushwick, Astoria, and Long Island City.',
  },
  {
    question: 'Will you damage my car or door when unlocking it?',
    answer: 'No. We use non-destructive techniques and professional tools. We respect your property and work carefully every time.',
  },
  {
    question: 'Can you make a new car key on the spot?',
    answer: 'Yes. We cut and program replacement keys on-site for most vehicle makes and models, including transponder and remote keys.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, credit cards, and debit cards. Payment is due upon completion of service.',
  },
];
