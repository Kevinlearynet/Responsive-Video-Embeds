# Responsive Video Embeds

**Contributors:** kevinlearynet  
**Tags:** responsive, video, embeds, embed, object, iframe, youtube, vimeo, viddler, dailymotion, bliptvmobile, html5 video, oembed, embed discovery, auto-embed, automatic, auto, scribd, wordpress.tv, hulu, revision3, resize  
**Requires at least:** 3.0  
**Tested up to:** 3.6.1  
**Stable tag:** trunk  

Automatic responsive resizing for WordPress embeds, including video and other iframes.

## Description

When activated, this plugin will automatically resize WordPress auto-embeds. This includes video along with other `iframe` based embeds. Currently this supports the following providers:

* YouTube
* Vimeo
* DailyMotion
* Blip.tv
* Viddler
* hulu.com
* Revision 3
* Funny or Die
* WordPress.tv
* Scribd

### Live Example

[Visit the test page](http://www.kevinleary.net/responsive-video-embeds-plugin-example/) to see it in action, where you can resize the browser and watch the videos automatically scale to fit the resolution.

### About WordPress Auto-embeds

WordPress has a nifty auto-embed feature, allowing authors to automatically turn a link to a video embed into a video player when a post is viewed. 

**If you're using WordPress 3.5 or below, you'll need to enable the auto-embed feature by checking the *Auto-embeds* check box in *Administration > Settings > Media SubPanel*.**

### Under the hood

Please note that this plugins modifies the output of `embed_oembed_html` filter, adding HTML, CSS and small amount of JS to make the magic happen when videos are found on a post or page.

### Multisite Compatibility

The *Responsive Video Embeds* plugin is compatible with WordPress Multisite, just use the [Network Activate](http://codex.wordpress.org/Create_A_Network#WordPress_Plugins) feature to enable responsive video resizing embed on every site. If you only want responsive video resizing to happen on a specific site, activate the plugin for that site only.

## Installation

1. Install easily with the WordPress plugin control panel or manually download the plugin and upload the folder `responsive-video-embeds` to the `/wp-content/plugins/` directory 
2. Activate the plugin through the 'Plugins' menu in WordPress
3. In the WordPress admin, enable the **Auto-embeds** feature under the **Settings > Media** menu.
4. Embed your videos using the [auto embed feature](http://codex.wordpress.org/Embeds) provided by WordPress.

## Screenshots

###1. Automatically resized videos, the magic happens when you resize the window###
![Automatically resized videos, the magic happens when you resize the window](http://s.wordpress.org/extend/plugins/responsive-video-embeds/screenshot-1.png)


## Changelog

### 1.2.1
* Fix reported issues with YouTube iframe embeds without `width` and `height` attributes

### 1.2
* Fix improperly sized embeds that show black bars on the left, right, top or bottom
* Adjustments and bug squashes for Vimeo embeds
* Adjust the initial sizing using the source video's original aspect ratio
* Add a very small amount of JS to calculate proper aspect ratio
* Load CSS & JS conditionally, only when a supported embed is on a page/post for better performance
* Simplify HTML, removing an unnecessary `div` element

### 1.1
* Modifications to responsive container sizes to allow for a max-width setup using the WordPress `[embed]` shortcode.

### 1.0
* Initial public release to the WordPress plugin repository