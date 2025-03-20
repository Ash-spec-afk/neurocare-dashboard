
export interface Patient {
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  weight: string;
  height: string;
  allergies: string[];
  medicalHistory: string[];
  // reportPdf: string;
  conversation_trnscripts: string;
  symptoms: string[];
  // recentActivity: {
  //   type: string;
  //   date: string;
  //   description: string;
  // }[];
  // doctor: string;
  // contactInfo: {
  //   phone: string;
  //   email: string;
  //   address: string;
  // };
}
