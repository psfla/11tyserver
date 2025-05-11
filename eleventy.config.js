export const config = {
  dir: {
    input: "sitefiles/"
  }
};

import { feedPlugin } from "@11ty/eleventy-plugin-rss";
import pluginRss from "@11ty/eleventy-plugin-rss";

export default function (eleventyConfig) {
	// Copy `random-folder/img/` to `_site/subfolder/img`
	eleventyConfig.addPassthroughCopy({ "sitefiles/_data/leeet.json": "a/13337/leeet.json" });
	eleventyConfig.addPassthroughCopy("sitefiles/a/13337/files/");
	eleventyConfig.addPassthroughCopy("sitefiles/a/testadventure/files/");
	eleventyConfig.addPassthroughCopy("sitefiles/favicon.ico");
	eleventyConfig.addPassthroughCopy("sitefiles/resc/");
	
	eleventyConfig.addDataExtension("geojson", (contents) =>
		JSON.parse(contents)
	);
	
	eleventyConfig.addPlugin(feedPlugin, {
		type: "rss", // or "atom", "json"
		outputPath: "/blog.xml",
		collection: {
			name: "blog", // iterate over `collections.blog`
			limit: 0,     // 0 means no limit
		},
		metadata: {
			language: "en",
			title: "PSFLA blog",
			subtitle: "blogposts for the website psfla.net!",
			base: "https://psfla.net/",
			author: {
				name: "jade floase",
				email: "", // Optional
			}
		}
	});
	eleventyConfig.addPlugin(pluginRss);
	eleventyConfig.addLiquidFilter("dateToRfc3339", pluginRss.dateToRfc3339);
	eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
};