"use client"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
   router.replace('/Service/web-development');
  }, []);

  return (
    <div className="empty">
      HomePage
    </div>
  );
}
