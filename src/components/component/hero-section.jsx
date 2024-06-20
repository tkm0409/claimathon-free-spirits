import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function HeroSection() {
    return (
        <main className="flex-1">
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                <div className="container px-4 md:px-6">
                    <div
                        className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                        <div className="flex flex-col justify-center space-y-4">
                            <div className="space-y-2">
                                <div
                                    className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 text-gray-900 dark:text-gray-50">
                                    Automatic EFNOL
                                </div>
                                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Streamline Your Claims Process</h2>
                                <p
                                    className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                    With our Automatic EFNOL feature, you can quickly and easily generate your Electronic First Notice
                                    of Loss by simply uploading images of the car damage.
                                </p>
                            </div>
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                <Button
                                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300">
                                    Upload Images
                                </Button>
                                <Link
                                    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
                                    href="#">
                                    Learn More
                                </Link>
                            </div>
                        </div>
                        <img
                            alt="Image"
                            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                            height="310"
                            src="../assets/car.png"
                            width="550" />
                    </div>
                </div>
            </section>
        </main>
    )
}