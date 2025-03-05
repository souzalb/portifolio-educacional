"use client"

import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select"
import { ControllerRenderProps } from "react-hook-form"

interface SelectOnChangeProps {
  field: ControllerRenderProps<
    {
      name: string
      rating: string
      description: string
      imageUrl: string
      access: string
      link: string
      type: string
      area: string
      users: string
    },
    "access"
  >
}

export function SelectAccess({ field }: SelectOnChangeProps) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-full lg:w-[218px]">
        <SelectValue placeholder="Selecionar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Acesso</SelectLabel>
          <SelectItem value="Digital">Digital</SelectItem>
          <SelectItem value="Físico">Físico</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
