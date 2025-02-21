'use client'
import FadeContent from "@/components/ui/FadeContent/FadeContent"
import SplitText from "@/components/ui/SplitText/SplitText"

export default function GettingStarted() {
  const handleAnimationComplete = () => {
    console.log('All letters have animated!');
  };

  return (
    <FadeContent duration={1000} easing="ease-out" initialOpacity={0}>

    <main className="max-w-3xl mx-auto">
      <SplitText
        text="Getting Started"
        className=" text-center text-4xl font-bold text-red-500"
        delay={150}
        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
        threshold={0.2}
        rootMargin="-50px"
        onLetterAnimationComplete={handleAnimationComplete}
      />
      <p className="text-xl my-4">
        Welcome to the getting started guide for our documentation site. Follow these steps to set up your environment
        and begin using our tools.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Installation</h2>
      <p className="mb-4">To install our package, run the following command in your terminal:</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>npm install @our-company/package</code>
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Configuration</h2>
      <p className="mb-4">
        After installation, you need to set up the configuration file. Create a file named <code>config.js</code> in
        your project root and add the following content:
      </p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`module.exports = {
  apiKey: 'YOUR_API_KEY',
  environment: 'production'
}`}</code>
      </pre>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Usage</h2>
      <p className="mb-4">Here&apos;s a basic example of how to use our package in your project:</p>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`import { Client } from '@our-company/package';

const client = new Client();
const result = await client.doSomething();
console.log(result);`}</code>
      </pre>
        <p className="mt-4">For more detailed information, please check out our Components and API Reference sections.</p>
      </main>
    </FadeContent>
  )
}


