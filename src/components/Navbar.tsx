"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

export function Navbar() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Nav className="" />
    </div>
  );
}

function Nav({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-0 inset-x-0 mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Solutions">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Credit Risk Management</HoveredLink>
            <HoveredLink href="/interface-design">Credit Scoring</HoveredLink>
            <HoveredLink href="/seo">Collection Scoring</HoveredLink>
            <HoveredLink href="/branding">Application Scoring</HoveredLink>
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="/hello.png"
              description="Prepare for tech interviews like never before."
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Services">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/data-provision">Data Provision</HoveredLink>
            <HoveredLink href="/interface-design">Data Preparation</HoveredLink>
          </div>
        </MenuItem>
        <Link href="/sign-in" className="flex items-center">Sign In</Link>
        <button className="ml-12 px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Get a Demo
        </button>
      </Menu>
    </div>
  );
}
