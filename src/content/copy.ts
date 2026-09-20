export const brand = {
  name: 'NOTHING.',            // used in <title>, schema, and body headlines
  navWordmark: 'The Nothing Project', // shown in the top nav (small text at the top of every page)
  wordmark: 'NOTHING.',        // shown as the large hero headline
  taglinePrimary: '100% Guaranteed Absence of Matter.',
  taglineFootnote: '(Results may vary based on existential outlook.)',
  taglineOriginal:
    "You can't get something for nothing, but you can get nothing for something.",
  taglinePivot:
    "You couldn't get nothing for something. So now you can get nothing for nothing.",
  gagPositioning:
    'The perfect gag gift for the person who has everything.',
  designedIn: 'Designed in Delray Beach, FL',
  foundedBy: 'DevMiser',
};

export const hero = {
  eyebrow: brand.gagPositioning,
  headline: 'NOTHING.',
  subheadline: brand.taglinePrimary,
  footnote: brand.taglineFootnote,
  kickstarterNote: 'The Kickstarter was a parody. The plans are real. Both are free.',
  primaryCta: 'Get the plans — free',
  primaryCtaHref: '#diy',
  secondaryCta: 'Watch the video',
  secondaryCtaHref: '#video',
  ctaSubtext: 'Two files. One box. Zero dollars.',
};

export const kickstarterPivot = {
  heading: 'A note about the Kickstarter.',
  body: [
    'The Nothing Project was originally created as a parody Kickstarter project. It was posted with an intentionally unrealistic funding goal for a premium empty Nothing box with a questionably clever Owner\'s manual.',
    'Our original tagline, which is still printed on the box, is: "You can\'t get something for nothing, but you can get nothing for something."',
    'But now you can get nothing for nothing (aside from a little effort).',
  ],
};

export const whatIsNothing = {
  heading: 'What is Nothing?',
  intro: [
    'In an era of digital noise, infinite notifications, and clutter, we realized the world was missing one vital thing: Nothing.',
    'We spent months in R&D (Research and De-materialization) to strip away everything unnecessary — features, functionality, and purpose — to bring you a product that demands nothing of you.',
  ],
  productCopy: [
    'Nothing is a 4.5" × 3" × 3" industrial-chic box, designed to be manufactured from corrugated material. The exterior of the box features a matte charcoal finish with white print that describes the contents, features, safety warnings and storage instructions — including our original tagline: "You can\'t get something for nothing, but you can get nothing for something."',
    'Nothing comes with a meticulously written, one-page double-sided Owner\'s Manual that details 22 ways you can utilize your new void.',
  ],
  stressTest: {
    label: 'Use Example from Owner\'s Manual: The Relationship Stress-Test.',
    quote:
      'Give this to a partner. If they laugh, they are a keeper. If they look inside and ask, "Where is the rest of it?", they are clearly not ready for the profound depth of your philosophical emptiness. It is cheaper than couples counseling and significantly more portable.',
  },
  specs: [
    { label: 'Box Dimensions', value: '4.5″ × 3″ × 3″' },
    { label: 'Material', value: 'Corrugated cardstock (recommended)' },
    { label: 'Print', value: 'Any black-and-white or color printer' },
    { label: 'Origin', value: 'Your printer / any print shop / Packola' },
    { label: 'Includes', value: 'One-page double-sided Owner\'s Manual (22 recommended uses)' },
    { label: 'Contents', value: 'Nothing' },
  ],
};

export const diy = {
  heading: 'Make your own Nothing.',
  intro:
    'Two files. Print, fold, assemble. Total build time: under ten minutes. Total cost: whatever your printer charges you, which for most people is nothing.',
  careNote: {
    heading: 'DIY is the whole point.',
    body:
      'A store-bought gift takes a credit card. A homemade Nothing takes a printer, some cardstock, ten minutes with a hobby knife, and the small act of folding a piece of paper into thirds. The effort IS the message. Anyone can spend money on a gag gift. Making one yourself, and handing it to someone, tells them you cared enough to fold nothing on purpose. For them.',
  },
  steps: [
    {
      n: '01',
      title: 'Download and print the Owner\'s Manual.',
      body: [
        'The one-page, double-sided Owner\'s Manual containing 22 recommended uses for your Nothing. Includes safety warnings and storage instructions.',
        'Print settings: US Letter or A4, double-sided (flip on long edge), black-and-white, 100% scale (do not "fit to page").',
      ],
      cta: 'Download the Owner\'s Manual (PDF, 60 KB)',
      href: '/owners-manual.pdf',
      preview: {
        images: [
          {
            src: '/images/manual-page-1.png',
            alt: 'Page 1 of the Nothing Owner\'s Manual — the front side.',
            caption: 'Page 1 (front)',
          },
          {
            src: '/images/manual-page-2.png',
            alt: 'Page 2 of the Nothing Owner\'s Manual — the back side.',
            caption: 'Page 2 (back)',
          },
        ],
      },
      folding: {
        heading: 'Then fold it to fit in the box:',
        instructions: [
          'Fold once vertically down the middle.',
          'Fold once horizontally in half.',
          'Fold once more horizontally in half.',
          'The finished manual should be roughly 4.25″ × 2.75″ — small enough to sit comfortably inside the Nothing.',
        ],
      },
    },
    {
      n: '02',
      title: 'Download the box layout.',
      body: [
        'The die-cut layout for the Nothing box itself. Two ways to use it:',
      ],
      options: [
        {
          title: 'Print and assemble yourself.',
          body:
            'Print at 100% scale on cardstock (65 lb / 176 gsm or heavier is recommended). Cut along solid lines, fold along dashed lines, glue or tape the tabs. Charcoal cardstock gives the best result; white works too.',
        },
        {
          title: 'Send it to a proper print shop.',
          body:
            'Upload the layout to a custom-box service like Packola, PakFactory, or PackMojo as a die-line template. Choose matte charcoal corrugated with white water-based print for the closest match to the original design. Minimum order is usually 25–100 units — worth it if you\'re making them as gifts.',
        },
      ],
      cta: 'Download the box layout (PNG, 495 KB)',
      href: '/box-layout.png',
      preview: {
        images: [
          {
            src: '/box-layout.png',
            alt: 'The Nothing box die-line layout, printable on cardstock.',
            caption: 'Print at 100% scale on cardstock. Cut solid lines, fold dashed lines.',
          },
        ],
      },
    },
    {
      n: '03',
      title: 'Combine, then give it away.',
      body: [
        'Place the folded Owner\'s Manual inside the assembled box. Close the box.',
        'That\'s it. You now own Nothing. But the real move is to give it to someone — the ten minutes you spent folding it are, in a very literal sense, the gift.',
      ],
    },
  ],
  disclaimer:
    'The design files are released under the MIT License, for personal and small-batch commercial use (with attribution). Please don\'t mass-produce counterfits for sale.',
};

