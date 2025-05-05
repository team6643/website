import { createAsync, useMatch } from "@solidjs/router";
import { SolidMarkdown } from "solid-markdown";

const Blog = () => {
    const route = useMatch(() => "/blog/:id");
    const content = createAsync(async () => {
        const id = route()?.params.id;
        console.log(id)
        // Fetch blog content based on id
        const content = await import(`../assets/blog/${id}.md?raw`);
        return content.default as string;
    });
    return (
        <div>
            {/* <h1>Blog</h1> */}
            <SolidMarkdown class="md" children={content()} />
        </div>
    )
};

export default Blog;
