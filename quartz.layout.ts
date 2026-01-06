import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "Source code": "",
      "Youtube": "https://www.youtube.com/@8bit_amo",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.MobileOnly(Component.ContentMeta()),
    Component.MobileOnly(Component.TagList()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Graph()),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.ContentMeta()),
    Component.DesktopOnly(Component.TagList()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.MobileOnly(Component.ContentMeta()),
    Component.MobileOnly(Component.TagList()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Graph()),
    Component.Explorer(),
  ],
  right: [
    Component.DesktopOnly(Component.ContentMeta()),
    Component.DesktopOnly(Component.TagList()),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
