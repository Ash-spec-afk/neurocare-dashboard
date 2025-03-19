
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockPatients } from "@/data/mockPatients";

interface RecentActivityProps {
  className?: string;
}

export const RecentActivity: React.FC<RecentActivityProps> = ({ className }) => {
  // Extract all activities and sort by date (most recent first)
  const allActivities = mockPatients
    .flatMap((patient) =>
      patient.recentActivity.map((activity) => ({
        ...activity,
        patientName: patient.name,
        patientId: patient.id,
      }))
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5); // Only show 5 most recent activities

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Recent Activity</CardTitle>
        <CardDescription>Latest patient interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {allActivities.map((activity, index) => (
            <div
              key={`${activity.patientId}-${index}`}
              className="flex items-start gap-3 border-b pb-4 last:border-0 last:pb-0"
            >
              <div
                className={`h-2 w-2 mt-1.5 rounded-full ${
                  activity.type === "Emergency"
                    ? "bg-red-500"
                    : activity.type === "Appointment"
                    ? "bg-blue-500"
                    : activity.type === "Lab Test" || activity.type === "Test"
                    ? "bg-purple-500"
                    : "bg-green-500"
                }`}
              />
              <div>
                <p className="font-medium">{activity.patientName}</p>
                <p className="text-sm">{activity.description}</p>
                <p className="text-xs text-muted-foreground">
                  {new Date(activity.date).toLocaleDateString()} | {activity.type}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
