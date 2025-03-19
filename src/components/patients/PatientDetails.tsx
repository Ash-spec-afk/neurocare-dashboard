
import React from "react";
import { Patient } from "@/types/patient";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Clipboard, 
  MessageSquare, 
  Calendar, 
  Clock, 
  FileText,
  MapPin,
  Mail,
  Phone
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface PatientDetailsProps {
  patient: Patient;
}

export const PatientDetails: React.FC<PatientDetailsProps> = ({ patient }) => {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList className="mb-4">
        <TabsTrigger value="overview">
          <User className="mr-2 h-4 w-4" />
          Overview
        </TabsTrigger>
        <TabsTrigger value="medical-history">
          <Clipboard className="mr-2 h-4 w-4" />
          Medical History
        </TabsTrigger>
        <TabsTrigger value="chatbot">
          <MessageSquare className="mr-2 h-4 w-4" />
          Chatbot Transcript
        </TabsTrigger>
        <TabsTrigger value="report">
          <FileText className="mr-2 h-4 w-4" />
          Patient Report
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <Card className="flex-1">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="h-16 w-16">
                    <AvatarFallback className="bg-medical-light-blue text-medical-dark-blue text-xl">
                      {patient.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-2xl">{patient.name}</CardTitle>
                    <CardDescription>MRN: {patient.medicalRecordNo}</CardDescription>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge
                        className={
                          patient.status === "Critical"
                            ? "bg-red-100 text-red-800 hover:bg-red-100 hover:text-red-800"
                            : patient.status === "Stable"
                            ? "bg-green-100 text-green-800 hover:bg-green-100 hover:text-green-800"
                            : patient.status === "New"
                            ? "bg-blue-100 text-blue-800 hover:bg-blue-100 hover:text-blue-800"
                            : "bg-purple-100 text-purple-800 hover:bg-purple-100 hover:text-purple-800"
                        }
                      >
                        {patient.status}
                      </Badge>
                      {patient.nextAppointment && (
                        <Badge variant="outline" className="ml-2 flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          Next Visit: {patient.nextAppointment}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Button size="sm">Edit Patient</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Personal Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Date of Birth:</span>
                      <span>{patient.dob}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Age:</span>
                      <span>{patient.age} years</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Gender:</span>
                      <span>{patient.gender}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Weight:</span>
                      <span>{patient.weight}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Height:</span>
                      <span>{patient.height}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Contact Information</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>{patient.contactInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>{patient.contactInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{patient.contactInfo.address}</span>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="my-4" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Habits</h3>
                  <div className="flex flex-wrap gap-1">
                    {patient.habits.map((habit, index) => (
                      <Badge key={index} variant="outline">
                        {habit}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Allergies</h3>
                  <div className="flex flex-wrap gap-1">
                    {patient.allergies.length === 0 ? (
                      <span className="text-sm text-muted-foreground">No known allergies</span>
                    ) : (
                      patient.allergies.map((allergy, index) => (
                        <Badge key={index} variant="outline" className="bg-red-50">
                          {allergy}
                        </Badge>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {patient.recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-start space-x-3">
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
                      <p className="font-medium">{activity.type}</p>
                      <p className="text-sm">{activity.description}</p>
                      <p className="text-xs text-muted-foreground">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Medical Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1">Medical History</h3>
                  <p className="text-sm">{patient.medicalHistory}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Last Visit Summary</h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span>{patient.lastVisit}</span>
                  </div>
                  <p className="text-sm mt-1">
                    {patient.recentActivity[0]?.description || "No details available"}
                  </p>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" size="sm" className="gap-1">
                    <FileText className="h-4 w-4" />
                    View Full Report
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <MessageSquare className="h-4 w-4" />
                    View Chat History
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="medical-history">
        <Card>
          <CardHeader>
            <CardTitle>Medical History</CardTitle>
            <CardDescription>
              Complete health records and history
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">Current Conditions</h3>
                <p>{patient.medicalHistory}</p>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-medium">Allergies</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {patient.allergies.length === 0 ? (
                    <span>No known allergies</span>
                  ) : (
                    patient.allergies.map((allergy, index) => (
                      <Badge key={index} variant="outline" className="bg-red-50">
                        {allergy}
                      </Badge>
                    ))
                  )}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-medium">Lifestyle & Habits</h3>
                <div className="flex flex-wrap gap-1 mt-2">
                  {patient.habits.map((habit, index) => (
                    <Badge key={index} variant="outline">
                      {habit}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-lg font-medium">Past Appointments</h3>
                <div className="mt-2 space-y-3">
                  {patient.recentActivity
                    .filter((activity) => activity.type === "Appointment")
                    .map((activity, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-medical-blue" />
                          <div>
                            <p>{activity.date}</p>
                            <p className="text-sm text-muted-foreground">{activity.description}</p>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Details
                        </Button>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="chatbot">
        <Card>
          <CardHeader>
            <CardTitle>Chatbot Transcript</CardTitle>
            <CardDescription>
              AI-collected patient information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-medical-blue rounded-full p-2">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">AI Assistant</p>
                  <p className="text-sm text-muted-foreground">How can I help you today?</p>
                </div>
              </div>
              <div className="flex items-start gap-3 ml-8 mb-4">
                <div className="bg-gray-200 rounded-full p-2">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium">{patient.name}</p>
                  <p className="text-sm">I've been experiencing some issues lately that I wanted to discuss.</p>
                </div>
              </div>
              <div className="ml-12 mb-4 p-3 bg-white rounded border">
                <p className="text-sm whitespace-pre-line">
                  {patient.chatbotTranscript}
                </p>
              </div>
              <div className="flex items-start gap-3 mb-4">
                <div className="bg-medical-blue rounded-full p-2">
                  <MessageSquare className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="font-medium">AI Assistant</p>
                  <p className="text-sm text-muted-foreground">
                    I've recorded your symptoms and concerns. This information has been compiled into a
                    report for Dr. {patient.doctor.split(' ')[1]}. Is there anything else you'd like to add before I finalize it?
                  </p>
                </div>
              </div>
              <div className="flex justify-end">
                <Button size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  View Full Transcript
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="report">
        <Card>
          <CardHeader>
            <CardTitle>Patient Report</CardTitle>
            <CardDescription>
              AI-generated summary from patient interaction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-white p-6 rounded-lg border relative">
              <div className="absolute top-0 right-0 p-2">
                <Button variant="outline" size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
              </div>
              <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-medical-dark-blue">NEUROCARE MEDICAL CENTER</h2>
                <p className="text-sm text-muted-foreground">Patient Summary Report</p>
                <p className="text-xs text-muted-foreground">Generated on: {new Date().toLocaleDateString()}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold border-b pb-1 mb-2">Patient Information</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>
                    <span className="font-medium">Name:</span> {patient.name}
                  </div>
                  <div>
                    <span className="font-medium">MRN:</span> {patient.medicalRecordNo}
                  </div>
                  <div>
                    <span className="font-medium">DOB:</span> {patient.dob}
                  </div>
                  <div>
                    <span className="font-medium">Age:</span> {patient.age}
                  </div>
                  <div>
                    <span className="font-medium">Gender:</span> {patient.gender}
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold border-b pb-1 mb-2">Medical History</h3>
                <p className="text-sm">{patient.medicalHistory}</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold border-b pb-1 mb-2">Current Symptoms</h3>
                <p className="text-sm">
                  {/* Display first part of chatbot transcript */}
                  {patient.chatbotTranscript.split('...')[0]}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold border-b pb-1 mb-2">Assessment</h3>
                <p className="text-sm">
                  Based on the patient's symptoms and medical history, further evaluation is recommended.
                  {patient.status === "Critical" 
                    ? " Patient requires immediate attention."
                    : patient.status === "New"
                    ? " New patient assessment needed."
                    : " Continued monitoring is advised."}
                </p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold border-b pb-1 mb-2">Recommendations</h3>
                <ul className="list-disc list-inside text-sm">
                  <li>Follow-up appointment in {patient.nextAppointment ? "2 weeks" : "1 month"}</li>
                  <li>Continue current medication regimen</li>
                  <li>Monitor {patient.status === "Critical" ? "symptoms daily" : "for any changes in symptoms"}</li>
                  <li>Complete recommended tests before next visit</li>
                </ul>
              </div>
              <div className="text-right mt-8 pt-4 border-t">
                <p className="font-medium">{patient.doctor}</p>
                <p className="text-sm text-muted-foreground">Attending Neurologist</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};
