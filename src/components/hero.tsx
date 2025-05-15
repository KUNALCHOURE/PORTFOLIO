"use client";
import Image from "next/image";
import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconMail, IconBrandGitlab, IconBrandFacebook, IconBrandMedium } from "@tabler/icons-react";

export function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left column - Text content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Hi all, I'm <span className="text-purple-500">Kunal</span> 
            <span className="inline-block ml-2 animate-wave">👋</span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-purple-400 font-medium">
            A passionate Full Stack Software Developer
          </h2>
          
          <p className="text-lg text-gray-300 max-w-xl">
            <span className="inline-block animate-float">🚀</span> having an experience of building Web and
            Mobile applications with JavaScript / Reactjs /
            Nodejs / React Native and some other cool
            libraries and frameworks.
          </p>
          
          {/* Social media links */}
          <div className="flex flex-wrap gap-3 pt-4">
            <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all">
              <IconBrandGithub size={24} />
            </Link>
            <Link href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all">
              <IconBrandLinkedin size={24} />
            </Link>
            <Link href="mailto:your.email@example.com" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all">
              <IconMail size={24} />
            </Link>
            <Link href="https://gitlab.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all">
              <IconBrandGitlab size={24} />
            </Link>
            <Link href="https://facebook.com/yourusername" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-blue-800 hover:bg-blue-900 rounded-full flex items-center justify-center transition-all">
              <IconBrandFacebook size={24} />
            </Link>
            <Link href="https://medium.com/@yourusername" target="_blank" rel="noopener noreferrer"
              className="h-12 w-12 bg-black hover:bg-gray-800 rounded-full flex items-center justify-center transition-all">
              <IconBrandMedium size={24} />
            </Link>
          </div>
          
          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <Link href="/contact" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium transition-all">
              CONTACT ME
            </Link>
            <Link href="/resume" className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-md text-white font-medium transition-all">
              DOWNLOAD MY RESUME
            </Link>
          </div>
        </div>
        
        {/* Right column - Illustration */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-lg">
            {/* Decorative elements */}
            <div className="absolute top-0 -left-4 w-32 h-32 bg-purple-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-32 h-32 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
            
            {/* Illustration */}
            <div className="relative">
              <Image 
                src="/developer-illustration.svg" 
                alt="Developer illustration" 
                width={500} 
                height={500}
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 