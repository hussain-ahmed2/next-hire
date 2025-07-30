"use client";

import React from "react";

interface Testimonial {
	id: number;
	quote: string;
	author: string;
	title: string;
	company: string;
	rating: number;
}

export default function Testimonials() {
	const testimonials: Testimonial[] = [
		{
			id: 1,
			quote: "nextHire revolutionized our recruitment process. We reduced time-to-hire by 65% and found candidates that perfectly match our company culture. The AI-powered matching is incredibly accurate.",
			author: "Sarah Chen",
			title: "Head of Talent Acquisition, TechFlow Solutions",
			company: "TF",
			rating: 5,
		},
		{
			id: 2,
			quote: "The platform's intuitive interface and powerful analytics helped us identify top talent faster than ever. Our hiring success rate increased by 40% in just three months.",
			author: "Marcus Rodriguez",
			title: "VP of People Operations, InnovateCorp",
			company: "IC",
			rating: 5,
		},
		{
			id: 3,
			quote: "nextHire's automated screening saved us countless hours while ensuring we never missed qualified candidates. It's like having a dedicated recruitment team working 24/7.",
			author: "Emily Foster",
			title: "Talent Manager, GrowthLabs",
			company: "GL",
			rating: 5,
		},
		{
			id: 4,
			quote: "The candidate experience improved dramatically with nextHire. We receive better quality applications and candidates love the streamlined process. Win-win for everyone.",
			author: "David Kim",
			title: "Senior Recruiter, NextGen Dynamics",
			company: "ND",
			rating: 5,
		},
		{
			id: 5,
			quote: "From startups to enterprise, nextHire scales perfectly. The collaboration features keep our entire hiring team aligned and moving fast. Best investment we've made.",
			author: "Jessica Wang",
			title: "Chief People Officer, CloudVantage",
			company: "CV",
			rating: 5,
		},
		{
			id: 6,
			quote: "The diversity insights and bias reduction features helped us build more inclusive teams. nextHire doesn't just find talent—it finds the right talent ethically.",
			author: "Ahmed Hassan",
			title: "Director of Diversity & Inclusion, FutureForward",
			company: "FF",
			rating: 5,
		},
		{
			id: 7,
			quote: "Integration with our existing HR stack was seamless. nextHire enhanced our workflow without disrupting our processes. The ROI was evident within weeks.",
			author: "Lisa Thompson",
			title: "HR Technology Lead, ScaleUp Ventures",
			company: "SV",
			rating: 5,
		},
		{
			id: 8,
			quote: "The predictive analytics help us forecast hiring needs and budget accordingly. nextHire transformed recruitment from reactive to strategic for our organization.",
			author: "Robert Chen",
			title: "VP of Human Resources, DataDriven Inc",
			company: "DD",
			rating: 5,
		},
	];

	const getInitials = (name: string) =>
		name
			.split(" ")
			.map((n) => n[0])
			.join("");

	const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
		<div className="flex-shrink-0 w-80 md:w-96 bg-neutral-50 backdrop-blur-xl rounded-xl p-6 shadow border border-neutral-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-white relative overflow-hidden">
			{/* Gradient Top Border */}
			<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-t-3xl" />

			{/* Company Logo */}
			<div className="absolute top-5 right-5 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xs">
				{testimonial.company}
			</div>

			{/* Stars */}
			<div className="flex gap-1 mb-4">
				{Array.from({ length: testimonial.rating }, (_, i) => (
					<span key={i} className="text-yellow-400 text-xl">
						★
					</span>
				))}
			</div>

			{/* Quote */}
			<div className="text-gray-700 text-lg leading-relaxed mb-6 italic relative">
				<span className="absolute -top-5 -left-2 text-6xl text-indigo-500/30 font-serif">&ldquo;</span>
				{testimonial.quote}
			</div>

			{/* Author */}
			<div className="flex items-center gap-4">
				<div className="w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xl flex-shrink-0">
					{getInitials(testimonial.author)}
				</div>
				<div>
					<div className="font-semibold text-gray-900 text-lg">{testimonial.author}</div>
					<div className="text-gray-600 text-sm">{testimonial.title}</div>
				</div>
			</div>
		</div>
	);

	return (
		<div className="relative w-full overflow-hidden rounded-2xl">
			{/* Left Gradient Fade */}
			<div className="pointer-events-none absolute top-0 left-0 h-full w-16 z-10 bg-gradient-to-r from-neutral-100 to-transparent" />

			{/* Right Gradient Fade */}
			<div className="pointer-events-none absolute top-0 right-0 h-full w-16 z-10 bg-gradient-to-l from-neutral-100 to-transparent" />

			{/* Carousel */}
			<div className="relative h-[30rem] overflow-hidden  py-10">
				<div className="flex w-[200%] gap-6 animate-marquee hover:pause">
					{[...testimonials, ...testimonials].map((testimonial, index) => (
						<TestimonialCard key={index} testimonial={testimonial} />
					))}
				</div>
			</div>

			{/* Animation Styles */}
			<style jsx>{`
				@keyframes marquee {
					0% {
						transform: translateX(0%);
					}
					100% {
						transform: translateX(-50%);
					}
				}

				.animate-marquee {
					animation: marquee 60s linear infinite;
				}

				.animate-marquee:hover {
					animation-play-state: paused;
				}
			`}</style>
		</div>
	);
}
