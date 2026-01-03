import { Card, CardHeader, CardBody, CardFooter, Image, Button, Chip } from "@nextui-org/react";
import { UIProvider } from "./UIProvider";

const posts = [
    {
        title: "Zero Trust Architecture",
        category: "Security",
        date: "2024-03-15",
        img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
        excerpt: "Why the traditional perimeter is dead and identity is the new firewall."
    },
    {
        title: "The Future of Encryption",
        category: "Cryptography",
        date: "2024-03-10",
        img: "https://images.unsplash.com/photo-1558494949-ef2bb6ffa030?q=80&w=2070&auto=format&fit=crop",
        excerpt: "Quantum computing is coming. Are your keys ready?"
    },
    {
        title: "AI in Cyber Defense",
        category: "Artificial Intelligence",
        date: "2024-03-05",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop",
        excerpt: "Automating the SOC with intelligent agents and predictive analysis."
    }
];

export const BlogList = () => {
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
                    {posts.map((post, index) => (
                        <Card key={index} className="bg-neutral-900/50 border border-white/10 hover:border-white/20 transition-all group" isPressable>
                            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                                <Chip size="sm" color="primary" variant="flat" className="text-xs uppercase font-bold tracking-wider mb-2">
                                    {post.category}
                                </Chip>
                            </CardHeader>
                            <Image
                                removeWrapper
                                alt={post.title}
                                className="z-0 w-full h-[240px] object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                                src={post.img}
                            />
                            <CardBody className="p-5">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs text-neutral-500">{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h3>
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    {post.excerpt}
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
