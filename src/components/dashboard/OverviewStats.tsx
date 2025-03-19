
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

interface OverviewStatsProps {
  className?: string;
}

export const OverviewStats: React.FC<OverviewStatsProps> = ({ className }) => {
  const data = [
    { name: 'Mon', patients: 4 },
    { name: 'Tue', patients: 6 },
    { name: 'Wed', patients: 8 },
    { name: 'Thu', patients: 7 },
    { name: 'Fri', patients: 5 },
    { name: 'Sat', patients: 2 },
    { name: 'Sun', patients: 0 },
  ];

  const diagnosticData = [
    { name: 'Migraine', value: 30 },
    { name: 'Epilepsy', value: 15 },
    { name: 'MS', value: 10 },
    { name: 'Stroke', value: 20 },
    { name: 'Other', value: 25 },
  ];

  const COLORS = ['#1E88E5', '#7E69AB', '#D6BCFA', '#0D47A1', '#BBDEFB'];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Patient Statistics</CardTitle>
        <CardDescription>Weekly patient visits and diagnoses</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="patients" fill="#1E88E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[200px] mt-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={diagnosticData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {diagnosticData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
