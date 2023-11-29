import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Signup() {
  return <Button asChild variant="destructive"  className="h-8 rounded-md px-4 text-xs sm:text-base sm:h-11 sm:px-6">
    <Link href={'/signup'}>
    Get in Touch
    </Link>
    </Button>;
}
