import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogPostMeta } from "@/content/blog";

// ─── Phase 5: BlogCard ──────────────────────────────────────────────────
// Blog card for listing pages. Cover renders only when coverImage is set
// (verified file on disk) — never a placeholder or mismatched image.
export function BlogCard({ post }: { post: BlogPostMeta }) {
  return (
    <article className="group bg-card-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col ring-1 ring-border-light/60">
      {post.coverImage && (
        <Link href={post.url} className="block h-48 overflow-hidden relative">
          <Image
            src={post.coverImage}
            alt={post.title}
            width={800}
            height={472}
            className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
            loading="lazy"
          />
        </Link>
      )}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-title-md text-title-md text-on-surface font-bold leading-snug">
          <Link href={post.url} className="group-hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h3>
        <div className="mt-auto pt-5">
          <Link
            href={post.url}
            className="font-label-sm text-label-sm text-primary font-bold inline-flex items-center gap-1.5 hover:gap-2.5 transition-all"
          >
            <span>Read article</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
