
export interface Patient {
  id: string;
  medicalRecordNo: string;
  name: string;
  dob: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  weight: string;
  height: string;
  habits: string[];
  medicalHistory: string;
  allergies: string[];
  reportPdf: string;
  chatbotTranscript: string;
  lastVisit: string;
  nextAppointment: string | null;
  status: 'Stable' | 'Critical' | 'Recovering' | 'New' | 'Referred';
  recentActivity: {
    type: string;
    date: string;
    description: string;
  }[];
  doctor: string;
  contactInfo: {
    phone: string;
    email: string;
    address: string;
  };
}
