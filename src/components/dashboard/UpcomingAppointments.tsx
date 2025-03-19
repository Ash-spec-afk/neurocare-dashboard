
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockPatients } from "@/data/mockPatients";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Video, Phone } from "lucide-react";

interface UpcomingAppointmentsProps {
  className?: string;
}

export const UpcomingAppointments: React.FC<UpcomingAppointmentsProps> = ({ className }) => {
  // Get patients with upcoming appointments
  const patientsWithAppointments = mockPatients
    .filter((p) => p.nextAppointment)
    .sort(
      (a, b) => 
        new Date(a.nextAppointment as string).getTime() - 
        new Date(b.nextAppointment as string).getTime()
    )
    .slice(0, 3);

  // Generate some appointment times for demo
  const appointmentTimes = ["09:00 AM", "10:30 AM", "02:15 PM"];
  const appointmentTypes = ["In-person", "Video Call", "Phone Call"];

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Upcoming Appointments</CardTitle>
        <CardDescription>
          Your schedule for the coming days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {patientsWithAppointments.map((patient, index) => (
            <div
              key={patient.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-medical-light-purple text-medical-purple">
                    {patient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    <span>{patient.nextAppointment}</span>
                    <Clock className="h-3 w-3 ml-2" />
                    <span>{appointmentTimes[index]}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  className={
                    appointmentTypes[index] === "In-person"
                      ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                      : appointmentTypes[index] === "Video Call"
                      ? "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                      : "bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800"
                  }
                >
                  {appointmentTypes[index]}
                </Badge>
                <Button size="sm" variant="outline" className="gap-1">
                  {appointmentTypes[index] === "In-person" ? (
                    <Calendar className="h-4 w-4" />
                  ) : appointmentTypes[index] === "Video Call" ? (
                    <Video className="h-4 w-4" />
                  ) : (
                    <Phone className="h-4 w-4" />
                  )}
                  {appointmentTypes[index] === "In-person"
                    ? "Schedule"
                    : appointmentTypes[index] === "Video Call"
                    ? "Join"
                    : "Call"}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
