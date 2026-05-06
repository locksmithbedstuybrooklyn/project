import { Service, Location, BlogPost, Testimonial } from '@/types';

// ─── SERVICES ─────────────────────────────────────────────────────────────────

export const services: Service[] = [
  {
    id: 'automotive-locksmith',
    name: 'Automotive Locksmith',
    slug: 'automotive-locksmith',
    description: 'Professional car lockout, key replacement, and ignition repair services in Bed-Stuy. 24/7 mobile service for all vehicle types.',
    icon: '🚗',
    keywords: ['automotive locksmith', 'car lockout', 'car key replacement', 'ignition repair'],
  },
  {
    id: 'lock-installation',
    name: 'Lock Installation',
    slug: 'lock-installation',
    description: 'Expert lock installation for residential & commercial. Deadbolts, smart locks, mortise, and high-security hardware.',
    icon: '🔒',
    keywords: ['lock installation', 'install deadbolt', 'smart lock installation'],
  },
  {
    id: 'lock-replacement',
    name: 'Lock Replacement',
    slug: 'lock-replacement',
    description: 'Professional lock replacement for homes and businesses. Upgrade your security with modern, high-quality hardware.',
    icon: '🔄',
    keywords: ['lock replacement', 'change locks', 'new door locks'],
  },
  {
    id: 'lock-repair',
    name: 'Lock Repair',
    slug: 'lock-repair',
    description: 'Expert lock repair for residential & commercial properties. Stuck locks, broken keys, and emergency repairs.',
    icon: '🛠️',
    keywords: ['lock repair', 'fix lock', 'stuck door lock'],
  },
  {
    id: 'lock-rekeying',
    name: 'Lock Rekeying',
    slug: 'lock-rekeying',
    description: 'Change your keys without replacing your locks. 50% cheaper than replacement. Residential & commercial rekeying.',
    icon: '🔐',
    keywords: ['lock rekeying', 'rekey locks', 'change lock combination'],
  },
  {
    id: 'residential-lockout',
    name: 'Residential Lockout',
    slug: 'residential-lockout',
    description: 'Locked out of your home? Fast, damage-free entry. 20-minute response guarantee in Bed-Stuy. Available 24/7.',
    icon: '🏠',
    keywords: ['residential lockout', 'house lockout', 'locked out of home'],
  },
  {
    id: '24-hour-emergency-locksmith',
    name: '24-Hour Emergency',
    slug: '24-hour-emergency-locksmith',
    description: 'Fast 24/7 emergency locksmith in Bed-Stuy. Car, home, and business lockouts. 15-20 minute response time.',
    icon: '🚨',
    keywords: ['24 hour locksmith', 'emergency locksmith', '24/7 locksmith'],
  },
];


// ─── LOCATIONS ────────────────────────────────────────────────────────────────

