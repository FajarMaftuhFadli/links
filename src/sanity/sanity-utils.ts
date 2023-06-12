import { createClient, groq } from 'next-sanity';

const clientID = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
};

export async function getLinks() {
  const client = createClient(clientID);

  return client.fetch(
    groq`*[_type == "link"] | order(pinned asc, _updatedAt desc){
        _id,
        _createdAt,
        _updatedAt,
        name,
        url,
        username,
        "icon": icon.asset->url,
        description,
        pinned,
        tags,
    }`
  );
}

export async function getData() {
  const client = createClient(clientID);
  const data = client.fetch(
    groq`*[_type == "link"] | order(_updatedAt desc){_updatedAt}`
  );
  return data;
}
