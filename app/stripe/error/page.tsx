import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto py-10 text-center text-xl md:text-3xl text-red-500">
        <h2>Something went wrong....</h2>
        <Button asChild className="mt-5">
          <Link href="/">GO back</Link>
        </Button>
      </div>
    </div>
  );
}
