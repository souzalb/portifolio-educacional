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
import { quickSearchOption } from "../_constants/search"

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
    "area"
  >
}

export function SelectArea({ field }: SelectOnChangeProps) {
  return (
    <Select onValueChange={field.onChange} defaultValue={field.value}>
      <SelectTrigger className="w-full lg:w-[218px]">
        <SelectValue placeholder="Selecionar" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Área</SelectLabel>
          {quickSearchOption.map((option) => (
            <SelectItem value={option.title} key={option.title}>
              {option.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