export const locations: Location[] = [
  {
    id: 'bed-stuy',
    name: 'Bed-Stuy',
    slug: 'bed-stuy',
    description: "Bed-Stuyvesant is our home. We've served this neighborhood since 2010. We know the streets, the buildings, the parking challenges. Fast response, fair prices, quality work.",
    serviceAreas: ['Stuyvesant Ave', 'Myrtle Ave', 'Nostrand Ave', 'Halsey St', 'Madison St', 'Marcy Ave', 'Tompkins Ave', 'Hancock St'],
    neighborhoods: ['Bed-Stuyvesant'],
  },
  {
    id: 'crown-heights',
    name: 'Crown Heights',
    slug: 'crown-heights',
    description: 'Crown Heights residents trust us for all their locksmith needs. Fast emergency response on Nostrand Ave, Utica Ave, Franklin Ave and surrounding streets.',
    serviceAreas: ['Nostrand Ave', 'Utica Ave', 'Franklin Ave', 'Classon Ave', 'Underhill Ave', 'Prospect Place', 'St. Johns Place'],
    neighborhoods: ['Crown Heights'],
  },
  {
    id: 'prospect-heights',
    name: 'Prospect Heights',
    slug: 'prospect-heights',
    description: 'Prospect Heights residents know they can count on us. Professional locksmith service near Prospect Park, Vanderbilt Ave and Flatbush Ave.',
    serviceAreas: ['Vanderbilt Ave', 'Flatbush Ave', 'Classon Ave', 'Underhill Ave', 'Prospect Place', 'Sterling Place', 'St. Johns Place'],
    neighborhoods: ['Prospect Heights'],
  },
  {
    id: 'williamsburg',
    name: 'Williamsburg',
    slug: 'williamsburg',
    description: 'Williamsburg locksmith service for young professionals and families. Fast response on Bedford Ave, Wythe Ave, North 6th St and nearby streets.',
    serviceAreas: ['Bedford Ave', 'North 6th St', 'North 7th St', 'North 8th St', 'Wythe Ave', 'Kent Ave', 'East River Waterfront'],
    neighborhoods: ['Williamsburg'],
  },
  {
    id: 'greenpoint',
    name: 'Greenpoint',
    slug: 'greenpoint',
    description: 'Greenpoint locksmith service for artists, families, and young professionals. Fast response on Franklin St, McGraw Ave, and Greenpoint Ave.',
    serviceAreas: ['Franklin St', 'McGraw Ave', 'Greenpoint Ave', 'Noble St', 'Calyer St', 'Huron St', 'Newtown Creek'],
    neighborhoods: ['Greenpoint'],
  },
  {
    id: 'bushwick',
    name: 'Bushwick',
    slug: 'bushwick',
    description: 'Bushwick locksmith service for a vibrant community. Professional service on Knickerbocker Ave, Myrtle Ave, Wyckoff Ave, and surrounding streets.',
    serviceAreas: ['Knickerbocker Ave', 'Myrtle Ave', 'Wyckoff Ave', 'Dekalb Ave', 'Jefferson St', 'Troutman St', 'Cypress Ave'],
    neighborhoods: ['Bushwick'],
  },
  {
    id: 'astoria',
    name: 'Astoria',
    slug: 'astoria',
    description: 'Astoria locksmith service for Queens residents. Fast response on Ditmars Blvd, Steinway St, 30th Ave, and surrounding neighborhoods.',
    serviceAreas: ['Ditmars Blvd', 'Steinway St', '30th Ave', 'Broadway', 'Astoria Park', 'Vernon Blvd', '23rd Ave'],
    neighborhoods: ['Astoria', 'Queens'],
  },
  {
    id: 'long-island-city',
    name: 'Long Island City',
    slug: 'long-island-city',
    description: 'Long Island City locksmith service for LIC residents and businesses. Fast response on Jackson Ave, Queens Plaza, and the waterfront area.',
    serviceAreas: ['Jackson Ave', 'Queens Plaza', 'Greenpoint Ave', 'Thomson Ave', '44th Drive', '45th Ave', 'Waterfront Park'],
    neighborhoods: ['Long Island City', 'LIC', 'Queens'],
  },
];

// ─── BLOG POSTS ───────────────────────────────────────────────────────────────

