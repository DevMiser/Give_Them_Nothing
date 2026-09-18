export type FaqEntry = { q: string; a: string };

export const faq: FaqEntry[] = [
  {
    q: 'Wait, so this is free?',
    a: 'Yes. The two design files — the Owner\'s Manual and the box layout — are released for free download. The idea was to sell finished boxes via Kickstarter. That didn\'t fund. Rather than shelve everything, we\'re releasing the plans.',
  },
  {
    q: 'What do I actually need to make one?',
    a: 'A printer, some paper for the manual, cardstock (65 lb / 176 gsm or heavier) for the box, scissors or a hobby knife, and glue or double-sided tape. Ten minutes.',
  },
  {
    q: 'How do I print the Owner\'s Manual?',
    a: 'US Letter or A4, double-sided, flipped on the long edge, at 100% scale. Do not "fit to page" — the layout is designed for exact dimensions.',
  },
  {
    q: 'How do I fold the manual to fit inside the box?',
    a: 'Fold it once vertically down the middle, then twice horizontally (into thirds). The finished manual should be roughly 2.75″ × 1.5″.',
  },
  {
    q: 'Can I get a "real" one printed on cardboard?',
    a: 'Yes. Upload the box layout to a custom-box print service like Packola, PakFactory, or PackMojo as a die-line. Choose matte charcoal corrugated with white water-based print for the closest match to the original design. Minimum orders are typically 25–100 units.',
  },
  {
    q: 'What if I open it and there\'s actually something inside?',
    a: 'Then you did it wrong. Remove the something. Try again.',
  },
  {
    q: 'Can I sell these?',
    a: 'Please don\'t mass-produce and sell counterfeits. Making a few for friends, a corporate gag-gift run for your office, or selling small quantities at a local market is fine. We are definitely not in the process of trademarking "Nothing." Imitation is the sincerest form of flattery. We are totally unprepared to defend the purity of our Nothing against low-quality "Something" imitators.',
  },
  {
    q: 'Why did the Kickstarter fail?',
    a: 'A combination of things: modest reach, a price point that read as "too high for a joke" and "too low to be premium" simultaneously, and the specific philosophical problem that people are, in fact, more comfortable getting nothing for nothing than getting nothing for something. The joke is on us. That is also on-brand.',
  },
  {
    q: 'Is Nothing real?',
    a: 'Yes. The box is real, the printing is real, the folding is real. Only the contents are not.',
  },
];
