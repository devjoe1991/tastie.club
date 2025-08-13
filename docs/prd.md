# Product Requirements Document: tastie.club

* **Author:** Gemini
* **Date:** August 13, 2025
* **Status:** Version 1.1 (Draft)

---

## 1. Introduction & Vision

**tastie.club** is a premium subscription-based platform designed to connect discerning customers with partner restaurants. Our vision is to redefine how people discover and experience new dining opportunities.

For a monthly fee, members gain access to book complimentary, chef-curated tasting menus at a selection of restaurants during their designated off-peak hours.

This creates a symbiotic relationship: restaurants fill otherwise empty seats and have a low-risk opportunity to showcase their culinary specialties to a new audience, while customers get to explore the city's food scene in an exclusive and affordable way. tastie.club positions itself as a more curated and experience-focused alternative to discount-based services like Tastecard.

## 2. Problem Statement

* **For Restaurants:** Off-peak hours (e.g., Tuesday evenings, mid-afternoon on weekdays) lead to empty tables, representing significant lost revenue and operational inefficiency. Traditional marketing can be expensive and offers no guarantee of foot traffic.
* **For Customers:** Exploring new, high-quality restaurants can be expensive. Committing to a full meal at an unknown establishment carries a risk of disappointment. Food enthusiasts often seek unique tasting experiences that go beyond standard menus.

## 3. Goals & Objectives

### Business Goals
* **Primary:** Achieve a critical mass of both paying customer subscribers and active restaurant partners to establish a viable two-sided marketplace.
* **Secondary:** Generate consistent monthly recurring revenue (MRR) through customer subscriptions.
* **Tertiary:** Establish the tastie.club brand as a premium, trusted curator in the food-tech space.

### Product Goals
* **For Customers:** Provide a seamless and elegant platform for discovering and booking unique tasting experiences. Offer clear value through access and exclusivity.
* **For Restaurants:** Deliver a simple, self-service tool to manage off-peak availability and showcase their brand. Provide tangible value by driving guaranteed foot traffic.
* **Phase 1 (MVP) Goal:** Launch a visually stunning landing page to validate the concept and capture initial interest by building separate waitlists for customers and restaurants.

## 4. Target Audience

* **Primary Audience (Customers):** "The Adventurous Foodie"
    * **Demographics:** 25-45 years old, urban professionals, disposable income, tech-savvy.
    * **Motivations:** Loves trying new restaurants, appreciates quality food and unique experiences, active on social media (e.g., Instagram), seeks value but not "cheap" discounts.
* **Secondary Audience (Restaurants):** "The Savvy Restaurateur"
    * **Demographics:** Owners/Managers of independent restaurants or small, quality-focused chains.
    * **Motivations:** Keen to innovate and find new marketing channels, wants to maximize table occupancy, proud of their culinary creations and eager to build a base of loyal, returning customers.

## 5. Features & Requirements

### Phase 1: Waitlist & Landing Page (MVP)

| Feature ID | Feature Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| MVP-01 | **Landing Page** | A single, visually seductive page that clearly articulates the tastie.club value proposition. Must be minimalist, professional, and food-focused. | Must-Have |
| MVP-02 | **"How It Works" Page** | A dedicated page explaining the process. It must feature two distinct, parallel sections: one for customers ("Members") and one for restaurants ("Partners"). | Must-Have |
| MVP-03 | **Customer Waitlist** | A prominent, simple form (Email Address field + Submit Button) on the landing page to capture interest from potential customers. | Must-Have |
| MVP-04 | **Restaurant Waitlist** | A clear section and call-to-action for restaurants, leading to a form to capture interest (Restaurant Name, Contact Email, Location). | Must-Have |
| MVP-05 | **Waitlist Backend** | The waitlist forms must successfully write data to a Supabase table, distinguishing between 'customer' and 'restaurant' sign-ups. | Must-Have |
| MVP-06 | **Responsive Design** | All pages must be fully responsive and provide an excellent experience on desktop, tablet, and mobile devices. | Must-Have |

### Post-MVP: Core Platform Features

| Feature ID | Feature Name | Description | Priority |
| :--- | :--- | :--- | :--- |
| CORE-01 | **User Authentication** | Secure sign-up and login for both customers and restaurants using Supabase Auth. | Must-Have |
| CORE-02 | **Customer Subscription** | Integration with a payment provider (e.g., Stripe) to handle monthly subscription payments for a yearly contract. | Must-Have |
| CORE-03 | **Restaurant Profile & Menu Management** | A dashboard for restaurants to manage their profile, photos, and create/update their curated sample menu. | Must-Have |
| CORE-04 | **Restaurant Availability Management** | A tool/calendar for restaurants to set and update the specific days and times they will accept tastie.club bookings. | Must-Have |
| CORE-05 | **Booking System** | A system for customers to browse restaurants and book an available tasting slot. The booking is held and managed by tastie.club. | Must-Have |
| CORE-06 | **Booking Notifications** | Automated email notifications are sent to the restaurant (for confirmation) and the customer (with booking details) upon a successful booking. | Must-Have |
| CORE-07 | **Cancellation Fee Logic** | The system must be able to process a £15 cancellation fee if a customer cancels a booking within 12 hours of the reservation time. | Must-Have |
| CORE-08 | **Return Customer Discount** | A mechanism to track and offer a 10% discount to members who return to a restaurant for a full meal. | High |

## 6. Design & User Experience (UX)

* **Inspiration:** Jony Ive. The design must be clean, elegant, minimalist, and intuitive. Generous use of white space, perfect alignment, and premium typography are essential.
* **Mood:** Seductive, Appealing, Professional, Modern, Exclusive.
* **Visuals:** The user experience must be highly visual. High-resolution, artistic, and appetizing photography of food is the hero. The UI should feature unique, elegant page dividers to delineate sections.
* **Color Palette:** A sophisticated and inviting primary color theme should be used consistently across the platform to build brand identity.

## 7. Technology Stack

* **Framework:** Next.js (Version 14+) with App Router
* **Styling:** Tailwind CSS (Version 3+)
* **UI Components:** shadcn/ui
* **Backend & Database:** Supabase
* **Authentication:** Supabase SSR (`@supabase/ssr`) package

## 8. Assumptions

* Restaurants are willing to provide complimentary tasting menus in exchange for guaranteed foot traffic and the potential for upselling and repeat business.
* A sufficient number of high-quality restaurants will partner with the service to make the customer subscription valuable.
* Customers will perceive enough value in the curated tasting model to pay a recurring monthly subscription fee.

## 9. Out of Scope (For Now)

* Native mobile applications (iOS/Android).
* A customer review and rating system for restaurants.
* Advanced filtering (e.g., by cuisine type, dietary restrictions).
* In-app social features or user-to-user interaction.
* Full administrative backend for tastie.club staff (will rely on Supabase dashboard initially).