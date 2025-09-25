"use client"

import type React from "react"

import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function InquiryFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    shotList: "",
    budget: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validate = () => {
    let newErrors = {}
    if (!formData.name) newErrors = { ...newErrors, name: "Name is required" }
    if (!formData.email) {
      newErrors = { ...newErrors, email: "Email is required" }
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors = { ...newErrors, email: "Email address is invalid" }
    }
    if (!formData.preferredDate) newErrors = { ...newErrors, preferredDate: "Preferred date is required" }
    if (!formData.shotList) newErrors = { ...newErrors, shotList: "Shot list/project details are required" }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prevData) => ({ ...prevData, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) {
      // This is where you would typically send the form data to an email service
      // For this project, we are simulating submission to email only.
      // In a real application, you would integrate with a service like Formspree, Netlify Forms, or a custom API endpoint.
      console.log("Form data submitted:", formData)
      setIsSubmitted(true)
      // Reset form after submission if needed
      setFormData({
        name: "",
        email: "",
        phone: "",
        preferredDate: "",
        shotList: "",
        budget: "",
        message: "",
      })
    }
  }

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container space-y-8 px-4 md:px-6">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Inquire About Your Project</h2>
          <p className="text-muted-foreground text-lg md:text-xl text-pretty">
            {"Ready to create stunning visuals? Fill out the form below to discuss your photography needs."}
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-background p-8 rounded-lg shadow-lg">
          {isSubmitted ? (
            <div className="text-center text-primary-foreground bg-primary p-4 rounded-md">
              <p className="text-lg font-semibold">Thank you for your inquiry! We will get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                {errors.name && <p className="text-destructive text-sm">{errors.name}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@example.com"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-destructive text-sm">{errors.email}</p>}
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredDate">Preferred Shoot Date</Label>
                <Input id="preferredDate" type="date" value={formData.preferredDate} onChange={handleChange} />
                {errors.preferredDate && <p className="text-destructive text-sm">{errors.preferredDate}</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="shotList">Shot List / Project Details</Label>
                <Textarea
                  id="shotList"
                  placeholder="Describe your project, desired shots, and any specific requirements."
                  rows={5}
                  value={formData.shotList}
                  onChange={handleChange}
                />
                {errors.shotList && <p className="text-destructive text-sm">{errors.shotList}</p>}
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                <Input id="budget" placeholder="e.g., $2000 - $4000" value={formData.budget} onChange={handleChange} />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="message">Additional Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Any other details you'd like to share."
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <div className="md:col-span-2 flex justify-center">
                <Button type="submit" className="w-full md:w-auto px-8 py-3 text-lg">
                  Submit Inquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
