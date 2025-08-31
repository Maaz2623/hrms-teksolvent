"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";
import { useTRPC } from "@/trpc/client";
import { useMutation } from "@tanstack/react-query";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
  organizationId: string;
}

export const AddEmployeeSheet = ({ open, setOpen, organizationId }: Props) => {
  // form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");
  const [employeeCode, setEmployeeCode] = useState("");
  const [employmentType, setEmploymentType] = useState<string>("");
  const [status, setStatus] = useState<string | undefined>();
  const [dateOfJoining, setDateOfJoining] = useState<Date>(new Date());
  const [dateOfExit, setDateOfExit] = useState<Date>();

  const trpc = useTRPC();
  const createEmployee = useMutation(
    trpc.employees.createEmployee.mutationOptions()
  );

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    createEmployee.mutate({
      companyId: organizationId, // pass actual companyId from context/session
      firstName,
      lastName,
      email,
      phone: phone,
      department: department,
      designation: designation,
      employeeCode: employeeCode,
      employmentType: employmentType,
      dateOfJoining: dateOfJoining,
      dateOfExit: dateOfExit,
      status: (status as "active" | "terminated" | "resigned") || "active",
    });
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent className="w-full sm:max-w-[600px] overflow-y-auto pb-8">
        <SheetHeader>
          <SheetTitle className="text-xl font-bold">Add Employee</SheetTitle>
          <SheetDescription>
            Fill in the employee details below.
          </SheetDescription>
        </SheetHeader>

        <form className="mt-4 space-y-6 px-4" onSubmit={handleCreateEmployee}>
          {/* Personal Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john.doe@company.com"
                required
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+1 555 0123"
              />
            </div>
          </div>

          {/* Job Info */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Engineering"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="designation">Designation</Label>
              <Input
                id="designation"
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="Senior Developer"
              />
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="employeeCode">Employee Code</Label>
              <Input
                id="employeeCode"
                value={employeeCode}
                onChange={(e) => setEmployeeCode(e.target.value)}
                placeholder="EMP-001"
              />
            </div>
            <div className="flex flex-col gap-y-1">
              <Label htmlFor="employmentType">Employment Type</Label>
              <Select
                value={employmentType}
                onValueChange={(v) => setEmploymentType(v)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full-time">Full-Time</SelectItem>
                  <SelectItem value="part-time">Part-Time</SelectItem>
                  <SelectItem value="intern">Intern</SelectItem>
                  <SelectItem value="contractor">Contractor</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Dates */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-y-1">
              <Label>Date of Joining</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateOfJoining && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateOfJoining
                      ? format(dateOfJoining, "PPP")
                      : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Calendar
                    mode="single"
                    selected={dateOfJoining}
                    onSelect={setDateOfJoining}
                    required
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="flex flex-col gap-y-1">
              <Label>Date of Exit</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !dateOfExit && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateOfExit ? format(dateOfExit, "PPP") : "Pick a date"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="p-0">
                  <Calendar
                    mode="single"
                    selected={dateOfExit}
                    onSelect={setDateOfExit}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Status */}
          <div className="flex flex-col gap-y-1">
            <Label>Status</Label>
            <Select value={status} onValueChange={(v) => setStatus(v)}>
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="resigned">Resigned</SelectItem>
                <SelectItem value="terminated">Terminated</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              onClick={() => setOpen(false)}
              type="button"
            >
              Cancel
            </Button>
            <Button type="submit" disabled={createEmployee.isPending}>
              {createEmployee.isPending ? "Saving..." : "Save Employee"}
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};
