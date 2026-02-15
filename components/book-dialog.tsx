"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import BookingForm from "./booking-form";

const BookDialog = ({
  dialogTriggerChild,
  serviceType,
  serviceDescription,
}: {
  dialogTriggerChild: React.ReactNode;
  serviceType: string;
  serviceDescription: string;
}) => {
  return (
    <Dialog>
      <DialogTrigger className="w-full">{dialogTriggerChild}</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{`Book ${serviceType}`}</DialogTitle>
          <DialogDescription>{serviceDescription}</DialogDescription>
        </DialogHeader>

        <BookingForm title="" description="" serviceType={serviceType} />
      </DialogContent>
    </Dialog>
  );
};

export default BookDialog;
