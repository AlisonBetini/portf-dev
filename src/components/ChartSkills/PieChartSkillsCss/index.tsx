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
  { browser: "Css3", visitors: 100, fill: "#1572B6" },
  { browser: "NotCompleted", visitors: 0, fill: "transparent" },
];
const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Css3: {
    label: "Css3",
    color: "#1572B6",
  },
  NotCompleted: {
    label: "NotCompleted",
    color: "transparent",
  },
} satisfies ChartConfig;

export function PieChartSkillsCss() {
  return (
    <div>
      <Card>
        <ResponsiveContainer width={'100%'} height={'100%'} minWidth={200}>
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
