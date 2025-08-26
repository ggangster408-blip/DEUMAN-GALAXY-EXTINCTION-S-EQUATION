import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Search, Moon, Sun, ChevronDown, Sparkles, Image as ImageIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";

/**
 * DEUMAN GALAXY: EXTINCTION’S EQUATION — Single‑file React site
 *
 * ✅ TailwindCSS for styling
 * ✅ shadcn/ui components
 * ✅ Chapter-wise opening format (accordion + full-screen dialog)
 * ✅ Search + tags + cover image
 * ✅ Lightweight theming toggle (dark/light)
 *
 * How to customize:
 * - Replace HERO_IMAGE and chapter cover URLs.
 * - Edit the `chapters` array to add real text.
 * - Optional: Toggle `excerptOnly` to show/hide long content.
 */

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1974&auto=format&fit=crop";

// ---- Editable Chapter Data ---- //
const initialChapters = [
  {
    id: "ch1",
    number: 1,
    title: "Ashes Over Kaen’Vos",
    cover:
      "https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?q=80&w=2070&auto=format&fit=crop",
    tags: ["Ojas", "Nova", "Kaen’Vos"],
    teaser:
      "The sky station eclipses the battlefield; the beasts hold their breath as a voice crawls out of the metal walls…",
    content:
      `Beasts poised to charge froze as the flying station swallowed the sun. A name—forgotten by history—was etched along its spine. Ojas steadied his squad: Nova’s violet bob flashed beneath her visor; Arav cracked a joke no one answered. Vidhi read the wind like scripture. And far below, the planet Kaen’Vos throbbed awake.`,
  },
  {
    id: "ch2",
    number: 2,
    title: "Extinction’s Equation",
    cover:
      "https://images.unsplash.com/photo-1451186859696-371d9477be93?q=80&w=2069&auto=format&fit=crop",
    tags: ["Strategy", "Cipher", "Deuman"],
    teaser:
      "Numbers coil like serpents across the war table—Vidhi finds the pattern that kills or saves a world.",
    content:
      `In the static hiss of the command deck, Vidhi stacked variables—mass, migration, memory—until a shape emerged. Not victory, exactly. An equation for everything that could die if they were wrong by even one heartbeat.`,
  },
  {
    id: "ch3",
    number: 3,
    title: "Nova’s Choice",
    cover:
      "https://images.unsplash.com/photo-1473929730940-6c8891a0b8ad?q=80&w=1974&auto=format&fit=crop",
    tags: ["Nova", "Sacrifice"],
    teaser:
      "A door in the station opens onto a corridor of starlight—and the cost of brilliance.",
    content:
      `Nova’s fingers hovered above the fail-safe. Genius is a quiet kind of courage, she decided, then pressed where fear ended and faith began.`,
  },
];

export default function DeumanGalaxySite() {
  const [dark, setDark] = useState(true);
  const [query, setQuery] = useState("");
  const [chapters, setChapters] = useState(initialChapters);
  const [heroUrl, setHeroUrl] = useState(HERO_IMAGE);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    if (!q) return chapters;
    return chapters.filter((c) =>
      [c.title, c.teaser, c.content, ...(c.tags || [])]
        .join(" ")
        .toLowerCase()
        .includes(q)
    );
  }, [query, chapters]);

  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-screen bg-zinc-50 text-zinc-900 transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        {/* Header / Hero */}
        <div className="relative isolate">
          <div className="absolute inset-0 -z-10">
            <img
              src={heroUrl}
              alt="Deuman Galaxy hero"
              className="h-[48vh] w-full object-cover brightness-90 dark:brightness-[0.65]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 to-zinc-900/10" />
          </div>

          <header className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-zinc-900/70 ring-1 ring-white/10 backdrop-blur dark:bg-white/10">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-zinc-200">Storyverse</p>
                <h1 className="text-lg font-semibold text-white">DEUMAN GALAXY</h1>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setDark((d) => !d)}
                className="rounded-2xl"
                aria-label="Toggle theme"
              >
                {dark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </header>

          <div className="mx-auto max-w-6xl px-4 pb-8 pt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid gap-4 md:grid-cols-[2fr,1fr]"
            >
              <Card className="bg-zinc-900/60 text-white ring-1 ring-white/10 backdrop-blur-lg dark:bg-zinc-900/60">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-2xl md:text-3xl">
                    <BookOpen className="h-6 w-6" /> EXTINCTION’S EQUATION
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3 text-zinc-200">
                  <p>
                    A cinematic sci‑fi saga of strategy, sacrifice, and a galaxy
                    deciding what deserves to survive.
                  </p>
                  <p className="text-sm text-zinc-300">
                    Meet Ojas, Nova, Arav, and Vidhi as they stand beneath a
                    sky‑station that swallows the sun.
                  </p>
                </CardContent>
              </Card>

              <Card className="ring-1 ring-white/10 backdrop-blur">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Cover Image</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <ImageIcon className="h-4 w-4 opacity-70" />
                    <p className="text-sm opacity-80">Paste a new image URL to change the hero cover.</p>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="https://example.com/your-cover.jpg"
                      onChange={(e) => setHeroUrl(e.target.value || HERO_IMAGE)}
                    />
                    <Button onClick={() => setHeroUrl(HERO_IMAGE)} variant="secondary">
                      Reset
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="sticky top-0 z-20 border-b border-zinc-200/50 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="mx-auto flex max-w-6xl items-center gap-2 px-4 py-3">
            <div className="relative w-full md:w-1/2">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 opacity-60" />
              <Input
                className="pl-9"
                placeholder="Search chapters, characters, moments…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="rounded-2xl">Add Chapter</Button>
              </DialogTrigger>
              <AddChapterDialog onAdd={(c) => setChapters((prev) => [...prev, c])} />
            </Dialog>
          </div>
        </div>

        {/* Chapters List */}
        <main className="mx-auto max-w-6xl px-4 py-8">
          <section>
            <h2 className="mb-4 text-xl font-semibold tracking-tight">Chapters</h2>
            {filtered.length === 0 ? (
              <p className="rounded-xl border border-dashed p-6 text-center text-sm opacity-70">
                No chapters match your search.
              </p>
            ) : (
              <Accordion type="multiple" className="space-y-3">
                {filtered
                  .sort((a, b) => a.number - b.number)
                  .map((c) => (
                    <ChapterCard key={c.id} chapter={c} />
                  ))}
              </Accordion>
            )}
          </section>
        </main>

        <footer className="border-t border-zinc-200/60 py-8 text-center text-xs text-zinc-500 dark:border-zinc-800">
          <p>
            © {new Date().getFullYear()} Deuman Galaxy — A fan/author site for
            "Extinction’s Equation".
          </p>
        </footer>
      </div>
    </div>
  );
}

