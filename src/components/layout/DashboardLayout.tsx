
import React from "react";
import {
  SidebarProvider,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  MessageSquare, 
  FileText, 
  Settings, 
  Bell, 
  LogOut, 
  User,
  Brain
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 p-6 bg-medical-gray">{children}</main>
        <Toaster />
      </div>
    </SidebarProvider>
  );
};

const AppSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center gap-2 px-6 py-5">
        <Brain size={28} className="text-medical-purple" />
        <div>
          <h1 className="text-xl font-bold text-medical-dark-blue flex items-center">
            Neuro<span className="text-medical-purple">Care</span>
          </h1>
          <p className="text-xs text-muted-foreground">Neurology Department</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/" className="flex items-center">
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/patients" className="flex items-center">
                    <Users className="h-5 w-5" />
                    <span>Patients</span>
                    <Badge className="ml-auto bg-medical-purple text-white">24</Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/appointments" className="flex items-center">
                    <Calendar className="h-5 w-5" />
                    <span>Appointments</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/chatbot" className="flex items-center">
                    <MessageSquare className="h-5 w-5" />
                    <span>Chatbot</span>
                    <Badge className="ml-auto bg-medical-blue text-white animate-pulse">5 new</Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/reports" className="flex items-center">
                    <FileText className="h-5 w-5" />
                    <span>Reports</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>Account</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/settings" className="flex items-center">
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/notifications" className="flex items-center">
                    <Bell className="h-5 w-5" />
                    <span>Notifications</span>
                    <Badge className="ml-auto bg-medical-blue text-white">3</Badge>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a href="/login" className="flex items-center text-destructive">
                    <LogOut className="h-5 w-5" />
                    <span>Logout</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="px-6 py-4">
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src="/doctor-avatar.png" alt="Dr. Sarah Chen" />
            <AvatarFallback className="bg-medical-light-blue text-medical-dark-blue">
              SC
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">Dr. Sarah Chen</p>
            <p className="text-xs text-muted-foreground">Neurologist</p>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="text-center">
          <p className="text-xs text-muted-foreground">© 2023 NeuroCare</p>
          <p className="text-xs text-muted-foreground">All rights reserved</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