export const blogPosts: BlogPost[] = [
  {
    id: 'locked-out-car',
    title: 'Locked Out of Your Car? The Ultimate Guide to Safe Entry in NYC',
    slug: 'locked-out-car',
    image: '/images/blog/car-lockout.png',
    description: "Locked out of your car in Bed-Stuy? Don't panic. Our expert guide explains the safest non-destructive entry methods, what to avoid, and how to get back on the road in 20 minutes.",
    content: `## The Stress of a NYC Car Lockout
Getting locked out of your vehicle is more than an inconvenience; in the fast-paced environment of Brooklyn, it's a disruption that can derail your entire day. Whether you're parked near Herbert Von King Park or stuck on a busy stretch of Fulton Street, the feeling of looking through the window at your keys on the driver's seat is universal.

In 2026, vehicle security systems have become increasingly sophisticated, making old-school "slim jim" methods not only obsolete but dangerous to your car's internal electronics and door linkages. This guide provides expert insights into professional [automotive locksmith](/services/automotive-locksmith) techniques and what you should do immediately to resolve the situation safely.

## Step 1: Immediate Safety and Assessment
Before you reach for a coat hanger or attempt to pry the door frame, take a moment to assess your surroundings. If you are in a high-traffic area at night or if there is a child or pet inside the vehicle, this is a high-priority emergency. 

1. **Verify your location**: Use your phone to get an exact cross-street.
2. **Check all doors**: It sounds simple, but often a trunk or a rear door might have been left unlocked.
3. **Avoid DIY prying**: Modern cars have curtain airbags and complex wiring harnesses inside the door pillars. Amateur prying can cause thousands of dollars in damage.

## Professional Non-Destructive Entry Methods
A reputable [24-hour emergency locksmith](/services/24-hour-emergency-locksmith) uses specialized tools designed to bypass locks without leaving a scratch. 

### The Air Wedge Technique
Most professional technicians use a high-grade air wedge. This tool is inserted between the door frame and the body, then gently inflated to create just enough clearance for a long-reach tool. This method preserves the weather stripping and prevents bending the door frame.

### Lishi Tools and Decoders
For high-end vehicles like BMW, Mercedes, or Tesla, we often use Lishi picks. These tools allow a technician to "decode" the lock wafers individually, effectively picking the lock as if using the original key. This is the gold standard of [lock repair](/services/lock-repair) and entry, as it involves zero physical stress on the vehicle's frame.

## Why You Should Avoid "Cheap" Locksmith Scams
NYC is unfortunately home to many "bait and switch" locksmith operations. They might quote $19 on the phone but charge $200+ once they arrive. A legitimate service will provide a clear "starting from" price and explain potential complications upfront. Always ensure your locksmith is licensed and insured before they touch your vehicle.

## How to Get Back on the Road Fast
If you find yourself stranded, the fastest path to resolution is calling a local specialist who understands the geography of Bed-Stuy. Our mobile units are equipped with the latest diagnostic tools to not only unlock your car but also provide [car key replacement](/services/automotive-locksmith) on the spot if you've lost your keys entirely.

Don't let a lockout ruin your day. You can [book a service](/booking) online or get an instant [price quote](/quote) to see our transparent rates. For immediate assistance, call us at (718) 568-6597.`,
    keywords: ['locked out of car', 'car lockout Bed-Stuy', 'professional car unlock NYC', 'non-destructive entry'],
    publishedAt: new Date('2026-05-01'),
    updatedAt: new Date('2026-05-01'),
    author: 'Marcus D.',
    category: 'Emergency',
  },
  {
    id: 'prevent-lockouts',
    title: 'How to Never Get Locked Out of Your Car Again: 5 Expert Habits',
    slug: 'prevent-lockouts',
    image: '/images/blog/prevent-lockouts.png',
    description: 'Stop the cycle of emergency calls. Learn the professional habits and technology upgrades that can make car lockouts a thing of the past.',
    content: `## The Psychology of the Lockout
Most lockouts happen during transitions—unloading groceries, rushing to a meeting, or dealing with a distracted child. It only takes a split second of diverted attention to leave your keys behind. However, by implementing a few strategic habits and utilizing 2026 technology, you can effectively eliminate the need for a [residential lockout](/services/residential-lockout) or car unlock service.

## 1. The "Key-in-Hand" Rule
The most effective habit is the simplest: never close your car door or front door without physically feeling the keys in your hand. Many people rely on the "auto-lock" feature of their vehicles, which is a leading cause of lockouts when a fob battery is low or a sensor fails.

## 2. Smart Technology Upgrades
In the modern era, physical keys are becoming secondary. 
- **Smart Locks**: For your home, consider a [lock installation](/services/lock-installation) featuring biometric or keypad entry. This ensures you can always get in with a code or fingerprint.
- **Digital Car Keys**: Many 2024-2026 vehicle models allow you to use your smartphone or Apple Watch as a digital key. Ensure this is set up and that you've shared a "digital spare" with a trusted family member.

## 3. The Trusted Spare Strategy
Hiding a key under a doormat or in a magnetic box under the car is a security risk. Instead:
- **The Human Network**: Give a spare key to a neighbor or a friend who lives within 10 minutes of you.
- **Professional Key Storage**: Some high-security services offer "key holding," though a trusted friend is usually more practical for local Bed-Stuy residents.

## 4. Maintenance Matters
Sometimes a lockout isn't caused by a forgotten key, but by a mechanical failure. Locks that are difficult to turn or fobs that only work "sometimes" are warning signs. Regular [lock maintenance](/blog/lock-maintenance) and timely [lock repair](/services/lock-repair) can prevent a total mechanical failure that leaves you stranded.

## 5. Prepare for the Inevitable
Even with the best habits, accidents happen. Keep the number of a trusted [24-hour locksmith](/services/24-hour-emergency-locksmith) saved in your phone. Having a pre-vetted professional like Bed-Stuy Locksmith on speed dial saves you from the stress of searching for a reliable provider during a crisis.

If you're ready to upgrade your home security to prevent future issues, check out our [lock replacement options](/services/lock-replacement) or [request a free security consultation](/quote) today.`,
    keywords: ['prevent car lockout', 'spare key strategy', 'smart lock benefits', 'lockout prevention NYC'],
    publishedAt: new Date('2026-05-02'),
    updatedAt: new Date('2026-05-02'),
    author: 'Sarah J.',
    category: 'Tips',
  },
  {
    id: 'car-key-replacement-guide',
    title: 'The 2026 Guide to Car Key Replacement: Dealership vs. Locksmith',
    slug: 'car-key-replacement-guide',
    image: '/images/blog/car-key-replacement.png',
    description: 'Lost your only transponder key? Modern car keys are complex computers. Learn why a mobile locksmith is often faster and cheaper than the dealership.',
    content: `## The Evolution of the Car Key
The days of getting a car key cut at a hardware store for $5 are long gone. In 2026, a car key is a sophisticated electronic device that communicates with your vehicle's Engine Control Unit (ECU) via encrypted signals. Whether it's a transponder key, a switchblade fob, or a "smart" proximity key, replacing one requires specialized hardware and software.

When you lose your keys in Brooklyn, you have two main options: towing your car to the dealership or calling a mobile [automotive locksmith](/services/automotive-locksmith). Here is a technical breakdown of why the choice matters.

## Dealership Challenges: Time and Cost
Most people assume the dealership is the "safest" bet, but it often comes with significant downsides:
1. **Towing Costs**: If you've lost your only key, you must tow the vehicle to their service center.
2. **Waiting Periods**: Dealerships often don't keep every key blank in stock. You might wait 3-5 business days for a key to arrive from the manufacturer.
3. **Premium Pricing**: Dealership overhead means you'll likely pay 40-60% more for the same programming service.

## The Mobile Locksmith Advantage
A professional [emergency locksmith](/services/24-hour-emergency-locksmith) brings the "dealership" to your curb. 

### On-Site Key Coding
Modern locksmith vans are mobile laboratories. We use OBD-II diagnostic tools to interface directly with your car's computer. We can delete old, lost keys from the system (preventing theft) and program new high-security keys on the spot.

### Laser Key Cutting
High-security keys (often called "sidewinder" or "laser-cut" keys) require a computerized CNC cutting machine. We carry these machines in our vans, allowing us to cut keys to factory specifications based on your vehicle's VIN or by decoding the existing [ignition cylinder](/services/lock-repair).

## What to Have Ready
To speed up the process, ensure you have:
- **Proof of Ownership**: Title or registration in your name.
- **Identification**: A valid driver's license.
- **VIN Number**: Usually found on the dashboard or driver-side door jamb.

## Pricing Expectations
While a basic metal key might be affordable, a full proximity fob for a 2025 SUV involves hardware costs and complex labor. We pride ourselves on transparent pricing. You can check our [price estimator](/price-estimator) or [request a quote](/quote) for your specific make and model.

Need a spare before you lose your last one? [Booking a duplicate key service](/booking) today is much cheaper than an emergency replacement tomorrow. Call us at (718) 568-6597 for expert help.`,
    keywords: ['car key replacement', 'transponder key programming', 'lost car keys Brooklyn', 'fob replacement cost'],
    publishedAt: new Date('2026-05-03'),
    updatedAt: new Date('2026-05-03'),
    author: 'David L.',
    category: 'Guide',
  },
  {
    id: 'ignition-problems',
    title: 'Stuck Ignition? 5 Signs Your Car Needs a Locksmith, Not a Mechanic',
    slug: 'ignition-problems',
    image: '/images/blog/ignition-problems.png',
    description: "When your key won't turn, it might not be a transmission issue. Learn the signs of ignition cylinder failure and why a locksmith is your best bet for repair.",
    content: `## The Frustration of a Non-Turning Key
You sit in your car, insert the key, and... nothing. It won't budge. Before you call a tow truck to a mechanic, you should know that many "no-start" issues are actually mechanical failures within the [ignition cylinder](/services/lock-repair), not the engine itself. 

In the high-vibration environment of NYC driving, ignition components wear down over time. This guide helps you diagnose whether you need a mechanic or a specialized [automotive locksmith](/services/automotive-locksmith).

## Sign 1: The Key Won't Turn (Mechanical Bind)
If the key won't move to the "On" or "Start" position, the wafers inside the cylinder are likely worn or bent. A mechanic will often suggest replacing the entire steering column or ignition housing—a $1,000+ job. A locksmith can often perform an [ignition repair](/services/lock-repair) by simply replacing the internal wafers and "re-pinning" the cylinder to work with your existing key.

## Sign 2: The Key is Stuck in the Ignition
This is a common emergency. If the cylinder won't return to the "Off" position, you cannot remove the key and your battery will likely drain. This is often caused by a failure in the parking-interlock solenoid or a collapsed wafer. A professional [24-hour locksmith](/services/24-hour-emergency-locksmith) can extract the key and repair the mechanism without damaging the surrounding trim.

## Sign 3: You Have to "Jiggle" the Key
If you've developed a habit of jiggling the key to get it to turn, you are on borrowed time. This "jiggle" is the result of worn-out brass components. Eventually, the metal will shear off entirely, leaving you stranded. This is the perfect time to [book a preventative maintenance appointment](/booking) before it becomes an emergency.

## Sign 4: The Ignition Only Works with One Key
If you have two keys and only one works, the problem is the key. If neither works, the problem is the cylinder. Locksmiths can use "code cutting" to create a fresh key that matches factory specs, often solving "sticky" ignition issues instantly.

## Sign 5: Metal Shavings in the Keyway
If you see tiny silver or gold flakes near the ignition, the internal components are grinding themselves down. This requires immediate [lock replacement](/services/lock-replacement) of the cylinder to prevent a total lockout.

## Why Choose a Locksmith for Ignition Work?
Locksmiths are specialists in small-scale precision engineering. We can often save your original ignition, meaning you won't need two different keys for your doors and your car. 

Don't wait until you're stuck in a parking lot at night. Get an [instant quote](/quote) for ignition repair or call us at (718) 568-6597. We serve all of Bed-Stuy with mobile, on-site repairs.`,
    keywords: ['ignition repair', 'stuck car key', 'ignition cylinder replacement', 'locksmith vs mechanic'],
    publishedAt: new Date('2026-05-04'),
    updatedAt: new Date('2026-05-04'),
    author: 'David L.',
    category: 'Guide',
  },
  {
    id: 'residential-lock-security',
    title: 'Brooklyn Brownstone Security: A Guide to High-Security Locks',
    slug: 'residential-lock-security',
    image: '/images/blog/home-lock-security.png',
    description: "Protecting your Bed-Stuy home requires more than just a standard deadbolt. Learn about Grade 1 hardware, smart lock integration, and why Brooklyn residents are upgrading to high-security systems.",
    content: `## The Unique Security Needs of Bed-Stuy
Living in a Brooklyn brownstone or a modern apartment complex comes with specific security challenges. From high-traffic street levels to common entry points, your front door is your first and most important line of defense. In 2026, a standard "big box store" lock is no longer enough to deter sophisticated intruders.

Upgrading your [residential security](/services/residential-lockout) starts with understanding what makes a lock "high-security" and why it's worth the investment for your peace of mind.

## What is a High-Security Lock?
Not all locks are created equal. Professionals categorize locks by "Grades" (1, 2, or 3). For residential entry, you should always aim for **ANSI Grade 1**—the highest level of durability and security.

### Key Features of High-Security Systems:
1. **Pick and Bump Resistance**: Standard locks can be opened in seconds using "bump keys" or basic picks. High-security locks like Mul-T-Lock or Medeco use complex pin-within-a-pin designs that are virtually impossible to bypass.
2. **Drill Protection**: These locks feature hardened steel inserts that destroy drill bits, preventing forced entry.
3. **Key Control**: This is the most underrated feature. With a high-security [lock installation](/services/lock-installation), keys can ONLY be duplicated by an authorized locksmith with your specific security card. No more worrying about a former tenant or contractor making a copy of your key at a kiosk.

## Integrating Smart Technology
Many Bed-Stuy residents are moving toward a hybrid approach. You can enjoy the convenience of a [smart lock](/services/lock-installation) (keyless entry, remote access) while maintaining the physical integrity of a high-security deadbolt. We specialize in installing smart systems that work with NYC's unique door thicknesses and mortise lock configurations.

## Common Security Vulnerabilities to Check
- **The Strike Plate**: If your strike plate is held in by 1/2-inch screws, a single kick can open your door. We recommend 3-inch screws that anchor directly into the wall stud.
- **Window Proximity**: If you have a window near your door, a single-cylinder deadbolt is a risk. An intruder can break the glass and reach in to turn the thumb-turn.
- **Worn Hardware**: A loose lock is an easy target. If your hardware is wobbly, it's time for a professional [lock repair](/services/lock-repair).

## Taking Action
Don't wait for a security breach to evaluate your home. A professional [lock replacement](/services/lock-replacement) is a one-time investment that protects your family for decades. 

Ready to secure your brownstone? You can [book a security audit](/booking) or [get a free quote](/quote) for high-security hardware today. For immediate service, call us at (718) 568-6597. We've been securing Bed-Stuy since 2010.`,
    keywords: ['high security locks Brooklyn', 'brownstone security', 'Grade 1 deadbolt', 'smart lock installation NYC'],
    publishedAt: new Date('2026-05-05'),
    updatedAt: new Date('2026-05-05'),
    author: 'Robert K.',
    category: 'Security',
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
