export const algoliaConfig = {
  appId: process.env.NEXT_PUBLIC_ALGOLIA_APP_ID || '',
  indexName: process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME || '',
  apiKey: process.env.NEXT_PUBLIC_ALGOLIA_API_KEY || '',
  searchParameters: {
    hitsPerPage: 10,
    attributesToRetrieve: ['title', 'content', 'url'],
    attributesToSnippet: ['content:30'],
  },
  transformItems: (items: any[]) => {
    return items.map((item) => ({
      ...item,
      url: item.url.replace('/digital-surveyor', ''),
    }));
  },
}; 