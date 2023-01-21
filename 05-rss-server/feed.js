import RSSParser from "rss-parser";

const feedURL = "https://netflixtechblog.com/feed";
const parser = new RSSParser();

const parse = async url => {
    const feed = await parser.parseURL(url);

    console.log(feed.title);

    feed.items.forEach(item => {
        console.log(`${item.title}\n${item.link}\n\n`);
    })
}

parse(feedURL)