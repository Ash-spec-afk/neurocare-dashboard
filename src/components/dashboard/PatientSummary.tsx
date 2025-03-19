
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { mockPatients } from "@/data/mockPatients";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FileText, Eye } from "lucide-react";

interface PatientSummaryProps {
  className?: string;
}

export const PatientSummary: React.FC<PatientSummaryProps> = ({ className }) => {
  // Show only critical and new patients
  const priorityPatients = mockPatients.filter(
    (p) => p.status === "Critical" || p.status === "New"
  );

  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-xl font-bold">Priority Patients</CardTitle>
        <CardDescription>
          Patients requiring immediate attention
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {priorityPatients.map((patient) => (
            <div
              key={patient.id}
              className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
            >
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-medical-light-blue text-medical-dark-blue">
                    {patient.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-xs text-muted-foreground">
                    MRN: {patient.medicalRecordNo} | {patient.age} yrs
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  className={
                    patient.status === "Critical"
                      ? "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
                      : "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                  }
                >
                  {patient.status}
                </Badge>
                <Button size="sm" variant="outline" className="gap-1">
                  <FileText className="h-4 w-4" />
                  Report
                </Button>
                <Button size="sm" variant="outline" className="gap-1">
                  <Eye className="h-4 w-4" />
                  View
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
