"use client"

import { TrendingUp } from "lucide-react"
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { month: "January", fruits: 186, vegetables: 80 },
  { month: "February", fruits: 305, vegetables: 200 },
  { month: "March", fruits: 237, vegetables: 120 },
  { month: "April", fruits: 73, vegetables: 190 },
  { month: "May", fruits: 209, vegetables: 130 },
  { month: "June", fruits: 214, vegetables: 140 },
]

const chartConfig = {
  fruits: {
    label: "fruits",
    color: "hsl(var(--chart-1))",
  },
  vegetables: {
    label: "vegetables",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig

export function ChartOne() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Area Chart - Stacked</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Area
              dataKey="vegetables"
              type="natural"
              fill="var(--color-vegetables)"
              fillOpacity={0.4}
              stroke="var(--color-vegetables)"
              stackId="a"
            />
            <Area
              dataKey="fruits"
              type="natural"
              fill="var(--color-fruits)"
              fillOpacity={0.4}
              stroke="var(--color-fruits)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="flex items-center gap-2 leading-none text-muted-foreground">
              January - June 2024
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
