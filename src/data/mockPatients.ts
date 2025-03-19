
import { Patient } from "../types/patient";

export const mockPatients: Patient[] = [
  {
    id: "1",
    medicalRecordNo: "NRO-10045",
    name: "James Wilson",
    dob: "1975-05-12",
    age: 48,
    gender: "Male",
    weight: "78 kg",
    height: "180 cm",
    habits: ["Non-smoker", "Occasional alcohol"],
    medicalHistory: "Migraine, High blood pressure",
    allergies: ["Penicillin", "Shellfish"],
    reportPdf: "/reports/wilson_james_report.pdf",
    chatbotTranscript: "Complained of severe headaches in the morning, light sensitivity...",
    lastVisit: "2023-08-15",
    nextAppointment: "2023-10-10",
    status: "Stable",
    recentActivity: [
      {
        type: "Appointment",
        date: "2023-08-15",
        description: "Regular check-up, medication adjustment"
      },
      {
        type: "Lab Test",
        date: "2023-08-10",
        description: "Blood work, all parameters normal"
      }
    ],
    doctor: "Dr. Sarah Chen",
    contactInfo: {
      phone: "555-123-4567",
      email: "j.wilson@example.com",
      address: "123 Main St, Anytown, USA"
    }
  },
  {
    id: "2",
    medicalRecordNo: "NRO-10046",
    name: "Emily Rodriguez",
    dob: "1990-11-24",
    age: 33,
    gender: "Female",
    weight: "65 kg",
    height: "165 cm",
    habits: ["Non-smoker", "Regular exercise"],
    medicalHistory: "Epilepsy diagnosed in 2015, Anxiety",
    allergies: ["Latex"],
    reportPdf: "/reports/rodriguez_emily_report.pdf",
    chatbotTranscript: "Reported increased frequency of seizures during high-stress periods...",
    lastVisit: "2023-09-05",
    nextAppointment: "2023-09-19",
    status: "Recovering",
    recentActivity: [
      {
        type: "Emergency",
        date: "2023-09-01",
        description: "Seizure episode at work, admitted for 24hr observation"
      },
      {
        type: "Appointment",
        date: "2023-09-05",
        description: "Follow-up after emergency, medication increased"
      }
    ],
    doctor: "Dr. Sarah Chen",
    contactInfo: {
      phone: "555-765-4321",
      email: "e.rodriguez@example.com",
      address: "456 Oak Ave, Anytown, USA"
    }
  },
  {
    id: "3",
    medicalRecordNo: "NRO-10047",
    name: "Robert Johnson",
    dob: "1962-03-30",
    age: 61,
    gender: "Male",
    weight: "92 kg",
    height: "188 cm",
    habits: ["Former smoker", "Social drinker"],
    medicalHistory: "Parkinson's disease, Type 2 diabetes",
    allergies: ["Sulfa drugs"],
    reportPdf: "/reports/johnson_robert_report.pdf",
    chatbotTranscript: "Noted increasing tremors in left hand, difficulty with fine motor skills...",
    lastVisit: "2023-09-12",
    nextAppointment: "2023-10-03",
    status: "Stable",
    recentActivity: [
      {
        type: "Appointment",
        date: "2023-09-12",
        description: "Regular check-up, no change in medication"
      },
      {
        type: "Physical Therapy",
        date: "2023-09-05",
        description: "Weekly PT session, good progress"
      }
    ],
    doctor: "Dr. Sarah Chen",
    contactInfo: {
      phone: "555-987-6543",
      email: "r.johnson@example.com",
      address: "789 Pine Road, Anytown, USA"
    }
  },
  {
    id: "4",
    medicalRecordNo: "NRO-10048",
    name: "Sophia Kim",
    dob: "2000-07-19",
    age: 23,
    gender: "Female",
    weight: "58 kg",
    height: "160 cm",
    habits: ["Non-smoker", "Vegetarian"],
    medicalHistory: "First-time seizure (2023), No prior neurological issues",
    allergies: [],
    reportPdf: "/reports/kim_sophia_report.pdf",
    chatbotTranscript: "Described event as sudden loss of consciousness while studying...",
    lastVisit: "2023-09-10",
    nextAppointment: "2023-09-24",
    status: "New",
    recentActivity: [
      {
        type: "Appointment",
        date: "2023-09-10",
        description: "Initial consultation after ER visit"
      },
      {
        type: "Test",
        date: "2023-09-10",
        description: "Scheduled for EEG and MRI"
      }
    ],
    doctor: "Dr. Sarah Chen",
    contactInfo: {
      phone: "555-234-5678",
      email: "s.kim@example.com",
      address: "101 University Dr, Anytown, USA"
    }
  },
  {
    id: "5",
    medicalRecordNo: "NRO-10049",
    name: "Michael Patel",
    dob: "1985-12-03",
    age: 38,
    gender: "Male",
    weight: "75 kg",
    height: "175 cm",
    habits: ["Smoker", "Sedentary lifestyle"],
    medicalHistory: "Stroke (2022), Hypertension",
    allergies: ["Aspirin"],
    reportPdf: "/reports/patel_michael_report.pdf",
    chatbotTranscript: "Experiencing occasional numbness in right arm, worried about recurrence...",
    lastVisit: "2023-08-30",
    nextAppointment: "2023-09-20",
    status: "Recovering",
    recentActivity: [
      {
        type: "Appointment",
        date: "2023-08-30",
        description: "Follow-up after stroke, improving"
      },
      {
        type: "Lab Test",
        date: "2023-08-25",
        description: "Lipid panel, cholesterol still elevated"
      }
    ],
    doctor: "Dr. Sarah Chen",
    contactInfo: {
      phone: "555-345-6789",
      email: "m.patel@example.com",
      address: "222 Maple Court, Anytown, USA"
    }
  },
  {
    id: "6",
    medicalRecordNo: "NRO-10050",
    name: "Jennifer Martinez",
    dob: "1979-09-21",
    age: 44,
    gender: "Female",
    weight: "70 kg",
    height: "170 cm",
    habits: ["Non-smoker", "Regular runner"],
    medicalHistory: "Multiple Sclerosis diagnosed 2018",
    allergies: ["Iodine"],
    reportPdf: "/reports/martinez_jennifer_report.pdf",
    chatbotTranscript: "New symptoms of fatigue and blurred vision in left eye developing...",
    lastVisit: "2023-09-08",
    nextAppointment: null,
    status: "Critical",
    recentActivity: [
      {
        type: "Appointment",
        date: "2023-09-08",
        description: "Urgent visit, potential relapse"
      },
      {
        type: "Test",
        date: "2023-09-08",
        description: "Ordered new MRI and spinal tap"
      }
    ],
    doctor: "Dr. Sarah Chen",
    contactInfo: {
      phone: "555-456-7890",
      email: "j.martinez@example.com",
      address: "333 Cedar Lane, Anytown, USA"
    }
  }
];
