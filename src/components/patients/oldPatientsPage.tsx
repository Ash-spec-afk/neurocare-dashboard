import React, { useState } from "react";
import { mockPatients } from "@/data/mockPatients";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  Filter, 
  FileText, 
  MessageSquare, 
  User, 
  Plus, 
  Download,
  CircleAlert,
  CircleCheck
} from "lucide-react";
import { PatientDetails } from "./PatientDetails";
import { Patient } from "@/types/patient";

export const PatientsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [filteredPatients, setFilteredPatients] = useState([]); 

  setFilteredPatients(mockPatients.filter(
    (patient) =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.medicalRecordNo.toLowerCase().includes(searchTerm.toLowerCase())
  ));

  fetch('http://0.0.0.0:8080/api/doctorDashboard', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
  })
  .then(response => response.json())
  .then(data => {
    // data["report pdf"] = ""
    console.log(data);
    setFilteredPatients(data.filter(
      (patient) =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.medicalRecordNo.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  })
  .catch(error => {
      console.error('Error:', error);
  });

  const handlePatientClick = (patient: Patient) => {
    setSelectedPatient(patient);
    setIsDetailsOpen(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-medical-dark-blue">Patients</h1>
          <p className="text-muted-foreground">Manage and view patient records</p>
        </div>
        {/* <Button className="bg-medical-purple hover:bg-medical-purple/90"> */}
        {/*   <Plus className="mr-2 h-4 w-4" /> */}
        {/*   Add New Patient */}
        {/* </Button> */}
      </div>

      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Patient Database</CardTitle>
          <div className="flex flex-col space-y-2 md:flex-row md:items-center md:space-x-2 md:space-y-0">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by name or medical record number..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <Button variant="outline" size="sm" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="w-full md:w-auto">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsContent value="all">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Age</TableHead>
                    <TableHead>Gender</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Symptoms</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPatients.map((patient) => (
                    <TableRow
                      key={patient.id}
                      className="cursor-pointer hover:bg-muted/50"
                      onClick={() => handlePatientClick(patient)}
                    >
                      <TableCell>{patient.name}</TableCell>
                      <TableCell>{patient.age}</TableCell>
                      <TableCell>{patient.gender}</TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                            <span className="sr-only">View Report</span>
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <MessageSquare className="h-4 w-4" />
                            <span className="sr-only">View Transcript</span>
                          </Button>
                          <Button size="sm" variant="outline" className="h-8 w-8 p-0">
                            <User className="h-4 w-4" />
                            <span className="sr-only">View Patient</span>
                          </Button>
                        </div>
                      </TableCell>
                      <TableCell>{patient.symptoms}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Dialog open={isDetailsOpen} onOpenChange={setIsDetailsOpen}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>Patient Details</DialogTitle>
          </DialogHeader>
          {selectedPatient && <PatientDetails patient={selectedPatient} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};
