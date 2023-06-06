import { createClient, groq } from 'next-sanity';

const clientID = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
};

export async function getLinks() {
  const client = createClient(clientID);

  return client.fetch(
    groq`*[_type == "link"]{
        _id,
        _createdAt,
        name,
        url,
        username,
        icon,
        description,
        pinned,
        tags,
    }`
  );
}

export async function countLinks() {
  const client = createClient(clientID);

  return client.fetch(groq`count(*[_type == 'link'])`);
}
