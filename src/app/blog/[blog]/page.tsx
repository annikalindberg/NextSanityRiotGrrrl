import { client, urlFor} from "../../lib/client";
import { fullBlog } from "../../lib/interface";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

async function getData() {
    const query = `
    *[_type == "blog" && slug.current == 'third-blogpost' ]
    {"currentSlug": slug.current,
      title,
      content,
      titleImage}[0]
    `;
  
    const data = await client.fetch(query);
    return data;
  }

export default async function BlogArticle({


  }) {
    const data: fullBlog = await getData();
    console.log(data); // This will log the fetched data or null

return (
    <div>
        <h1 className="block text-base text-center text-primary font-semibold tracking-wide uppercase">
            {data.title}
        </h1>
        <Image
        src={urlFor(data.titleImage).url()}
        width={800}
        height={800}
        alt="Title Image"
        priority
        className="rounded-lg mt-8 border"
      />
    <div className="mt-16 prose prose-blue prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary">
        <PortableText value={data.content} />
      </div>
    </div>
    
)
    } 