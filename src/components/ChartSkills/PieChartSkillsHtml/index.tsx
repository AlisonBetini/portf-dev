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
  { browser: "Html5", visitors: 100, fill: "#e75e38" },
  { browser: "NotCompleted", visitors: 0, fill: "transparent" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Html5: {
    label: "Html5",
    color: "#e75e38",
  },
  NotCompleted: {
    label: "NotCompleted",
    color: "transparent",
  },
} satisfies ChartConfig;

export function PieChartSkillsHtml() {
  return (
    <div>
      <Card>
        <ResponsiveContainer width={'100%'} height={250} minWidth={200}>
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
                              Nest
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 24}
                              className="fill-muted-foreground"
                            >
                              1 ano e 2 meses
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
