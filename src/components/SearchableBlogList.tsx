import React, { useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Image, Chip, Input } from "@nextui-org/react";
import { UIProvider } from "./UIProvider";
import { Search } from "lucide-react";

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

interface SearchableBlogListProps {
    initialPosts: BlogPost[];
}

export const SearchableBlogList = ({ initialPosts }: SearchableBlogListProps) => {
    const [query, setQuery] = useState("");

    const filteredPosts = initialPosts.filter(post =>
        post.data.title.toLowerCase().includes(query.toLowerCase()) ||
        post.data.description.toLowerCase().includes(query.toLowerCase()) ||
        post.data.category.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <UIProvider>
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto mb-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tighter">Archive</h1>
                    <div className="relative">
                        <Input
                            classNames={{
                                base: "max-w-full",
                                mainWrapper: "h-full",
                                input: "text-small",
                                inputWrapper: "h-12 font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 backdrop-blur-xl",
                            }}
                            placeholder="Type to search..."
                            size="lg"
                            startContent={<Search size={18} />}
                            type="search"
                            value={query}
                            onValueChange={setQuery}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredPosts.map((post) => (
                        <Card
                            key={post.slug}
                            isPressable
                            as="a"
                            href={`/blog/${post.slug}`}
                            className="bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all group"
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

                {filteredPosts.length === 0 && (
                    <div className="text-center py-20 text-neutral-500">
                        No result found for "{query}"
                    </div>
                )}
            </div>
        </UIProvider>
    );
};