function ChapterCard({ chapter }) {
  return (
    <AccordionItem
      value={chapter.id}
      className="overflow-hidden rounded-2xl border border-zinc-200/70 bg-white shadow-sm transition hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
    >
      <AccordionTrigger className="px-4 py-0">
        <div className="flex w-full items-center gap-4 py-3 text-left">
          <img
            src={chapter.cover}
            alt={chapter.title}
            className="h-16 w-24 flex-none rounded-xl object-cover ring-1 ring-zinc-200/70 dark:ring-zinc-800"
            loading="lazy"
          />
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-zinc-500">
              <span>Chapter {chapter.number}</span>
              <span>•</span>
              {(chapter.tags || []).slice(0, 3).map((t) => (
                <span key={t} className="rounded-full bg-zinc-100 px-2 py-0.5 dark:bg-zinc-800">
                  {t}
                </span>
              ))}
            </div>
            <h3 className="truncate text-base font-semibold md:text-lg">{chapter.title}</h3>
            <p className="line-clamp-2 text-sm opacity-80">{chapter.teaser}</p>
          </div>
          <ChevronDown className="ml-auto h-5 w-5 opacity-60 transition-transform data-[state=open]:rotate-180" />
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="grid gap-4 px-4 pb-4 md:grid-cols-[1fr,2fr]">
          <div className="space-y-3">
            <img
              src={chapter.cover}
              alt={chapter.title}
              className="w-full rounded-xl object-cover ring-1 ring-zinc-200/70 dark:ring-zinc-800"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full rounded-xl" variant="secondary">
                  Read Chapter
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-3xl">
                <DialogHeader>
                  <DialogTitle>
                    Chapter {chapter.number}: {chapter.title}
                  </DialogTitle>
                  <DialogDescription>
                    {chapter.tags && chapter.tags.length > 0 && (
                      <div className="mt-1 flex flex-wrap gap-2">
                        {chapter.tags.map((t) => (
                          <span
                            key={t}
                            className="rounded-full bg-zinc-100 px-2 py-0.5 text-[11px] dark:bg-zinc-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </DialogDescription>
                </DialogHeader>
                <article className="prose prose-zinc dark:prose-invert">
                  <p className="whitespace-pre-wrap leading-7">{chapter.content}</p>
                </article>
              </DialogContent>
            </Dialog>
          </div>
          <div className="space-y-2">
            <p className="text-sm leading-7 opacity-90">{chapter.content}</p>
          </div>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}

function AddChapterDialog({ onAdd }) {
  const [title, setTitle] = useState("");
  const [number, setNumber] = useState(1);
  const [teaser, setTeaser] = useState("");
  const [cover, setCover] = useState("");
  const [tags, setTags] = useState("");
  const [content, setContent] = useState("");

  return (
    <DialogContent className="sm:max-w-xl">
      <DialogHeader>
        <DialogTitle>Add a Chapter</DialogTitle>
        <DialogDescription>
          Provide a title, number, optional tags, and your story text. You can
          paste any image URL for the chapter cover.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-3">
        <div className="grid gap-2">
          <label className="text-sm">Title</label>
          <Input value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Number</label>
          <Input
            type="number"
            value={number}
            min={1}
            onChange={(e) => setNumber(parseInt(e.target.value || "1", 10))}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Tags (comma‑separated)</label>
          <Input
            placeholder="Ojas, Nova, Strategy"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Teaser</label>
          <Textarea value={teaser} onChange={(e) => setTeaser(e.target.value)} />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Cover Image URL</label>
          <Input
            placeholder="https://…"
            value={cover}
            onChange={(e) => setCover(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Chapter Text</label>
          <Textarea
            className="min-h-[160px]"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              const newChapter = {
                id: crypto.randomUUID(),
                number: Number.isFinite(number) ? number : 1,
                title: title || "Untitled",
                teaser,
                cover: cover || "https://images.unsplash.com/photo-1527443224154-c4d576348b82?q=80&w=1935&auto=format&fit=crop",
                tags: tags
                  .split(",")
                  .map((t) => t.trim())
                  .filter(Boolean),
                content: content || "(Your chapter text…)",
              };
              onAdd(newChapter);
            }}
            className="rounded-2xl"
          >
            Save Chapter
          </Button>
        </div>
      </div>
    </DialogContent>
  );
}