export const video = {
  heading: 'Give them Nothing.',
  subheading:
    'A short film about the perfect gift for the person who has everything.',
  src: '/images/give-them-nothing.mp4',
  poster: '/images/video-poster.png',
};

export const whyNow = {
  heading: 'Why now?',
  body: [
    'In an era of deepfakes, AI, and digital hallucinations, Nothing is refreshingly real. It doesn\'t require a software update, it won\'t track your data, and it will never ask you to "accept all cookies."',
    'It is the only product that is compatible with everything you already own.',
  ],
};

export const whyNothing = {
  heading: 'Why Nothing?',
  pillars: [
    {
      title: 'The Perfect Gag Gift',
      body: 'For the person who literally has everything.',
    },
    {
      title: 'Eco-Friendly',
      body: '100% recyclable, 0% carbon footprint from internal components (because there aren\'t any).',
    },
    {
      title: 'Mental Clarity',
      body: 'A physical anchor for your mindfulness practice.',
    },
    {
      title: 'DIY-Friendly',
      body: 'The only novelty product where a home-printed version is functionally identical to the deluxe original.',
    },
  ],
};

export const legacy = {
  heading: 'The Nothing Legacy',
  body: [
    'When people ask what you\'re leaving behind for future generations, you can show them the Nothing box. It represents the clutter you didn\'t buy, the plastic you didn\'t throw away, and the peace of mind you did acquire.',
    'Like Swedish death cleaning, only easier.',
  ],
};

export const finalCta = {
  heading: 'Print Nothing. Fold Nothing. Give Nothing.',
  body: brand.taglinePivot,
  primaryCta: 'Get the plans — free',
  primaryCtaHref: '#diy',
};

export const footer = {
  tagline: brand.taglineOriginal,
  taglineNote: 'The original tagline. Still on the box.',
  designedIn: brand.designedIn,
  license: 'Design files released under the MIT License.',
  copyright: `© ${new Date().getFullYear()} ${brand.foundedBy}. All rights, like the contents of the box, reserved.`,
  links: [
    { href: '/#diy', label: 'DIY' },
    { href: '/story', label: 'Story' },
    { href: '/press', label: 'Press' },
    { href: '/#faq', label: 'FAQ' },
    { href: '/terms', label: 'Terms' },
    { href: '/privacy', label: 'Privacy' },
  ],
};

export const story = {
  heading: 'Why I made Nothing.',
  body: [
    'I first thought of selling Nothing when I was a kid. Yeah, I\'m old now too. But back in the day, comic books had ads for novelties and gags like Sea Monkeys, X-Ray Specs, Itching Powder and Whoopee Cushions. I thought Nothing would make a natural fit.',
    'But I was a kid, and the thought passed. Until a few months ago, when I finally decided to do it — sort of.',
    'I designed the box. I wrote the 22-use Owner\'s Manual. I photographed a prototype. I launched a Kickstarter to fund a first production run. But the funding goal was set intentionally unrealistically high — because the whole point was that no rational person would back a premium empty box, and watching them not-fund it was itself the joke.',
    'They didn\'t. As designed.',
    'The commercial version of Nothing was never really the point. The DIY version — the one you make in your kitchen with a printer and some tape, and hand to someone who will laugh at it — is arguably more on-brand anyway.',
    'The original tagline is still on the box: "You can\'t get something for nothing, but you can get nothing for something." The Kickstarter proved the first half. Now, if you want to, you can settle the second half yourself — by making one, and giving it to someone.',
  ],
};

export const press = {
  heading: 'Press.',
  intro:
    'Design files, brand basics, and background on The Nothing Project — the parody Kickstarter, the free DIY release, and the general concept.',
  assets: [
    { label: 'Owner\'s Manual (PDF)', href: '/owners-manual.pdf' },
    { label: 'Box layout (PNG)', href: '/box-layout.png' },
    { label: 'Product hero photo (PNG)', href: '/images/the-nothing-project.png' },
    { label: 'Give Them Nothing (video, MP4)', href: '/images/give-them-nothing.mp4' },
  ],
  oneLiner:
    'NOTHING. is a 100% guaranteed absence of matter, conceived as a parody Kickstarter product and released as a free DIY design under the MIT License.',
};

export const notFound = {
  heading: 'Nothing here.',
  body: 'As intended.',
  cta: 'Get the plans — free',
  ctaHref: '/#diy',
};
