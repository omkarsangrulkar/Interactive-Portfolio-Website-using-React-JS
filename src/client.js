import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: '7vah9rpx',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skPBKCQ0Mo2URhv6UiF2cchAf2dHRfkHzTQt3SNa1KIIC4dyu6Wk3bYH0PUSZnHEaf02MLEfbZwXjIeOCzcwZcovZrSPbB83ToUbcj2gsEGljAn5TAMADXhznqim95Gr0h2LmUYEJYjG857GVneucHJkYXePEeT3QiwCBzMlsSC0geofwJgX',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
