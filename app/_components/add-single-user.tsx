"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "../_lib/utils"
import { Button } from "./ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"
import { getUsers } from "./_actions/get-users"
import { useEffect, useState } from "react"
import { ControllerRenderProps } from "react-hook-form"
import { FormControl } from "./ui/form"

interface SelectOnChangeProps {
  field: ControllerRenderProps<
    {
      users: string
    },
    "users"
  >
}

export function AddSilgleUser({ field }: SelectOnChangeProps) {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")

  const [users, setUsers] = useState<
    {
      image: string | null
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      createdAt: Date
      updatedAt: Date
    }[]
  >([])

  useEffect(() => {
    const fetch = async () => {
      const users = await getUsers()
      setUsers(users)
    }
    fetch()
  }, [])

  return (
    <>
      <Popover open={open} onOpenChange={setOpen}>
        <FormControl>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {/* TODO: Fazer a pesquisa funcionar (estou pegando o id pro banco, mas não da pra) */}
              {value
                ? users.find((user) => user.name === value)?.name
                : "Selecionar"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50 lg:w-full" />
            </Button>
          </PopoverTrigger>
        </FormControl>

        <PopoverContent className="w-[175px] p-0 lg:w-[218px]">
          <Command onValueChange={field.onChange} value={value}>
            <CommandInput placeholder="Procurar" />

            <CommandList className="[&::-webkit-scrollbar]:hidden">
              <CommandEmpty>Usuário não encontrado.</CommandEmpty>
              <CommandGroup>
                {/*TODO:  <ScrollArea className="h-full w-full rounded-md border bg-red-400"> */}
                {users.map((users) => (
                  <CommandItem
                    key={users.id}
                    value={users.name ?? ""}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === users.name ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {users.name}
                  </CommandItem>
                ))}

                {/* </ScrollArea> */}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  )
}
