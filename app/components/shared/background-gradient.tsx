import { cn } from "~/utils/cn";

export function BackgroundGradient() {
  return (
    <div
      className={cn(
        "absolute left-0 right-0 -z-10 block h-16 lg:h-96 w-full",
        "bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]",
        "from-brand-blue-berry via-brand-black-washed/15 to-brand-black-aswad/20",
        "dark:from-brand-blue-berry dark:via-brand-black-washed/15 dark:to-brand-black-aswad/20",
      )}
    />
  );
}
