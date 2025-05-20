# takeaways

## thoughts

trying to keep everything minimal: strict with class usage etc, use selector pseudo-classes instead of classes, many general css declarations.

## specifics

- :nth-child()
  .nth-child() needs to be applied at the child/sibling-level, not the parent-level.
- scroll & bookmarks
  for full page scrolls, scroll-snap-type; x/y mandatory; needs to go in html (body for safari), and scroll-snap-align: start; goes on page elements. add scroll-behavior: smooth; to scroll between bookmark anchors. add scroll-snap-stop: always; to prevent scrolling past pages.
