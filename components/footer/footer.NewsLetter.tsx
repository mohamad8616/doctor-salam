import { FormEvent } from "react";

const NewsLetter = () => {
  const handleNewsletterSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // integrate API later
  };
  return (
    <section aria-labelledby="newsletter-title" className="lg:order-1 order-2">
      <div className="rounded-xl border bg-card p-6 shadow-sm">
        <h3 id="newsletter-title" className="mb-2 text-lg font-semibold">
          عضویت در خبرنامه
        </h3>

        <p className="mb-4 text-sm text-muted-foreground">
          جدیدترین مقالات و اخبار سلامت را دریافت کنید
        </p>

        <form onSubmit={handleNewsletterSubmit} className="space-y-3">
          <label htmlFor="newsletter-email" className="sr-only">
            ایمیل
          </label>

          <input
            id="newsletter-email"
            type="email"
            required
            dir="ltr"
            placeholder="email@example.com"
            className="w-full rounded-md border bg-background px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />

          <button
            type="submit"
            className="w-full rounded-md bg-primary py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition"
          >
            عضویت
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsLetter;
