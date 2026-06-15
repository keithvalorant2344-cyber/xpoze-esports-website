import { LoadingMark } from "@/components/ui/LoadingMark";

export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-xpoze-night">
      <LoadingMark label="Loading Xpoze" />
    </div>
  );
}
