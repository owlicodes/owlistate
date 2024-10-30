import { Loader } from "lucide-react";

import { Button } from "@/components/ui/button";

type SubmitButtonProps = {
  isPending: boolean;
  className?: string;
};

export const SubmitButton = ({ isPending, className }: SubmitButtonProps) => {
  return (
    <Button type="submit" className={className} disabled={isPending}>
      {isPending ? (
        <span className="flex items-center gap-2">
          <Loader className="h-4 w-4 animate-spin" />
          <span>Please wait...</span>
        </span>
      ) : (
        "Submit"
      )}
    </Button>
  );
};
