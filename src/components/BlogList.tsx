import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Button, Chip } from "@nextui-org/react";
import { UIProvider } from "./UIProvider";

interface BlogPost {
    slug: string;
    data: {
        title: string;
        description: string;
        pubDate: Date;
        heroImage?: string;
        category: string;
    };
}

interface BlogListProps {
    posts: BlogPost[];
}

export const BlogList = ({ posts }: BlogListProps) => {
    return (
        <UIProvider>
            <section className="py-24 px-4 max-w-7xl mx-auto">
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
                        <p className="text-neutral-400">Decoding the signals from the noise.</p>
                    </div>
                    <Button variant="light" color="primary" className="hidden md:flex">View All Articles</Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <Card
                            key={post.slug}
                            as="a"
                            href={`/blog/${post.slug}`}
                            className="bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all group"
                            isPressable
                        >
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <Chip size="sm" color="primary" variant="flat" className="text-xs uppercase font-bold tracking-wider mb-2">
                                    {post.data.category}
                                </Chip>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt={post.data.title}
                                className="z-0 w-full h-[240px] object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                src={post.data.heroImage}
                            />
                            <CardBody className="p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-neutral-500">
                                        {new Date(post.data.pubDate).toLocaleDateString()}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.data.title}
                                </h3>
                                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                                    {post.data.description}
                                </p>
                            </CardBody>
                            <CardFooter className="px-5 pb-5 pt-0">
                                <div className="text-sm text-primary font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                                    Read Article <span>&rarr;</span>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </section>
        </UIProvider>
    );
};
