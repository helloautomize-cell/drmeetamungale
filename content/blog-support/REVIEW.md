# Blog support articles — review log

Articles land `reviewConfirmed: false`: the byline reads
"Published by Mungale Eye Hospital", no `Medically reviewed by …` line,
and the schema carries no `reviewedBy`. When the owner sends
"CONFIRM REVIEW" with a date, set `reviewConfirmed: true` and
`reviewedOn` on the article file; the byline, doctor cards and schema
`reviewedBy` then activate automatically.

## TODO(doctor)

(none yet)

## Notes

- Sibling links use `link:N` (queue number) in article sources. They
  resolve to real `/blog/<slug>/` URLs only once that article is
  registered in `content/blog-support/index.ts`; until then the anchor
  renders as plain text and unpublished "Keep reading" items are
  omitted.
- The build fails loudly if a link anchor cannot be matched to body
  text (see `linksWithNth` in `index.ts`).
