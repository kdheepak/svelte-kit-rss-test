function xml() {
  return `<?xml version="1.0"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Blog</title>
    <description>My blogs</description>
    <link>https://blog.domain.com/</link>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <pubDate>${new Date().toUTCString()}</pubDate>
    <language>en-us</language>
    <copyright>Copyright 2021</copyright>
    <atom:link href="https://blog.domain.com/rss.xml" rel="self" type="application/rss+xml"/>
    <generator>website</generator>
    <item>
      <title>Title</title>
      <link>https://blog.domain.com/slug</link>
      <guid isPermaLink="true">https://blog.domain.com/slug</guid>
      <atom:link href="https://blog.domain.com/slug" rel="self"></atom:link>
      <pubDate>${new Date().toUTCString()}</pubDate>
      <description>summary</description>
    </item>
  </channel>
</rss>`
}

export async function get() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml',
  }
  return {
    headers,
    body: xml(),
  }
}
