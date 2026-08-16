# SadaqahFlow

Food-delivery coordination for Masjid Al Wasatiyyah Wal Itidaal.

[View live site](https://wasatiyyah-delivery.vercel.app/) · Built with Next.js, TypeScript, PostgreSQL, and Supabase

## The problem

Coordinating a delivery takes more than collecting a form. Requests need to be reviewed, drivers need to be approved, assignments can change, and everyone needs to know what happened without relying on scattered messages or spreadsheets.

SadaqahFlow keeps that process in one system. Recipients submit and track requests, volunteer drivers manage deliveries, and staff oversee the operation from an administrative dashboard.

## How it works

1. A recipient creates an account and submits a household request.
2. Staff review the request and approve or deny it.
3. An approved driver claims an available delivery or receives an assignment.
4. The driver records the outcome, and the request history is updated for the recipient and staff.

Driver applications follow their own approval flow, so registering as a driver does not grant access to delivery information.

## Stack

| Area | Technology |
| --- | --- |
| Application | Next.js 16, React 19, TypeScript |
| Database and authentication | Supabase, PostgreSQL |
| Interface | Tailwind CSS |
| Hosting | Vercel |
| Testing | Node.js test runner, ESLint |
