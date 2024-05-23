import { createClient } from "contentful";

const spaceID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

const client = createClient({  
  accessToken: 'AZGSYW-hItdqH8enz8l8xqhfVFDNw2tbH-2sCB2HPEo', 
  space: '343k4810fhz9',
 /*  host: 'cdn.eu.contentful.com.' */
})

export default client;