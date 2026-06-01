export type Project = {
  slug: string;
  title: string;
  img: string;
  tag: string;
  description: string;
  body?: string;
  link?: string;
  github?: string;
  year?: string;
  stack?: string[];
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    img: "/example.jpg",
    tag: "Web",
    year: "2024",
    stack: ["React", "TypeScript", "Node.js"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Motivation

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.

## What I built

Sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
    link: "#",
    github: "https://github.com/mingshen-yen",
  },
  {
    slug: "project-2",
    title: "Project 2",
    img: "/example.jpg",
    tag: "Research",
    year: "2023",
    stack: ["Python", "MongoDB"],
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    body: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

## Approach

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Results

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
    github: "https://github.com/mingshen-yen",
  },
  {
    slug: "project-3",
    title: "Project 3",
    img: "/example.jpg",
    tag: "Data",
    year: "2023",
    stack: ["Python", "React"],
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    body: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

## Overview

Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Key findings

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
    link: "#",
  },
];
