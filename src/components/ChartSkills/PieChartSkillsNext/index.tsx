import "../../../styles/index.css";

import { Label, Pie, PieChart, ResponsiveContainer } from "recharts";
import { Card, CardContent } from "../../ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../../ui/chart";

const chartData = [
  { browser: "Next", visitors: 30, fill: "#E1E1E6" },
  { browser: "NotCompleted", visitors: 50, fill: "transparent" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Next: {
    label: "Next",
    color: "#E1E1E6",
  },
  NotCompleted: {
    label: "NotCompleted",
    color: "transparent",
  },
} satisfies ChartConfig;

export function PieChartSkillsNext() {
  return (
    <div>
      <Card>
        <ResponsiveContainer width={"100%"} height={"100%"} minWidth={200}>
          <CardContent>
            <ChartContainer
              config={chartConfig}
              className="mx-auto aspect-square max-h-[225px]"
            >
              <PieChart>
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={chartData}
                  dataKey="visitors"
                  nameKey="browser"
                  innerRadius={60}
                  strokeWidth={5}
                >
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                            dominantBaseline="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={viewBox.cy}
                              className="fill-muted text-[22px] font-bold"
                            >
                              Next
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              7 meses
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </Pie>
              </PieChart>
            </ChartContainer>
          </CardContent>
        </ResponsiveContainer>
      </Card>
    </div>
  );
}
