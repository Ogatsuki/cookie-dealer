import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Test Page",
  description: "This is a test page",
};

export default function Test() {
  return <div>Test Page</div>;
}