"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { DATA } from "@/app/data";
import type { IExperienceData } from "@/app/data";
import { SocialRow } from "@/components/sections/header";

export function About({ data }: { data: IExperienceData[] }) {
    const handleChange = (url: string) => {
        window.open(url, "_blank");
    };

    return (
        <div id="about" className="flex flex-col gap-12 w-full">
            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">about me.</h2>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                    <div className="md:col-span-6 font-normal text-muted-foreground text-base text-justify">
                        <p>{DATA.HEADER.INTRO}</p>
                        <p className="mt-4 hidden sm:block">{DATA.HEADER.EXPERTISE}</p>
                        <div className="mt-auto pt-8">
                            <SocialRow
                                data={DATA.HEADER as Record<string, string>}
                                onOpen={handleChange}
                                iconSize={20}
                            />
                        </div>
                    </div>

                    <div className="md:col-span-6 w-full relative">
                        {DATA.ABOUT_IMAGES && DATA.ABOUT_IMAGES.length > 0 ? (
                            <PhotoSlider images={DATA.ABOUT_IMAGES} />
                        ) : (
                            <div className="bg-muted animate-pulse w-full aspect-video rounded-xl" />
                        )}
                    </div>
                </div>
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">education.</h2>
                {DATA.EDUCATION.map((edu) => (
                    <div key={edu.SCHOOL} className="flex sm:flex-row flex-col justify-between items-start gap-1 group">
                        <div>
                            <p className="text-primary/90 text-lg">{edu.DEGREE}</p>
                            <p className="text-muted-foreground text-sm">
                                {edu.SCHOOL} | {edu.LOCATION}
                            </p>
                            {edu.COURSEWORK && (
                                <p className="mt-1 text-muted-foreground/80 text-xs">
                                    Coursework: {edu.COURSEWORK}
                                </p>
                            )}
                        </div>
                        <p className="text-muted-foreground text-sm whitespace-nowrap">{edu.DURATION}</p>
                    </div>
                ))}
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">experience.</h2>

                <ul className="flex flex-col gap-12 mt-4 font-normal text-primary/90 text-base">
                    {data.map((value) => (
                        <li key={value.POSITION + value.ORG} className="cursor-target">
                            <div className="pl-0 size-full transition-all duration-300">
                                <div className="flex sm:flex-row flex-col justify-between items-start">
                                    <div>
                                        <p className="text-primary/90 text-lg">
                                            {value.POSITION}{" "}
                                            <span className="inline-block bg-secondary max-sm:mb-2 ml-2 px-2 py-1 rounded text-xs">
                                                {value.LOCATION}
                                            </span>
                                        </p>
                                        <p className="flex items-center text-sm">
                                            at,{" "}
                                            {value.WEBSITE ? (
                                                <a
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-1 ml-1 hover:text-primary transition-colors"
                                                    href={value.WEBSITE}
                                                >
                                                    {value.ORG} <ArrowUpRight size={18} />
                                                </a>
                                            ) : (
                                                <span className="ml-1">{value.ORG}</span>
                                            )}
                                        </p>
                                    </div>
                                    <p className="text-muted-foreground text-sm whitespace-nowrap">{value.DURATION}</p>
                                </div>

                                <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                                    {value.DESCRIPTION.map((desc, index) => (
                                        <li key={index}>
                                            <span>{desc}</span>
                                        </li>
                                    ))}
                                </ul>

                                <ul className="flex flex-wrap items-center gap-2 mt-2 pl-3">
                                    {value.TECH_STACK.map((tech, index) => (
                                        <li key={index} className="bg-muted px-2 py-1 rounded text-xs">
                                            {tech}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="font-medium text-primary/90 text-base">leadership.</h2>

                <ul className="flex flex-col gap-8 mt-4 font-normal text-primary/90 text-base">
                    {DATA.LEADERSHIP.map((item) => (
                        <li key={item.ROLE + item.DURATION} className="cursor-target">
                            <div className="flex sm:flex-row flex-col justify-between items-start">
                                <div>
                                    <p className="text-primary/90 text-lg">{item.ROLE}</p>
                                    <p className="text-sm">at, {item.ORG}</p>
                                </div>
                                <p className="text-muted-foreground text-sm whitespace-nowrap">{item.DURATION}</p>
                            </div>
                            <ul className="space-y-1 mt-1 pl-3 text-muted-foreground text-sm text-justify list-disc">
                                {item.DESCRIPTION.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}

function PhotoSlider({ images }: { images: { src: string; caption: string }[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    return (
        <div className="w-full flex flex-col gap-3 group">
            <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-muted shadow-2xl shadow-black/5 bg-muted">
                {images.map((imgObj, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                    >
                        <Image
                            src={imgObj.src}
                            alt={imgObj.caption}
                            fill
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            priority={index === 0}
                        />
                    </div>
                ))}

                {images.length > 1 && (
                    <div className="absolute inset-0 z-20 flex items-center justify-between px-3 pointer-events-none">
                        <button
                            onClick={handlePrev}
                            aria-label="Previous photo"
                            className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <button
                            onClick={handleNext}
                            aria-label="Next photo"
                            className="pointer-events-auto bg-black/20 hover:bg-black/40 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                )}
            </div>

            <div className="px-1 min-h-[1.5rem] relative h-fit text-center">
                {images.map((imgObj, index) => (
                    <p
                        key={index}
                        className={`text-xs text-muted-foreground/90 font-medium italic transition-opacity duration-500 tracking-tight ${
                            index === currentIndex ? "opacity-100 relative" : "opacity-0 absolute inset-0"
                        }`}
                    >
                        {imgObj.caption}
                    </p>
                ))}
            </div>
        </div>
    );
}
