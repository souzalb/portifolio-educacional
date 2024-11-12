import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/app/_lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        Automotiva:
          "border-transparent bg-red-500 text-secondary-foreground hover:bg-red-600/80",
        TI: "border-transparent bg-blue-500 text-secondary-foreground hover:bg-blue-600/80",
        Transversal:
          "border-transparent bg-blue-200 text-blue-900 hover:bg-blue-300/80",
        Gestão:
          "border-transparent bg-cyan-500 text-cyan-900 hover:bg-cyan-600/80",
        Metalmecânica:
          "border-transparent bg-green-500 text-secondary-foreground hover:bg-green-600/80",
        SST: "border-transparent bg-yellow-700 text-secondary-foreground hover:bg-yellow-800/80",
        Eletroeletrônica:
          "border-transparent bg-orange-500 text-secondary-foreground hover:bg-orange-600/80",
        Online:
          "border-transparent bg-green-400 text-green-900 hover:bg-green-500/80",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
