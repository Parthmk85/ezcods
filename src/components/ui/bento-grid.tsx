import { cn } from "@/lib/utils";

export interface BentoItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: string;
  tags?: string[];
  meta?: string;
  cta?: string;
  colSpan?: number;
  hasPersistentHover?: boolean;
}

interface BentoGridProps {
  items: BentoItem[];
}

export function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-3 md:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className={cn(
            "group relative overflow-hidden rounded-xl p-4 transition-all duration-300",
            "border border-white/10 bg-white/[0.04] backdrop-blur-sm",
            "hover:-translate-y-0.5 hover:bg-white/[0.07] hover:shadow-[0_2px_18px_rgba(255,255,255,0.05)] will-change-transform",
            item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
            item.hasPersistentHover &&
              "-translate-y-0.5 bg-white/[0.07] shadow-[0_2px_18px_rgba(255,255,255,0.05)]"
          )}
        >
          <div
            className={cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>

          <div className="relative flex flex-col space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white transition-all duration-300">
                {item.icon}
              </div>
              <span className="rounded-lg bg-white/10 px-2 py-1 text-xs font-medium text-gray-300 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/20">
                {item.status || "Active"}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-[15px] font-medium tracking-tight text-gray-100">
                {item.title}
                <span className="ml-2 text-xs font-normal text-gray-400">
                  {item.meta}
                </span>
              </h3>
              <p className="text-sm font-[425] leading-snug text-gray-300">
                {item.description}
              </p>
            </div>

            <div className="mt-2 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-xs text-gray-400">
                {item.tags?.map((tag, i) => (
                  <span
                    key={i}
                    className="rounded-md bg-white/10 px-2 py-1 backdrop-blur-sm transition-all duration-200 hover:bg-white/20"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
              <span className="text-xs text-gray-400 opacity-0 transition-opacity group-hover:opacity-100">
                {item.cta || "Explore →"}
              </span>
            </div>
          </div>

          <div
            className={cn(
              "absolute inset-0 -z-10 rounded-xl bg-gradient-to-br from-transparent via-white/10 to-transparent p-px transition-opacity duration-300",
              item.hasPersistentHover
                ? "opacity-100"
                : "opacity-0 group-hover:opacity-100"
            )}
          />
        </div>
      ))}
    </div>
  );
}
