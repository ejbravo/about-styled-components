export interface YoutubeItem {
  kind: string;
  etag: string;
  id: YoutubeItemId;
  snippet: YoutubeItemSnippet;
}

export interface YoutubeItemId {
  kind: string;
  videoId: string;
}

export interface YoutubeItemSnippet {
  channelId: string;
  channelTitle: string;
  description: string;
  liveBroadcastContent: string;
  publishTime: string;
  publishedAt: string;
  thumbnails: YoutubeItemThumbnails;
  title: string;
}

export interface YoutubeItemThumbnails {
  default: YoutubeThumbnail;
  high: YoutubeThumbnail;
  medium: YoutubeThumbnail;
}

export interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}
