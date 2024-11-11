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
    "type"
  >
}

export function SelectType({ field }: SelectOnChangeProps) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-[175px] lg:w-[218px]">
        <SelectValue placeholder="Selecionar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Tipo</SelectLabel>
          <SelectItem value="Site">Site</SelectItem>
          <SelectItem value="Aplicativo">Aplicativo</SelectItem>
          <SelectItem value="Software">Software</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
