"use client";

import * as React from "react";
import { DateRange } from "react-day-picker";

import { cn } from "@/src/shared/lib/utils";
import { Button } from "@/src/shared/ui/button";
import { Calendar } from "@/src/shared/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/src/shared/ui/popover";
import { addDays, format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

export function DatePickerWithRange ({
  className,
}: Readonly<React.HTMLAttributes<HTMLDivElement>>) {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            className={cn(
              "w-[300px] justify-start text-left font-normal dark:bg-primaryDarkTheme-500/80",
              !date && "text-muted-foreground"
            )}
            id="date"
            variant={"outline"}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "LLL dd, y")} -{" "}
                  {format(date.to, "LLL dd, y")}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent align="start"
          className="w-auto p-0 dark:bg-primaryDarkTheme-500 dark:border-secondaryDarkTheme-500">
          <Calendar
            defaultMonth={date?.from}
            initialFocus
            mode="range"
            numberOfMonths={2}
            onSelect={setDate}
            selected={date}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
