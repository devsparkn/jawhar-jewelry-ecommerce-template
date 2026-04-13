type QuoteCardProps = {
  quote: string;
  author: string;
  location: string;
};

export function QuoteCard({ quote, author, location }: QuoteCardProps) {
  return (
    <article className="bg-zinc-800 rounded-4xl p-8 text-center">
      <p className="luxury-title text-4xl text-(--gold)">&quot;</p>
      <p className="luxury-title mt-4 text-2xl leading-relaxed">{quote}</p>
      <div className="mt-8">
        <p className="text-sm tracking-[0.18em] uppercase">{author}</p>
        <p className="mt-2 text-xs tracking-[0.28em] uppercase">
          {location}
        </p>
      </div>
    </article>
  );
}
