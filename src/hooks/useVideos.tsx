import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';
import { YoutubeItem } from '../types';

interface ResponseData {
  data: { items: YoutubeItem[] };
}

const useVideos = (defaultSearchTerm: string) => {
  const [videos, setVideos] = useState<YoutubeItem[]>([]);

  const search = async (term: string) => {
    const {
      data: { items },
    }: ResponseData = await youtube.get('/search', {
      params: { q: term },
    });

    setVideos(items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return { videos, search };
};

export { useVideos };
