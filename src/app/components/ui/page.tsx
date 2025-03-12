"use client";

import React from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { TextArea } from "@/components/ui/TextArea";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { RadioGroup, Radio } from "@/components/ui/Radio";
import { Alert } from "@/components/ui/Alert";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { FormField } from "@/components/ui/FormField";
import { Form } from "@/components/ui/Form";
import { Toast, ToastProvider } from "@/components/ui/Toast";
import Link from "next/link";

export default function UIComponentsPage() {
  const [cruiseType, setCruiseType] = React.useState<string>("");
  const [cabinType, setCabinType] = React.useState<string>("");
  const [paymentMethod, setPaymentMethod] = React.useState<string>("");
  const [travelSeason, setTravelSeason] = React.useState<string>("");
  
  // Toast demo state
  const [showSuccessToast, setShowSuccessToast] = React.useState(false);
  const [showErrorToast, setShowErrorToast] = React.useState(false);
  const [showInfoToast, setShowInfoToast] = React.useState(false);
  const [showWarningToast, setShowWarningToast] = React.useState(false);

  // Function to show a toast and hide others
  const showToast = (toastType: 'success' | 'error' | 'info' | 'warning') => {
    // Hide all toasts first
    setShowSuccessToast(false);
    setShowErrorToast(false);
    setShowInfoToast(false);
    setShowWarningToast(false);
    
    // Then show the selected toast
    setTimeout(() => {
      switch(toastType) {
        case 'success':
          setShowSuccessToast(true);
          break;
        case 'error':
          setShowErrorToast(true);
          break;
        case 'info':
          setShowInfoToast(true);
          break;
        case 'warning':
          setShowWarningToast(true);
          break;
      }
    }, 10); // Small delay to ensure state updates properly
  };

  return (
    <ToastProvider>
      <main className="min-h-screen bg-uniworld-light-gray p-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <Link href="/" className="text-uniworld-blue hover:underline mb-8 inline-block">
              ← Back to Home
            </Link>
            <h1 className="text-4xl font-libel-bold text-uniworld-blue mb-4">
              Uniworld UI Components
            </h1>
            <p className="text-lg text-uniworld-dark-gray mb-8 font-questa">
              Foundational UI elements for building Uniworld's digital experiences.
            </p>
          </div>

          {/* Color Palette Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Color Palette
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-blue rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Deep Navy Blue</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#0C2340</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-white rounded-md border border-uniworld-input-border"></div>
                <p className="mt-2 text-sm font-questa-bold">White</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#FFFFFF</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-light-gray rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Light Gray</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#F5F5F5</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-dark-gray rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Dark Gray</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#4A4A4A</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-light-blue rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Light Blue</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#D9E6F2</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-yellow rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Accent Yellow</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#E6B800</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-blue-hover rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Blue Hover</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#1A3D6D</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-input-border rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Input Border</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#E0E0E0</p>
              </div>
              <div className="flex flex-col">
                <div className="h-20 bg-uniworld-footer-text rounded-md"></div>
                <p className="mt-2 text-sm font-questa-bold">Footer Text</p>
                <p className="text-xs text-uniworld-dark-gray/70 font-questa">#E0E0E0</p>
              </div>
            </div>
          </section>

          {/* Typography Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Typography
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Headings (Libel Suit)</h3>
                <div className="space-y-4">
                  <div>
                    <h1 className="text-5xl font-libel-bold">Heading 1</h1>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">5xl / Libel Suit Bold</p>
                  </div>
                  <div>
                    <h2 className="text-4xl font-libel-bold">Heading 2</h2>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">4xl / Libel Suit Bold</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-libel-bold">Heading 3</h3>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">3xl / Libel Suit Bold</p>
                  </div>
                  <div>
                    <h4 className="text-2xl font-libel-bold">Heading 4</h4>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">2xl / Libel Suit Bold</p>
                  </div>
                  <div>
                    <h5 className="text-xl font-libel-bold">Heading 5</h5>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">xl / Libel Suit Bold</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Body Text</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-lg font-libel">Libel Suit Regular - The world's only authentic boutique cruise line.</p>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">lg / Libel Suit Regular</p>
                  </div>
                  <div>
                    <p className="text-base font-questa">Questa Sans Regular - Uniworld offers itineraries in spectacular destinations throughout Europe, Russia, Egypt, and Asia.</p>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">base / Questa Sans Regular</p>
                  </div>
                  <div>
                    <p className="text-sm font-open-sans">Open Sans Regular - Our luxury cruises are designed to be as unique as our guests, with an array of authentic experiences both on board and onshore.</p>
                    <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">sm / Open Sans Regular</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Buttons Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Buttons
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary Button</Button>
                  <Button variant="secondary">Secondary Button</Button>
                  <Button variant="outline">Outline Button</Button>
                  <Button variant="ghost">Ghost Button</Button>
                  <Button variant="link">Link Button</Button>
                  <Button variant="danger">Danger Button</Button>
                  <Button variant="yellow">Yellow Button</Button>
                  <Button variant="light">Light Button</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="xs">Extra Small</Button>
                  <Button size="sm">Small</Button>
                  <Button size="md">Medium</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Button States</h3>
                <div className="flex flex-wrap gap-4">
                  <Button disabled>Disabled Button</Button>
                  <Button isLoading>Loading Button</Button>
                  <Button fullWidth>Full Width Button</Button>
                  <Button 
                    leftIcon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                      </svg>
                    }
                  >
                    Left Icon
                  </Button>
                  <Button 
                    rightIcon={
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    }
                  >
                    Right Icon
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Input Fields Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Input Fields
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  label="Text Input" 
                  placeholder="Enter your name"
                  helperText="This is a standard text input field"
                />
                <Input 
                  label="Email Input" 
                  type="email" 
                  placeholder="example@uniworld.com"
                  helperText="Please enter a valid email address"
                />
                <Input 
                  label="Password Input" 
                  type="password" 
                  placeholder="Enter your password"
                />
                <Input 
                  label="Disabled Input" 
                  placeholder="This input is disabled"
                  disabled
                />
                <Input 
                  label="Input with Error" 
                  placeholder="Enter your username"
                  error="This field is required"
                />
                <Input 
                  label="Input with Icon" 
                  placeholder="Search..."
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                  }
                />
              </div>
            </div>
          </section>

          {/* TextArea Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Text Areas
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TextArea 
                  label="Standard TextArea" 
                  placeholder="Enter your message"
                  helperText="Please provide detailed information"
                />
                <TextArea 
                  label="TextArea with Error" 
                  placeholder="Enter your feedback"
                  error="This field is required"
                />
                <TextArea 
                  label="Disabled TextArea" 
                  placeholder="This textarea is disabled"
                  disabled
                />
                <TextArea 
                  label="TextArea with Rows" 
                  placeholder="Enter a longer message"
                  rows={6}
                />
              </div>
            </div>
          </section>

          {/* Select Dropdown Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Select Dropdowns
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Select 
                  label="Standard Select" 
                  placeholder="Select an option"
                  options={[
                    { value: "europe", label: "Europe" },
                    { value: "asia", label: "Asia" },
                    { value: "africa", label: "Africa" },
                    { value: "americas", label: "Americas" },
                  ]}
                  helperText="Choose your preferred destination"
                />
                <Select 
                  label="Select with Disabled Options" 
                  placeholder="Select a cruise type"
                  options={[
                    { value: "river", label: "River Cruise" },
                    { value: "ocean", label: "Ocean Cruise", disabled: true },
                    { value: "expedition", label: "Expedition Cruise" },
                  ]}
                />
                <Select 
                  label="Disabled Select" 
                  placeholder="This select is disabled"
                  options={[
                    { value: "option1", label: "Option 1" },
                    { value: "option2", label: "Option 2" },
                  ]}
                  disabled
                />
                <Select 
                  label="Select with Error" 
                  placeholder="Select a duration"
                  options={[
                    { value: "7-10", label: "7-10 Days" },
                    { value: "11-14", label: "11-14 Days" },
                    { value: "15+", label: "15+ Days" },
                  ]}
                  error="Please select a duration"
                />
              </div>
            </div>
          </section>

          {/* Checkbox Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Checkboxes
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Checkbox 
                    label="Standard Checkbox" 
                    helperText="This is a standard checkbox"
                  />
                  <Checkbox 
                    label="Checked Checkbox" 
                    defaultChecked
                  />
                  <Checkbox 
                    label="Disabled Checkbox" 
                    disabled
                  />
                  <Checkbox 
                    label="Disabled Checked Checkbox" 
                    disabled
                    defaultChecked
                  />
                </div>
                <div className="space-y-4">
                  <Checkbox 
                    label="Checkbox with Error" 
                    error="This field is required"
                  />
                  <Checkbox 
                    label="Indeterminate Checkbox" 
                    indeterminate
                  />
                  <Checkbox 
                    label="Accept Terms and Conditions" 
                    helperText="By checking this box, you agree to our terms and conditions"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Radio Button Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Radio Buttons
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <RadioGroup 
                    label="Vertical Radio Group"
                    name="cruise-type"
                    options={[
                      { value: "river", label: "River Cruise" },
                      { value: "ocean", label: "Ocean Cruise" },
                      { value: "expedition", label: "Expedition Cruise" },
                    ]}
                    helperText="Select your preferred cruise type"
                    value={cruiseType}
                    onChange={setCruiseType}
                  />
                </div>
                <div>
                  <RadioGroup 
                    label="Horizontal Radio Group"
                    name="cabin-type"
                    options={[
                      { value: "standard", label: "Standard" },
                      { value: "deluxe", label: "Deluxe" },
                      { value: "suite", label: "Suite" },
                    ]}
                    orientation="horizontal"
                    value={cabinType}
                    onChange={setCabinType}
                  />
                </div>
                <div>
                  <RadioGroup 
                    label="Radio Group with Error"
                    name="payment-method"
                    options={[
                      { value: "credit", label: "Credit Card" },
                      { value: "paypal", label: "PayPal" },
                      { value: "bank", label: "Bank Transfer" },
                    ]}
                    error="Please select a payment method"
                    value={paymentMethod}
                    onChange={setPaymentMethod}
                  />
                </div>
                <div>
                  <RadioGroup 
                    label="Radio Group with Disabled Options"
                    name="travel-season"
                    options={[
                      { value: "spring", label: "Spring" },
                      { value: "summer", label: "Summer" },
                      { value: "fall", label: "Fall", disabled: true },
                      { value: "winter", label: "Winter", disabled: true },
                    ]}
                    value={travelSeason}
                    onChange={setTravelSeason}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Alerts Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Alerts
            </h2>
            <div className="space-y-4">
              <Alert variant="default" title="Default Alert">
                <p>This is a default alert — check it out!</p>
              </Alert>
              <Alert variant="error" title="Error Alert">
                <p>This is an error alert — check it out!</p>
              </Alert>
              <Alert variant="warning" title="Warning Alert">
                <p>This is a warning alert — check it out!</p>
              </Alert>
              <Alert variant="success" title="Success Alert">
                <p>This is a success alert — check it out!</p>
              </Alert>
              <Alert variant="info" title="Information Alert">
                <p>This is an info alert — check it out!</p>
              </Alert>
              <Alert variant="accent" title="Accent Alert">
                <p>This is an accent alert — check it out!</p>
              </Alert>
            </div>
          </section>

          {/* Error Message Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Error Messages
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input 
                    label="Username" 
                    placeholder="Enter your username"
                  />
                  <ErrorMessage message="This field is required" />
                </div>
                <div>
                  <Input 
                    label="Email" 
                    type="email" 
                    placeholder="example@uniworld.com"
                  />
                  <ErrorMessage message="Please enter a valid email address" />
                </div>
              </div>
            </div>
          </section>

          {/* Forms Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Form Elements
            </h2>
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Input Fields</h3>
                  <div className="space-y-4">
                    <FormField
                      label="Full Name"
                      htmlFor="fullName"
                      required
                    >
                      <Input
                        id="fullName"
                        placeholder="Enter your full name"
                      />
                    </FormField>
                    
                    <FormField
                      label="Email Address"
                      htmlFor="email"
                      required
                    >
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        error="Please enter a valid email address"
                      />
                      <ErrorMessage>Please enter a valid email address</ErrorMessage>
                    </FormField>
                    
                    <FormField
                      label="Phone Number"
                      htmlFor="phone"
                    >
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        disabled
                      />
                      <p className="text-sm text-uniworld-dark-gray/70 mt-1 font-questa">Currently unavailable</p>
                    </FormField>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Select & TextArea</h3>
                  <div className="space-y-4">
                    <FormField
                      label="Destination"
                      htmlFor="destination"
                      required
                    >
                      <Select
                        id="destination"
                        options={[
                          { value: "", label: "Select a destination" },
                          { value: "europe", label: "Europe" },
                          { value: "asia", label: "Asia" },
                          { value: "egypt", label: "Egypt" },
                          { value: "india", label: "India" }
                        ]}
                        value={cruiseType}
                        onChange={(e) => setCruiseType(e.target.value)}
                      />
                    </FormField>
                    
                    <FormField
                      label="Special Requests"
                      htmlFor="specialRequests"
                    >
                      <TextArea
                        id="specialRequests"
                        placeholder="Enter any special requests or accommodations..."
                        rows={4}
                      />
                    </FormField>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Checkboxes & Radio Buttons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <FormField
                      label="Cabin Preferences"
                      htmlFor="cabinPreferences"
                    >
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Checkbox id="balcony" />
                          <label htmlFor="balcony" className="ml-2 text-sm font-questa">Balcony</label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="suite" />
                          <label htmlFor="suite" className="ml-2 text-sm font-questa">Suite</label>
                        </div>
                        <div className="flex items-center">
                          <Checkbox id="accessible" />
                          <label htmlFor="accessible" className="ml-2 text-sm font-questa">Accessible Room</label>
                        </div>
                      </div>
                    </FormField>
                    
                    <FormField
                      label="Terms & Conditions"
                      htmlFor="terms"
                      required
                    >
                      <div className="flex items-center">
                        <Checkbox id="terms" />
                        <label htmlFor="terms" className="ml-2 text-sm font-questa">
                          I agree to the <a href="#" className="text-uniworld-blue hover:underline">Terms and Conditions</a>
                        </label>
                      </div>
                    </FormField>
                  </div>
                  
                  <div>
                    <FormField
                      label="Payment Method"
                      htmlFor="paymentMethod"
                      required
                    >
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Radio 
                            id="creditCard" 
                            name="paymentMethod" 
                            value="creditCard"
                            checked={paymentMethod === "creditCard"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label htmlFor="creditCard" className="ml-2 text-sm font-questa">Credit Card</label>
                        </div>
                        <div className="flex items-center">
                          <Radio 
                            id="paypal" 
                            name="paymentMethod" 
                            value="paypal"
                            checked={paymentMethod === "paypal"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label htmlFor="paypal" className="ml-2 text-sm font-questa">PayPal</label>
                        </div>
                        <div className="flex items-center">
                          <Radio 
                            id="bankTransfer" 
                            name="paymentMethod" 
                            value="bankTransfer"
                            checked={paymentMethod === "bankTransfer"}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label htmlFor="bankTransfer" className="ml-2 text-sm font-questa">Bank Transfer</label>
                        </div>
                      </div>
                    </FormField>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-questa-bold mb-3 text-uniworld-dark-gray">Form Actions</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Book Now</Button>
                  <Button variant="secondary">Save Draft</Button>
                  <Button variant="ghost">Cancel</Button>
                </div>
              </div>
            </div>
          </section>

          {/* Toast Section */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Toast Notifications
            </h2>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="primary"
                  onClick={() => showToast('success')}
                >
                  Show Success Toast
                </Button>
                <Button 
                  variant="danger"
                  onClick={() => showToast('error')}
                >
                  Show Error Toast
                </Button>
                <Button 
                  variant="secondary"
                  onClick={() => showToast('info')}
                >
                  Show Info Toast
                </Button>
                <Button 
                  variant="yellow"
                  onClick={() => showToast('warning')}
                >
                  Show Warning Toast
                </Button>
              </div>
              
              {showSuccessToast && (
                <Toast 
                  variant="success"
                  message="Your booking has been confirmed successfully!"
                  onClose={() => setShowSuccessToast(false)}
                />
              )}
              
              {showErrorToast && (
                <Toast 
                  variant="error"
                  message="There was a problem processing your request."
                  onClose={() => setShowErrorToast(false)}
                />
              )}
              
              {showInfoToast && (
                <Toast 
                  variant="info"
                  message="Your booking is being processed."
                  onClose={() => setShowInfoToast(false)}
                />
              )}
              
              {showWarningToast && (
                <Toast 
                  variant="warning"
                  message="Your session will expire in 5 minutes."
                  onClose={() => setShowWarningToast(false)}
                />
              )}
            </div>
          </section>
          
          {/* Checkbox Animation Demo */}
          <section className="bg-uniworld-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-libel-bold text-uniworld-blue mb-4">
              Enhanced Checkboxes
            </h2>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <Checkbox 
                    label="Standard Checkbox" 
                    helperText="No animation"
                  />
                  <Checkbox 
                    label="Scale Animation" 
                    animation="scale"
                    helperText="Scales when checked"
                  />
                  <Checkbox 
                    label="Pulse Animation" 
                    animation="pulse"
                    helperText="Pulses when checked"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </ToastProvider>
  );
} 