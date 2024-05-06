'use client'

import * as React from 'react'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <div className=" p-1 flex sticky top-0 justify-end md:m-6">
      <DropdownMenu>
        <DropdownMenuTrigger className="" asChild>
          <Button variant="outline" size="icon">
            <Sun className="h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem] rotate-0 scale-100 transition-all -rotate-90 dark:scale-0 text-primary" />
            <Moon className="absolute h-[1rem] w-[1rem] md:h-[1.2rem] md:w-[1.2rem]rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 dark:text-sky-200" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onClick={() => setTheme('light')}>
            Light
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>
            Dark
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>
            System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}
