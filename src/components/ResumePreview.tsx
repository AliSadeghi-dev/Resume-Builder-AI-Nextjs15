import { cn } from "@/lib/utils";
import { ResumeValues } from "@/lib/validation";

interface ResumePreviewProps {
  resumeData: ResumeValues;
  className?: string;
}

export default function ResumePreview({
  resumeData,
  className,
}: ResumePreviewProps) {
  return (
    <div
      className={cn(
        "bg-white text-black h-fit w-full aspect-[210/297]",
        className,
      )}
    >
      <h1 className="p-6 text-3xl font-bold">
        this test should change the size
      </h1>
    </div>
  );
}
