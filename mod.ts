import { serve } from "https://deno.land/std@0.153.0/http/server.ts";
import { content_type } from "media_types";

const static_path = [
  "/components",
  "/css"
];

serve(async (request: Request): Promise<Reponse> => {
  let { pathname } = new URL(request.url);
  pathname = pathname === "/" ? "/index.html" : pathname;

  let response_body = static_path.some(prefix => pathname.startsWith(prefix))
    ? await Deno.readFile(`.${pathname}`)
    : await Deno.readFile('./index.html');

  return new Response(response_body, {
    status: 200,
    headers: {
      "content-type": content_type(pathname),
      "access-control-allow-origin": "*",
      "cache-control": "no-cache"
    }
  });
}, { port: 5000 });
