'use client'
import ShinyText from "@/components/ui/ShinyText/ShinyText"
import FadeContent from "@/components/ui/FadeContent/FadeContent"

export default function Home() {
  return (
    <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>
    <main className="mx-auto max-w-3xl">
      <ShinyText className="font-bold text-4xl custom-class text-yellow-600 mb-4" text="Welcome to Our Docs" disabled={false} speed={3}/>
      <p className="mb-4">
        This is a gorgeous minimal documentation site built with Next.js, Tailwind CSS, and shadcn/ui components.
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Features</h2>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>Clean and minimal design</li>
        <li>Dark mode support</li>
        <li>Responsive layout</li>
        <li>Easy navigation with shadcn sidebar</li>
        <li>Built with Next.js App Router</li>
      </ul>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Getting Started</h2>
      <p className="mb-4">
        To get started with our documentation, please navigate through the sections using the sidebar on the left.
        Here&apos;s a quick overview of the available sections:
      </p>
      <ul className="mb-4 list-inside list-disc space-y-1">
        <li>
          <strong>Getting Started</strong>: Learn how to install and set up our library
        </li>
        <li>
          <strong>Components</strong>: Explore the available components and how to use them
        </li>
        <li>
          <strong>API Reference</strong>: Detailed information about our API and its methods
        </li>
      </ul>
      <p className="mb-4">
        If you have any questions or need further assistance, don&apos;t hesitate to reach out to our support team.
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-semibold">Contributing</h2>
      <p className="mb-4">
        We welcome contributions to our documentation. If you find any errors or have suggestions for improvement,
        please open an issue or submit a pull request on our GitHub repository.
      </p>
    </main>
    </FadeContent>
  )
}

