"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Shield,
  Lock,
  Clock,
  Truck,
  Zap,
  Mail,
  Box,
  Smartphone,
  Calendar,
} from "lucide-react";
import { Flower } from "lucide-react";
import { Circle, CircleDot } from "lucide-react";
import { ChevronDown, ChevronUp } from "lucide-react";

import Navbar from "../../components/confirmation/Navbar";
import { useState } from "react";

export default function TradeInPage() {
  const [postage, setPostage] = useState("dpd");
  const [paymentMethod, setPaymentMethod] = useState("bank-transfer");
  const [isOpen, setIsOpen] = useState(true);
  const handlePaymentChange = (method) => {
    setPaymentMethod(method);
    if (method === "paypal") {
      setIsOpen(false);
    }
    if (method === "bank-transfer") {
      setIsOpen(true);
    }
  };
  return (
    <div className="flex min-h-screen flex-col bg-[#F5F5F5]">
      <Navbar />

      <main className="flex w-full justify-center bg-white py-8">
        <div className="w-full max-w-[1280px] px-4 md:px-8">
          <div className="flex w-full  bg-white">
            <div className="flex-1 space-y-[20px]">
              <div className="space-y-[16px]">
                <h2 className="text-xl font-semibold leading-xl">
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input
                    id="firstName"
                    placeholder="First Name*"
                    className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                  />
                  <Input
                    id="lastName"
                    placeholder="Last Name*"
                    className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                  />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="Email*"
                  className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                />
                <Input
                  id="phone"
                  placeholder="Phone Number"
                  className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                />
              </div>

              <div className="space-y-[16px]">
                <h2 className="text-xl font-semibold">Address</h2>
                <div className="space-y-4">
                  <Input
                    id="postcode"
                    placeholder="Postcode or Address*"
                    className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                  />
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <Input
                      id="city"
                      placeholder="City*"
                      className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                    />
                    <Input
                      id="country"
                      placeholder="Country*"
                      className="h-12 rounded-md border border-[#E5E5E5]  px-[12px] py-[6px] text-sm text-[#737373] placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-[16px]">
                <h2 className="text-xl font-semibold">Postage</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    className={`flex items-center justify-between rounded-lg border  p-[12px] cursor-pointer transition-all ${
                      postage === "dpd"
                        ? "border-[#0A0A0A] bg-[#EFFFB2]"
                        : "border-[#E5E5E5] hover:border-gray-300"
                    }`}
                    onClick={() => setPostage("dpd")}
                  >
                    <div className="flex items-center gap-3">
                      <Box className="h-[24px] w-[24px] text-black" />
                      <div className="flex gap-2">
                        <p className="font-medium text-gray-900">DPD</p>
                        <p className="text-sm text-gray-500">
                          (up to £1,000 insured)
                        </p>
                      </div>
                    </div>
                    {postage === "dpd" ? (
                      <CircleDot className="h-[16px] w-[16px] text-black" />
                    ) : (
                      <Circle className="h-[16px] w-[16px] text-gray-400" />
                    )}
                  </div>

                  <div
                    className={`flex items-center justify-between rounded-lg border p-[12px] cursor-pointer transition-all ${
                      postage === "royal-mail"
                        ? "border-[#0A0A0A] bg-[#EFFFB2]"
                        : "border-[#E5E5E5] hover:border-gray-300"
                    }`}
                    onClick={() => setPostage("royal-mail")}
                  >
                    <div className="flex items-center gap-3">
                      <Flower className="h-[24px] w-[24px] text-black" />
                      <div className="flex gap-2">
                        <p className="font-medium text-gray-900">Royal Mail</p>
                        <p className="text-sm text-gray-500">
                          (up to £100 insured)
                        </p>
                      </div>
                    </div>
                    {postage === "royal-mail" ? (
                      <CircleDot className="h-[16px] w-[16px] text-black" />
                    ) : (
                      <Circle className="h-[16px] w-[16px] text-gray-400" />
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-[16px]">
                <h2 className="text-xl font-semibold">Payment</h2>
                <div>
                  <div
                    className={`rounded-tl-lg rounded-tr-lg border ${
                      paymentMethod === "bank-transfer"
                        ? "border-[#0A0A0A] "
                        : "border-[#E5E5E5] hover:border-gray-300"
                    }`}
                  >
                    <div
                      className={`flex rounded-tl-lg rounded-tr-lg items-center justify-between p-4 cursor-pointer hover:bg-gray-50  ${
                        paymentMethod === "bank-transfer" ? "bg-[#EFFFB2]" : ""
                      }`}
                      onClick={() => {
                        if (paymentMethod === "bank-transfer") {
                          setIsOpen(!isOpen);
                        }
                      }}
                    >
                      <div className="flex items-center gap-3">
                        <Label
                          className="font-medium cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePaymentChange("bank-transfer");
                          }}
                        >
                          Bank Transfer
                        </Label>
                      </div>
                      <div className="flex items-center gap-3">
                        <CircleDot
                          className={`h-5 w-5 cursor-pointer ${
                            paymentMethod === "bank-transfer"
                              ? "text-black"
                              : "text-gray-300"
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            handlePaymentChange("bank-transfer");
                          }}
                        />
                        {paymentMethod === "bank-transfer" && (
                          <div className="flex items-center">
                            {isOpen ? (
                              <ChevronUp
                                className="h-5 w-5 text-gray-500 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsOpen(false);
                                }}
                              />
                            ) : (
                              <ChevronDown
                                className="h-5 w-5 text-gray-500 cursor-pointer"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setIsOpen(true);
                                }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                    </div>

                    {paymentMethod === "bank-transfer" && isOpen && (
                      <div className="border-t border-[#E5E5E5] p-4 space-y-4">
                        <Input
                          id="accountTitle"
                          placeholder="Account Title*"
                          className="h-12 rounded-md border border-[#E5E5E5] bg-white px-4 text-base placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                        />

                        <Input
                          id="accountNumber"
                          placeholder="Account Number*"
                          className="h-12 rounded-md border border-[#E5E5E5] bg-white px-4 text-base placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                        />

                        <Input
                          id="sortCode"
                          placeholder="Sort Code*"
                          className="h-12 rounded-md border border-[#E5E5E5] bg-white px-4 text-base placeholder:text-gray-400 focus:border-gray-400 focus-visible:ring-0"
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className={`flex items-center justify-between rounded-bl-lg rounded-br-lg border p-4 cursor-pointer transition-all ${
                      paymentMethod === "paypal"
                        ? "border-[#0A0A0A]"
                        : "border-[#E5E5E5] hover:border-gray-300"
                    }`}
                    onClick={() => handlePaymentChange("paypal")}
                  >
                    <Label className="font-medium cursor-pointer ">
                      PayPal
                    </Label>
                    <CircleDot
                      className={`h-5 w-5 ${
                        paymentMethod === "paypal"
                          ? "text-black"
                          : "text-gray-300"
                      }`}
                    />
                  </div>
                </div>
              </div>

              <Button
                variant="default"
                size="lg"
                className="h-[48px] rounded-md bg-[#171717] text-white hover:bg-black/90 w-full"
              >
                Place Trade-in
              </Button>
            </div>

            <Separator
              orientation="vertical"
              className="mx-6 hidden w-[1px] bg-[#E5E5E5] lg:block"
            />

            <div className="w-[432px] h-[568px] shrink-0">
              <div className="space-y-6">
                <div className="border-b border-[#E5E5E5] p-[16px] w-full h-[128px]">
                  <div className="flex gap-[8px] h-[96px]">
                    <Smartphone className="h-[96px] w-[96px]  text-gray-400" />
                    <div className="flex-1">
                      <span className="text-xl font-semibold text-gray-900 text-[#0A0A0A]">
                        iPhone 17 Pro Max
                      </span>
                      <p className="text-base text-[#0A0A0A] mt-0.5">
                        256GB | Unlocked | Excellent
                      </p>
                      <p className=" text-3xl font-bold text-[#0C9733]">£684</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex space-y-2 h-[92px] gap-[8px] border border-[#E5E5E5] p-[12px] rounded-md">
                    <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                      <Truck className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Free & Insured Shipping
                      </p>
                      <p className="text-sm text-[#737373] leading-relaxed">
                        We provide a prepaid, trackable shipping label. Your
                        device is fully insured from your door to ours.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-y-2 h-[92px] gap-[8px] border border-[#E5E5E5] p-[12px] rounded-md">
                    <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                      <Calendar className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        14-Day Price Lock
                      </p>
                      <p className="text-sm text-[#737373] leading-relaxed mt-0.5">
                        Market prices fluctuate, but your offer is guaranteed
                        for 14 days from the moment you place Trade-in.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-y-2 h-[92px] gap-[8px] border border-[#E5E5E5] p-[12px] rounded-md">
                    <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                      <Shield className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Safe & Secure Data
                      </p>
                      <p className="text-sm text-[#737373] leading-relaxed mt-0.5">
                        Your personal and banking information is protected with
                        industry-standard encryption. We never share your data.
                      </p>
                    </div>
                  </div>

                  <div className="flex space-y-2 h-[92px] gap-[8px] border border-[#E5E5E5] p-[12px] rounded-md">
                    <div className="flex h-[20px] w-[20px] shrink-0 items-center justify-center">
                      <Zap className="h-5 w-5 text-gray-500" />
                    </div>
                    <div>
                      <p className="text-base font-medium text-gray-900">
                        Fast Payouts
                      </p>
                      <p className="text-sm text-[#737373] leading-relaxed mt-0.5">
                        Get paid within 24 hours of device inspection via your
                        preferred payment method. No hidden fees, ever.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
