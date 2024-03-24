import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <img src="/logo.png" alt="A server surrounded by magic sparkles." />
      <h1>Welcome to this NextJS Course!</h1>
      <p>🔥 Let&apos;s get started! 🔥</p>
      {/* wrong solution for anchor */}
      <p><a href="/about">About us</a></p>

      {/* right solution for anchor */}
      <p><Link href="/about">About us 2</Link></p>
    </main>
  );
}
