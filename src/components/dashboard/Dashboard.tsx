
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  UserCheck, 
  AlertCircle, 
  Calendar, 
  Activity, 
  ArrowUpRight, 
  ArrowDownRight 
} from "lucide-react";
import { mockPatients } from "@/data/mockPatients";
import { PatientSummary } from "./PatientSummary";
import { RecentActivity } from "./RecentActivity";
import { UpcomingAppointments } from "./UpcomingAppointments";
import { OverviewStats } from "./OverviewStats";

export const Dashboard: React.FC = () => {
  const criticalPatients = mockPatients.filter(p => p.status === "Critical").length;
  const stablePatients = mockPatients.filter(p => p.status === "Stable").length;
  const newPatients = mockPatients.filter(p => p.status === "New").length;
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-medical-dark-blue">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, Dr. Chen</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">
            {new Date().toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Patients</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{mockPatients.length}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-medical-blue flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +2 this week
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stable Patients</CardTitle>
            <UserCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stablePatients}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +1 last month
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Critical Cases</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{criticalPatients}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-500 flex items-center">
                <ArrowUpRight className="mr-1 h-3 w-3" />
                +1 this week
              </span>
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Patients</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{newPatients}</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-gray-500 flex items-center">
                <ArrowDownRight className="mr-1 h-3 w-3" />
                -2 from last week
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="patients">Patients</TabsTrigger>
          <TabsTrigger value="appointments">Appointments</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <OverviewStats className="col-span-1 md:col-span-2 lg:col-span-3" />
            <UpcomingAppointments className="col-span-1 md:col-span-2 lg:col-span-4" />
          </div>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-7">
            <PatientSummary className="col-span-1 md:col-span-2 lg:col-span-4" />
            <RecentActivity className="col-span-1 md:col-span-2 lg:col-span-3" />
          </div>
        </TabsContent>
        <TabsContent value="patients">
          <Card>
            <CardHeader>
              <CardTitle>Patient List</CardTitle>
              <CardDescription>View all your patients</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Patient list would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="appointments">
          <Card>
            <CardHeader>
              <CardTitle>Appointments</CardTitle>
              <CardDescription>Manage your schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Appointment calendar would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>View patient trends and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Analytics charts would be displayed here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
