import { createApi } from 'unsplash-js';

const unsplash = createApi({
    accessKey: import.meta.env.UNSPLASH,
    
    fetch: fetch,
});

export const getPhoto = async () => unsplash.photos.get({ photoId: '123' });