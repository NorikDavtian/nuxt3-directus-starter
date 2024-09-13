import RSS from 'rss';
import {createDirectus, rest, readItem, readItems} from '@directus/sdk';

const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com'
const apiUrl = process.env.DIRECTUS_URL || 'https://api.example.com';
const client = createDirectus(apiUrl).with(rest());

export default defineEventHandler(async (event) => {
    try {
        // https://example.com/items/post?filter[status][_eq]=published
        const home = await client.request(readItem("home", 1));
        const pages = await client.request(readItems("page", {
            filter: {
                status: {_eq: 'published'},
            },
            sort: "-date_created"
        }));


        const posts = await client.request(readItems("post", {
            filter: {
                status: {_eq: 'published'},
            },
            sort: "-date_created",
            limit: 12,
            offset: 0
        }));
        // throw an error if the response is not ok
        if ([home, posts, pages].some(item => item === undefined)) {
            throw new Error("Sitemap Not available, please try again.");
        }

        // create new rss feed this will be our channel tag with website title and url
        const feed = new RSS({
            title: process.env.SITE_TITLE, // @TODO get this from home feed
            site_url: siteUrl, // link to your website/blog
            feed_url: `${siteUrl}/rss`, // path to your rss feed
        });
        feed.item({
            title: home.title,
            description: home.connection_cta,
            url: siteUrl,
            date: new Date().toLocaleDateString(),
            author: "Plato" // @TODO add relation to user
        });
        // loop over each collection
        for (const post of posts) {
            feed.item({
                description: post.title,
                title: post.title,
                url: `${siteUrl}/posts/${post.slug}`,
                date: new Date(post.date_created).toLocaleDateString(),
                author: "Plato", // @TODO add relation to user
                categories: post.tags // list of tags
            });
        }
        for (const page of pages) {
            feed.item({
                description: page.meta_description,
                title: page.title, // title from post to item title
                url: `${siteUrl}/${page.slug}`, // full path to where our article is hosted
                date: new Date(page.date_created).toLocaleDateString(), // date post was created
                author: "Norik Davtian", // @TODO add relation to user
            });
        }
        const feedString = feed.xml({indent: true}); //This returns the XML as a string.

        event.node.res.setHeader('content-type', 'text/xml'); // we need to tell nitro to return this as a xml file
        event.node.res.end(feedString); // send the HTTP response
    } catch (e) {
        // return an error
        console.error("Error", e);
        return e;
    }
});